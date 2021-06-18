const AWS = require('aws-sdk');
var stepfunctions = new AWS.StepFunctions({
    endpoint: 'http://app:8083',
    region: process.env.AWS_DEFAULT_REGION,
});
exports.invokeStateMachine = (event, context, callback) => {
    try {
        console.log("Invoking state machine");
        stepfunctions.listStateMachines({}, function(err, data) {
            if (err){
                console.log(err, err.stack); // an error occurred
                return;
            }
            const params = {
                stateMachineArn: data.stateMachines[0].stateMachineArn,
                input: "{}"
            };
            stepfunctions.startExecution(params, function (err, data) {
                if (err) {
                    console.log(err, err.stack);
                } else {
                    const response = {
                        statusCode: 200,
                        body: JSON.stringify({
                            message: "State machine started"
                        }),
                    };
                    callback(null, response);
                }
            });
        });
    } catch (error) {
        console.log(error);
        callback(error);
    }
};