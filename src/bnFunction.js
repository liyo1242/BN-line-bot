const request = require('request');
const mongo = require('./mongo.js');

module.exports = {
    GuestKey: (LineUserId) => {
        return new Promise((resolve, reject) => {
            request.get('http://api-dev.bluenet-ride.com/v2_0/GetGuestKey ', (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    console.log("GuestKey-response-statusCode", response.statusCode);
                    console.log("body = " + body);
                    resolve(body);
                } else {
                    reject(error);
                    return;
                }
            })
        })
    },

    registerNewUserAPI: (LineUserId, guestKey, channelAccessToken) => {
        console.log("deep guestKey = " + guestKey);
        return new Promise((resolve, reject) => {
            request.post("https://api-dev.bluenet-ride.com/v2_0/register/verify", {
                    headers: {
                        'Content-Type': ' application/json'
                    },
                    json: {
                        "guestKey": guestKey,
                        "kind": 4,
                        "uid": LineUserId,
                        "code": channelAccessToken
                    }
                },
                (error, response, body) => {
                    console.log("registerNewUserAPI-response-statusCode", response.statusCode);
                    //this.log("response == ",response);
                    if (error) {
                        console.log('Error while sending message' + error);
                        reject(error);
                        return;
                    }

                    if (response.statusCode !== 200) {
                        console.log("body", body);
                        console.log('Error status code while sending message' + body.errMsgs);
                        reject(error);
                        return;
                    }

                    console.log('body Status = ', body);

                    if (body.status == 0) {
                        console.log('body accessKey = ', body.results.accessKey);

                    }

                    console.log('Send registerPost succeeded');
                    resolve();
                })
        })
    },
    // this one is good
    registerSigninAPI: (LineUserId, guestKey, channelAccessToken) => {
        console.log("deep guestKey = " + guestKey);
        return new Promise((resolve, reject) => {
            request.post("https://api-dev.bluenet-ride.com/v2_0/register/signin", {
                    headers: {
                        'Content-Type': ' application/json'
                    },
                    json: {
                        "guestKey": guestKey,
                        "kind": 4,
                        "uid": LineUserId,
                        "accessToken": channelAccessToken,
                        "platform": "",
                        "uids": [{ "id": LineUserId, "appid": "" }]
                    }
                },
                (error, response, body) => {
                    console.log("registerSigninAPI-response-statusCode", response.statusCode);
                    //this.log("response == ",response);
                    if (error) {
                        console.log('Error while sending message' + error);
                        reject(error);
                        return;
                    }

                    if (response.statusCode !== 200) {
                        console.log("body", body);
                        console.logError('Error status code while sending message', body.errMsgs);
                        reject(error);
                        return;
                    }

                    console.log('body Status = ', body);

                    if (body.status == 0) {
                        console.log('body accessKey = ', body.results.accessKey);
                    }
                    mongo.updateBNuserid(LineUserId, body.results.userID, (err, res) => {
                        if (err) console.log(err);
                        else console.log(res);
                    });
                    mongo.updateAccessKey(LineUserId, body.results.accessKey, (error, response) => {
                        if (error) console.log(error);
                        else console.log(response);
                    });

                    console.log('Send registerSignin succeeded');
                    resolve();
                })
        })
    },

    phoneSignupAPI: (accessKey, userId, phonenumber) => {
        console.log("deep guestKey = " + accessKey);
        console.log("deep phonenumber = " + phonenumber);
        console.log("deep userId = " + userId);
        return new Promise((resolve, reject) => {

            request.post("https://api-dev.bluenet-ride.com/v2_0/user/phone/signup", {
                    headers: {
                        'Content-Type': ' application/json'
                    },
                    json: {
                        "accessKey": accessKey,
                        "userID": userId,
                        "phoneCountry": 886,
                        "phoneNumber": phonenumber
                    }
                },
                (error, response, body) => {
                    console.log("phoneSignupAPI-response-statusCode", response.statusCode);
                    if (error) {
                        console.logError('Error while sending message', error);
                        reject(error);
                        return;
                    }

                    if (response.statusCode !== 200) {
                        console.log('body Status = ', body.status);
                        console.log('Error status code while sending message' + body.errMsgs);
                        reject(error);
                        return;
                    }

                    console.log('Send registerPost succeeded');
                    console.log('body Status = ', body.status);
                    console.log('body errMsgs = ', body.errMsgs);
                    resolve(body.status);
                })
        })
    },

    phoneVerifyAPI: (accessKey, userId, phonenumber, code) => {
        return new Promise((resolve, reject) => {
            request.post("https://api-dev.bluenet-ride.com/v2_0/user/phone/verify", {
                headers: {
                    'Content-Type': ' application/json'
                },
                json: {
                    "accessKey": accessKey,
                    "userID": userId,
                    "phoneCountry": 886,
                    "phoneNumber": phonenumber,
                    "code": code
                }
            }, (error, response, body) => {
                console.log("phoneVerifyAPI-response-statusCode", response.statusCode);
                if (error) {
                    console.log('Error while sending message' + error);
                    reject(error);
                    return;
                }

                if (response.statusCode !== 200) {
                    console.log('body Status = ', body.status);
                    console.log('Error status code while sending message' + body.errMsgs);
                    reject(error);
                    return;
                }

                console.log('Send phoneVerifyAPI succeeded');
                console.log('phoneVerifyAPI body Status = ', body.status);
                resolve(body.status);
            })
        })
    }
}