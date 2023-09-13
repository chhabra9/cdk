import * as cdk from '@aws-cdk/core';
import * as cfn_inc from '@aws-cdk/cloudformation-include';

export class MigrationStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const cfnInclude = new cfn_inc.CfnInclude(this, 'Template', { 
      templateFile: 'templates/stack.yml',
      loadNestedStacks: {
        'ApiGateway': {
          templateFile: 'templates/api.yml'
        },
        'LambdaFunctions': {
          templateFile: 'templates/lambda.yml'
        },
        'DynamoDBTables':{
          templateFile: 'templates/dynamo.yml'
        }
      }
    });
  }
}
