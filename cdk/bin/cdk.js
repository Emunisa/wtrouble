#!/usr/bin/env node

import cdk from 'aws-cdk-lib';
import WTroubleLambdaStack from '../lib/w-trouble-lambda.js';
import WTroublePipelineStack from '../lib/w-trouble-pipeline.js';
import WTroubleRoutingStack from '../lib/w-trouble-routing.js';

const app = new cdk.App();


// new WTroublePipeline(app, 'w-trouble-pipeline', {
// });

const routing = new WTroubleRoutingStack(app, 'w-trouble-routing', {
    env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});


const lambda = new WTroubleLambdaStack(app, 'w-trouble-lambda', {
    env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
    routing: routing,

});