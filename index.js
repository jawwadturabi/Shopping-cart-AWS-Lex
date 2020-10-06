'use strict'
const sns = require('./sns')
const ses = require("./ses");
function dispatch(intentRequest, callback) {
    console.log(`request received for userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}, request=${(intentRequest.inputTranscript)}`);
    let sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    const dialogState = intentRequest.recentIntentSummaryView ? intentRequest.recentIntentSummaryView[0].dialogActionType : undefined;
    const confirmationStatus = intentRequest.currentIntent.confirmationStatus;
    console.log(`intent request is : ", ${dialogState} , invocation source = ${confirmationStatus}`)
    switch (intentRequest.currentIntent.name) {

        case 'Shopping':

            callback({
                "dialogAction": {
                    "type": "ElicitIntent",
                    "message": {
                        "contentType": "CustomPayload",
                        "content": "We have different variety of products."
                    },
                    "responseCard": {
                        "version": 1,
                        "contentType": "application/vnd.amazonaws.card.generic",
                        "genericAttachments": [
                            {
                                "title": "Please choose the product you are looking for.",
                                "buttons": [
                                    {
                                        "text": "Jeans",
                                        "value": "jeans"
                                    },
                                    {
                                        "text": "Shoes",
                                        "value": "shoes"
                                    },
                                    {
                                        "text": "T-shirt",
                                        "value": "t-shirt"
                                    }
                                ]
                            }
                        ]
                    }
                }
            })

            break;

        case 'jeans':

            callback({
                "sessionAttributes": {
                    item1: "jeans",
                    item2: sessionAttributes.item2 ? sessionAttributes.item2 : "",
                    item3: sessionAttributes.item3 ? sessionAttributes.item3 : "",
                    item4: sessionAttributes.item4 ? sessionAttributes.item4 : "",
                },
                "dialogAction": {
                    "type": "ElicitIntent",
                    "message": {
                        "contentType": "PlainText",
                        "content": "Please choose the product you are looking for."
                    },
                    "responseCard": {
                        "version": 1,
                        "contentType": "application/vnd.amazonaws.card.generic",
                        "genericAttachments": [
                            {
                                "title": "Pant A",
                                "subTitle": "Price: $49",
                                "imageUrl": "https://www.houseofcalibre.com/wp-content/uploads/2020/06/dark-blue-jeans.jpg",
                                "buttons": [
                                    {
                                        "text": "Add to Cart",
                                        "value": "add to cart"
                                    }
                                ]
                            },
                            {
                                "title": "Pant B",
                                "subTitle": "Price: $49",
                                "imageUrl": "https://www.buyon.pk/image/data/members/noorbahadur/size-2534-women-candy-colored-jeans-cotton-pencil-pants-leginsfashion-jeans-femme-mid-waist-woman-slim-fit-skinny-jeans-womanfull-length-20-colors-navy-blue-breathable-material-denim-optcwkf.jpg",
                                "buttons": [
                                    {
                                        "text": "Add to Cart",
                                        "value": "add to cart"
                                    }
                                ]
                            },
                            {
                                "title": "Pant C",
                                "subTitle": "Price: $49",
                                "imageUrl": "https://oxford.com.pk/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/b/l/black_4.jpg",
                                "buttons": [
                                    {
                                        "text": "Add to Cart",
                                        "value": "add to cart"
                                    }
                                ]
                            }
                        ]
                    }
                }
            })

            break;

        case 'outerwear':

            callback({
                "sessionAttributes": {
                    item1: sessionAttributes.item1 ? sessionAttributes.item1 : "",
                    item2: "outerwear",
                    item3: sessionAttributes.item3 ? sessionAttributes.item3 : "",
                    item4: sessionAttributes.item4 ? sessionAttributes.item4 : "",
                },
                "dialogAction": {
                    "type": "ElicitIntent",
                    "message": {
                        "contentType": "PlainText",
                        "content": "Please choose the product you are looking for."
                    },
                    "responseCard": {
                        "version": 1,
                        "contentType": "application/vnd.amazonaws.card.generic",
                        "genericAttachments": [
                            {
                                "title": "Outerwear A",
                                "subTitle": "Price: $29",
                                "imageUrl": "https://cdn.shopify.com/s/files/1/0284/9036/7048/products/11001_012_P_1_1600x.jpg?v=1591976334",
                                "buttons": [
                                    {
                                        "text": "Add to Cart",
                                        "value": "add to cart"
                                    }
                                ]
                            },
                            {
                                "title": "Outerwear B",
                                "subTitle": "Price: $29",
                                "imageUrl": "https://i.pinimg.com/originals/86/3e/4c/863e4c28ade87c4324648555edce94e1.jpg",
                                "buttons": [
                                    {
                                        "text": "Add to Cart",
                                        "value": "add to cart"
                                    }
                                ]
                            },
                            {
                                "title": "Outerwear C",
                                "subTitle": "Price: $29",
                                "imageUrl": "https://d15udtvdbbfasl.cloudfront.net/catalog/product/large_image/01_420258.jpg",
                                "buttons": [
                                    {
                                        "text": "Add to Cart",
                                        "value": "add to cart"
                                    }
                                ]
                            }
                        ]
                    }
                }
            })
            break;

        case 'Tshirt':

            callback({
                "sessionAttributes": {
                    item1: sessionAttributes.item1 ? sessionAttributes.item1 : "",
                    item2: sessionAttributes.item2 ? sessionAttributes.item2 : "",
                    item3: "tshirt",
                    item4: sessionAttributes.item4 ? sessionAttributes.item4 : "",
                },
                "dialogAction": {
                    "type": "ElicitIntent",
                    "message": {
                        "contentType": "CustomPayload",
                        "content": "Please choose the product you are looking for."
                    },
                    "responseCard": {
                        "version": 1,
                        "contentType": "application/vnd.amazonaws.card.generic",
                        "genericAttachments": [
                            {
                                "title": "Tshirt A",
                                "subTitle": "Price: $25",
                                "imageUrl": "https://sc01.alicdn.com/kf/HTB1GyY9aStYBeNjSspkq6zU8VXap.jpg",
                                "buttons": [
                                    {
                                        "text": "Add to Cart",
                                        "value": "add to cart"
                                    }
                                ]
                            },
                            {
                                "title": "Tshirt B",
                                "subTitle": "Price: $25",
                                "imageUrl": "https://cdn11.bigcommerce.com/s-64375/images/stencil/1280x1280/products/86/4239/fresh_zip_navy_f__04104.1403572824.jpg?c=2",
                                "buttons": [
                                    {
                                        "text": "Add to Cart",
                                        "value": "add to cart"
                                    }
                                ]
                            },
                            {
                                "title": "Tshirt C",
                                "subTitle": "Price: $25",
                                "imageUrl": "https://docksbeers.com/wp-content/uploads/2019/05/merch-TSHIRT-W-2.jpg",
                                "buttons": [
                                    {
                                        "text": "Add to Cart",
                                        "value": "add to cart"
                                    }
                                ]
                            }
                        ]
                    }
                }
            })

            break;

        case 'shoes':

            callback({
                "sessionAttributes": {
                    item1: sessionAttributes.item1 ? sessionAttributes.item1 : "",
                    item2: sessionAttributes.item2 ? sessionAttributes.item2 : "",
                    item3: sessionAttributes.item3 ? sessionAttributes.item3 : "",
                    item4: "shoes"
                },
                "dialogAction": {
                    "type": "ElicitIntent",
                    "message": {
                        "contentType": "PlainText",
                        "content": "Please choose the product you are looking for."
                    },
                    "responseCard": {
                        "version": 1,
                        "contentType": "application/vnd.amazonaws.card.generic",
                        "genericAttachments": [
                            {
                                "title": "Shoe A",
                                "subTitle": "Price: $19",
                                "imageUrl": "https://i8.amplience.net/i/office/1564202740_md1.jpg?$newhighres$",
                                "buttons": [
                                    {
                                        "text": "Add to Cart",
                                        "value": "add to cart"
                                    }
                                ]
                            },
                            {
                                "title": "Shoe B",
                                "subTitle": "Price: $19",
                                "imageUrl": "https://ae01.alicdn.com/kf/H31cb9d1f82ec4c1d925de86874c1b2a7U/Canvas-shoes-for-girls-2020-Spring-Fashion-Sneakers-Solid-Sewing-Women-Denim-Shoe-Sapato-Feminino-Size.jpg",
                                "buttons": [
                                    {
                                        "text": "Add to Cart",
                                        "value": "add to cart"
                                    }
                                ]
                            },
                            {
                                "title": "Shoe C",
                                "subTitle": "Price: $19",
                                "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/61Ez19M9BZL._AC_UY1000_.jpg",
                                "buttons": [
                                    {
                                        "text": "Add to Cart",
                                        "value": "add to cart"
                                    }
                                ]
                            }
                        ]
                    }
                }
            })
            break;

        case 'AddCart':
            callback({
                sessionAttributes: {
                    item1: sessionAttributes.item1 ? sessionAttributes.item1 : "",
                    item2: sessionAttributes.item2 ? sessionAttributes.item2 : "",
                    item3: sessionAttributes.item3 ? sessionAttributes.item3 : "",
                    item4: sessionAttributes.item4 ? sessionAttributes.item4 : "",
                    size: slots.ProductSize,
                    quantity: slots.NoOfItems
                },
                "dialogAction": {
                    "type": "Close",
                    "fulfillmentState": "Fulfilled"
                }
            })
            break;

        case 'RecipientDetails':
            {
                let [name, phoneNumber, address, email, products, size, quantity] = [slots.Name, slots.PhoneNumber, slots.Address, slots.Email, [sessionAttributes.item1, sessionAttributes.item2, sessionAttributes.item3, sessionAttributes.item4], sessionAttributes.size, sessionAttributes.quantity]
                console.log("params are : " + name, phoneNumber, address, email, products, size, quantity)
                callback({
                    "dialogAction": {
                        "type": "Close",
                        "fulfillmentState": "Fulfilled",
                        "message": {
                            "contentType": "PlainText",
                            "content": "We have placed your order and forward the details to concerned department."
                        }
                    }
                })
                let message = `Your order details are below:\nProducts: ${products.join(" ")}\nSize: ${size}\nQuantity: ${quantity}\nName: ${name}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nAddress: ${address}\n\nThank you for placing order we'll contact you soon with the delivery.\nIf you like the demo contact us at https://www.whyconnect.us`
                sns.sendTextMessage(message, ['+1' + phoneNumber]);
                ses.sendEmail(email, message)

            }
            break;

        default:
            let content = `I didn't get what you want to say.`
            callback(functions.close_message(sessionAttributes, 'fulfilled', content))
    }
}
// --------------- Main handler -----------------------

// Route the incoming request based on intent.
// The JSON body of the request is provided in the event slot.
exports.handler = (event, context, callback) => {
    try {
        dispatch(event,
            (response) => {
                callback(null, response);
            });
    } catch (err) {
        callback(err);
    }
};

