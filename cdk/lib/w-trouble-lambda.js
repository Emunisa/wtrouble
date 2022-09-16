import cdk from 'aws-cdk-lib';
import apigateway from 'aws-cdk-lib/aws-apigateway';
import lambda from 'aws-cdk-lib/aws-lambda';
import s3 from 'aws-cdk-lib/aws-s3';
import route53 from 'aws-cdk-lib/aws-route53';
import targets from 'aws-cdk-lib/aws-route53-targets';

import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export default class WTroubleLambdaStack extends cdk.Stack {
    /**
    *
    * @param {Construct} scope
    * @param {string} id
    * @param {StackProps=} props
    */
    constructor(scope, id, props) {
        super(scope, id, props);

        // this is an s3 bucket that is used by lambda to store its deployment
        // packages.  we don't need to think about it much beyond that.
        const bucket = new s3.Bucket(this, `${id}-bucket`, {
            bucketName: `${id}-bucket`
        });

        // the lambda function itself.  this will be triggered whenever our api
        // gateway is accessed.  the code itself is stored in the "lambda" directory
        // in this repository.
        const handler = new lambda.Function(this, `${id}-function`, {
            runtime: lambda.Runtime.NODEJS_16_X, // So we can use async in widget.js
            code: lambda.Code.fromAsset('lambda'),
            handler: 'server.handler',
            environment: {
                BUCKET: bucket.bucketName
            }
        });

        // allow lambda function to read and write to the s3 bucket.
        bucket.grantReadWrite(handler);

        // this is an api gateway that we will use to bridge between an https request
        // and our lambda function.  basically we associate the gateway with the
        // desired dns name and target it at the lambda function.
        const api = new apigateway.LambdaRestApi(this, `${id}-api`, {
            handler: handler,
            proxy: true,
            restApiName: `${id}-api`,
            description: `api gateway front for the ${id} wtrouble api`,
            binaryMediaTypes: [ '*/* '],
            domainName: {
                domainName: 'wtrouble-test.workbench.gg',
                certificate: props.routing.certificate
            }
        });

        // throttle the endpoint to guard against DDOS and other load based attacks
        // const usagePlan = api.addUsagePlan(`${id}-api-plan`, {
        //     throttle: {
        //         rateLimit: 5,
        //         burstLimit: 2
        //     }
        // });
        // const usagePlanKey = api.addApiKey('${id}-api-plan-key');
        // usagePlan.addApiKey(usagePlanKey);

        // the dns record that will actually resolve the url to the api gateway. there
        // might be some issue here with urls with 4 periods.  we don't do that
        // currently, though.
        const dnsRecord = new route53.ARecord(this, `${id}-dns-record`, {
            zone: props.routing.hostedZone,
            target: route53.RecordTarget.fromAlias(new targets.ApiGateway(api))
        });
    }
}