const AWS = require('aws-sdk');
var stepfunctions = new AWS.StepFunctions({
    endpoint: 'http://app:8083',
    region: 'eu-west-1',
});
exports.invokeStateMachine = (event, context, callback) => {
    try {
        console.log("Invoking state machine");
        var params = {
            stateMachineArn: "arn:aws:states:eu-west-1:134256517791:stateMachine:testStateMachine",
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
    } catch (error) {
        console.log(error);
        callback(error);
    }
};