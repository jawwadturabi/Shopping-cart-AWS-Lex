var AWS = require('aws-sdk');

var SNS = new AWS.SNS();

exports.sendTextMessage = (Message, PhoneNumber) => {
    PhoneNumber.filter((v, i) => {
        var params = {
            Message,
            PhoneNumber: PhoneNumber[i],
            MessageAttributes: {
                'AWS.SNS.SMS.SenderID': {
                    'DataType': 'String',
                    'StringValue': 'WhyConnect'
                }
            }
        };

        var publishTextPromise = SNS.publish(params).promise();
        publishTextPromise
            .then(data => { console.log("Message ID is :", data.MessageId); })
            .catch(err => { console.log("err is : ", err); })
    })
}

