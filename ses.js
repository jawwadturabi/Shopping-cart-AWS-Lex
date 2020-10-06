
var AWS = require('aws-sdk')

var ses = new AWS.SES()

exports.sendEmail = (email, message) => {
    var params = {
        Destination: {
            ToAddresses: [email]
        },
        Message: {
            Body: {
                Text: {
                    Charset: "UTF-8",
                    Data: message
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Invoice"
            }
        },
        Source: "info@whyconnect.business",
    };
    ses.sendEmail(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });
}