import cdk from 'aws-cdk-lib';
import apigateway from 'aws-cdk-lib/aws-apigateway';
import lambda from 'aws-cdk-lib/aws-lambda';
import s3 from 'aws-cdk-lib/aws-s3';

import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export default class WTroublePipelineStack extends cdk.Stack {
    /**
    *
    * @param {Construct} scope
    * @param {string} id
    * @param {StackProps=} props
    */
    constructor(scope, id, props) {
        super(scope, id, props);

        // The code that defines your stack goes here

        // example resource
        // const queue = new sqs.Queue(this, 'CdkQueue', {
        //   visibilityTimeout: Duration.seconds(300)
        // });
        const lambda = new WTroublePipeline(this, 'WTroublePipeline');
    }
}

class WTroublePipeline extends Construct {
    constructor(scope, id) {
        super(scope, id);

    }
}