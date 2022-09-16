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

        // const pipeline = new Pipeline(this, "Pipeline", {})

        // const repo = Repository.fromRepositoryName(
        //     this,
        //     "WidgetsServiceRepository",
        //     props.repositoryName
        // )
        // const sourceOutput = new Artifact("SourceOutput")
        // const sourceAction = new CodeCommitSourceAction({
        //     actionName: "CodeCommit",
        //     repository: repo,
        //     output: sourceOutput,
        // })
        // pipeline.addStage({
        //     stageName: "Source",
        //     actions: [sourceAction],
        // })

        // this.createBuildStage(pipeline, sourceOutput)

        // const project = new PipelineProject(this, `BuildProject`, {
        //     environment: {
        //         buildImage: LinuxBuildImage.STANDARD_3_0,
        //     },
        // })

        // const cdkDeployPolicy = new PolicyStatement()
        // cdkDeployPolicy.addActions(
        //     "cloudformation:GetTemplate",
        //     "cloudformation:CreateChangeSet",
        //     "cloudformation:DescribeChangeSet",
        //     "cloudformation:ExecuteChangeSet",
        //     "cloudformation:DescribeStackEvents",
        //     "cloudformation:DeleteChangeSet",
        //     "cloudformation:DescribeStacks",
        //     "s3:*Object",
        //     "s3:ListBucket",
        //     "s3:getBucketLocation",
        //     "lambda:UpdateFunctionCode",
        //     "lambda:GetFunction",
        //     "lambda:CreateFunction",
        //     "lambda:DeleteFunction",
        //     "lambda:GetFunctionConfiguration",
        //     "lambda:AddPermission",
        //     "lambda:RemovePermission"
        // )
        // cdkDeployPolicy.addResources(
        //     this.formatArn({
        //         service: "cloudformation",
        //         resource: "stack",
        //         resourceName: "CDKToolkit/*",
        //     }),
        //     this.formatArn({
        //         service: "cloudformation",
        //         resource: "stack",
        //         resourceName: `${lambdaApiStackName}/*`,
        //     }),
        //     this.formatArn({
        //         service: "lambda",
        //         resource: "function",
        //         arnFormat: ArnFormat.COLON_RESOURCE_NAME,
        //         resourceName: lambdaFunctionName,
        //     }),
        //     "arn:aws:s3:::cdktoolkit-stagingbucket-*"
        // )
        // const editOrCreateLambdaDependencies = new PolicyStatement()
        // editOrCreateLambdaDependencies.addActions(
        //     "iam:GetRole",
        //     "iam:PassRole",
        //     "iam:CreateRole",
        //     "iam:AttachRolePolicy",
        //     "iam:PutRolePolicy",
        //     "apigateway:GET",
        //     "apigateway:DELETE",
        //     "apigateway:PUT",
        //     "apigateway:POST",
        //     "apigateway:PATCH",
        //     "s3:CreateBucket",
        //     "s3:PutBucketTagging"
        // )
        // editOrCreateLambdaDependencies.addResources("*")
        // project.addToRolePolicy(cdkDeployPolicy)
        // project.addToRolePolicy(editOrCreateLambdaDependencies)

        // const buildOutput = new Artifact(`BuildOutput`)
        // const buildAction = new CodeBuildAction({
        //     actionName: `Build`,
        //     project,
        //     input: sourceOutput,
        //     outputs: [buildOutput],
        // })

        // pipeline.addStage({
        //     stageName: "build",
        //     actions: [buildAction],
        // })

        // return buildOutput
    }
}