## Editing the CDK

### Step 1: why would you do this

This is an involved process, will require your own expenses, and very rarely is actually needed.
Do you actually need to do this?  Here are some common edits that DO NOT need any changes to CDK.

1. making style changes to the website
1. making new pages and buttons on the website
1. changing how a button works
1. adding new handlers in the server
1. changing the data format in dynamoDB (backwards compatible changes only)

Here is the only two resons you would need to edit the CDK

1. you have asked dkeka about the change and he said you need to edit the CDK
1. you know what you are doing and are certain the change you want will need edits in the CDK

### Step 2: AWS account setup

1. make a new AWS account
1. ping dkeka to add you to the aws organization (you can continue without a response)
1. make a new IAM user with CLI access and download the pem for it
  1. if you don't have the aws cli, install that first
  1. run `aws configure`
  1. recommended default region is `us-west-1` but technically it can be anything
  1. recommended defatul output format is `json` but again can be anything
1. run npm install (install node if you do not have npm)
1. run `npm run cdk -- bootstrap aws://[account number]/[default region]`
	1. the parts in brackets [] need to be filled out
1. make your code changes
1. deploy your own stack
	1. run `npm run configure -- [YOUR GITHUB ALIAS]`
	1. run `npm run deploy -- w-trouble-routing`, this will get stuck in pending.  it is safe to end the cli process once
	   it reads `CREATE_IN_PROGRESS   | AWS::CertificateManager::Certificate | w-trouble-routing-certificate`
	1. go to the aws console for your aws account and go to route 53.  click on hosted zones and then go
	   to your new hosted zone.  click on details and send the entire data chunk to dkeka.  it should
	   include the name of the hosted zone and the NS record at least (it says NS under the type column).
  1. while in the console, also go to certificate manager and selected your pending certificate.  in
     the details screen there should be a "add to route 53" button.  click that button and through
     the subsequent prompts.
  1. wait.  once dkeka has updated the registrar your certificate should verify and the deploy should
     complete (you can see the deploy state in cloud formation, even if you have closed the CLI command).
1. run `npm run deploy -- w-trouble-lambda` and wait for it to finish.
1. validate your site at https://wtrouble-[YOUR GITHUB ALIAS].workbench.gg/
1. now you can make a PR in github.