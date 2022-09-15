import cdk from 'aws-cdk-lib';
import apigateway from 'aws-cdk-lib/aws-apigateway';
import lambda from 'aws-cdk-lib/aws-lambda';
import s3 from 'aws-cdk-lib/aws-s3';
import route53 from 'aws-cdk-lib/aws-route53';
import acm from 'aws-cdk-lib/aws-certificatemanager';

import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export default class WTroubleRoutingStack extends cdk.Stack {
    /**
    *
    * @param {Construct} scope
    * @param {string} id
    * @param {StackProps=} props
    */
    constructor(scope, id, props) {
        super(scope, id, props);

        // this is the hosted zone for "wtrouble.workbench.gg".  all routing information for
        // the domain should go in here.  for example we provide this hosted zone to the
        // lambda stack so it can add a record that will route to its api gateway.
        const hostedZone = new route53.HostedZone(this, `${id}-hosted-zone`, {
            zoneName: 'wtrouble-test.workbench.gg'
        });

        // this is the SSL certificate that the api gateways will use to authenticate https
        // requests.  it needs to be validated, which is a bit of a manual process.
        const certificate = new acm.Certificate(this, `${id}-certificate`, {
            domainName: '*.wtrouble-test.workbench.gg',
            validation: acm.CertificateValidation.fromDns(),
            subjectAlternativeNames: ['wtrouble-test.workbench.gg']
        });

        // export the variables for use in other stacks.
        this.certificate = certificate;
        this.hostedZone = hostedZone;
    }
}