'use strict';

const apiai = require('apiai');
const uuid = require('uuid');
const request = require('request');
const async = require('async');
const bnreply = require('./bnReply.js');
const eroPicture = require('./eroPicture.js');
const eroFunction = require('./eroFunction.js');
let shutup = 0;

module.exports = class LineBot {

    get apiaiService() {
        return this._apiaiService;
    }

    set apiaiService(value) {
        this._apiaiService = value;
    }

    get botConfig() {
        return this._botConfig;
    }

    set botConfig(value) {
        this._botConfig = value;
    }

    get sessionIds() {
        return this._sessionIds;
    }

    set sessionIds(value) {
        this._sessionIds = value;
    }

    getText(message) {
        if (message.message && message.message.type === 'text' &&
            message.message.text) {
            return message.message.text;
        } else {
            return null;
        }
    }

    getChatId(message) {
        if (message.source) {

            if (message.source.type === 'user') {
                return message.source.userId;
            }

            if (message.source.type === 'group') {
                return message.source.groupId;
            }

            if (message.source.type === 'room') {
                return message.source.roomId;
            }
        }
        return null;
    }

    constructor(botConfig) {
        this._botConfig = botConfig;
        let apiaiOptions = {
            language: botConfig.apiaiLang,
            requestSource: "line"
        };

        this._apiaiService = apiai(botConfig.apiaiAccessToken, apiaiOptions);
        this._sessionIds = new Map();
        this._sendMessageInterval = 500;
    }

    processMessage(message, res) {
        if (this._botConfig.devConfig) {
            this.log("message", message);
        }

        let chatId = this.getChatId(message);
        var messageText = this.getText(message);
        if (message.source.groupId == undefined) {
            this.getProfile(chatId)
                .then((profiledata) => {
                    // console.log(data);
                    console.log('user says : ' + messageText);
                    const data = JSON.parse(profiledata);
                    const liyomessage = eroFunction.eavesdropper(data.userId, data.pictureUrl, data.displayName, messageText)
                    this.replyPush('U506c7426ba192e705210a874b97b40ca', [liyomessage]);
                })
        }

        if (chatId && messageText) {

            if (messageText) {
                if (!this._sessionIds.has(chatId)) {
                    this._sessionIds.set(chatId, uuid.v4());
                }

                // ====================local check=============================
                if (res == null) {
                    console.log(err);
                    console.log('event null');
                }
                if (res != null) {
                    this.PUBG(message, 0).then((value) => {
                            console.log(value);
                            if (value == 0) {
                                console.log("I'm in");
                                let apiaiRequest = this._apiaiService.textRequest(messageText, {
                                    sessionId: this._sessionIds.get(chatId)
                                });

                                apiaiRequest.on('response', (response) => {

                                    let action = response.result.action;

                                    this.processAiResponse(chatId, response, message.replyToken)
                                        .then(() => this.log('Message sent'))
                                        .catch((err) => this.logError(err))
                                });

                                apiaiRequest.on('error', (error) => console.error(error));
                                apiaiRequest.end();
                            } else {
                                console.log("Oh no");
                                return this.reply(message.replyToken, [value]);
                            }
                        })
                        .catch(err => console.log(err));
                }
                // });

                // mongo.eventLog(message,(err, res) => {
                //   console.log('event log');
                // });

            } else {
                this.log('Empty message 2 ');
            }
        } else {
            //return this.reply(message.replyToken, [confirm]);
            if (message.message.type == "sticker") {
                // const messages = {
                //     "type": "image",
                //     "originalContentUrl": "https://i.imgur.com/rrKM5HZ.png",
                //     "previewImageUrl": "https://i.imgur.com/xBhVsZS.png"
                // };
                // return this.reply(message.replyToken, [messages]);
            } else if (message.message.type == "image") {
                // const messages = {
                //   type: "text",
                //   text: "請不要隨便傳垃圾訊息 大撒B"
                // };
                // return this.reply(message.replyToken, [messages]);
            }
            this.log('Empty message 3 ');
        }
    }

    processPostback(postback, res) {
        if (this._botConfig.devConfig) {
            this.log("message", postback);
        }

        let chatId = this.getChatId(postback);
        //let messageText = postback.postback.params.datetime;
        if (postback.type === 'follow') { //點級圖片 換
            eroPicture.eroMenuList(this.botConfig.channelAccessToken, 0)
                .then((richMenuId) => {
                    eroPicture.linkUser(this.botConfig.channelAccessToken, "richmenu-3ba259947b097e4f2511d26310533ada", postback.source.userId);
                });
            // change menu notify
            //
            this.getProfile(postback.source.userId)
                .then((profiledata) => {
                    const data = JSON.parse(profiledata);
                    const messageText = "change Menu";
                    const liyomessage = eroFunction.eavesdropper(data.userId, data.pictureUrl, data.displayName, messageText)
                    this.replyPush('U506c7426ba192e705210a874b97b40ca', [liyomessage]);
                })
        } // =============== Layer 1
        else if (postback.postback.data === `action=news`) {
            const confirm = bnreply.cubeeNews();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === `action=food`) {
            const confirm = bnreply.cubeeFood();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === `action=shop`) {
            const confirm = bnreply.cubeeShop();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === `action=gossip`) {
            const confirm = bnreply.cubeeGossip();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === `action=ticket`) {
            const confirm = bnreply.cubeeTicket();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === `action=tour`) {
            const confirm = bnreply.cubeeTour();
            return this.reply(postback.replyToken, [confirm]);
        }
        //================= Layer 2
        else if (postback.postback.data === 'action=globalNews') {
            const confirm = bnreply.cubeeBusinessNews();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === 'action=focusNews') {
            const confirm = bnreply.cubeeBusinessNews();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === 'action=businessNews') {
            const confirm = bnreply.cubeeBusinessNews();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === 'action=societyNews') {
            const confirm = bnreply.cubeeBusinessNews();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === 'action=techNews') {
            const confirm = bnreply.cubeeBusinessNews();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === 'action=headlineNews') {
            const confirm = bnreply.cubeeBusinessNews();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === 'action=tourNews') {
            const confirm = bnreply.cubeeBusinessNews();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === 'action=entertainmentNews') {
            const confirm = bnreply.cubeeFood();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === 'action=trafficNews') {
            const confirm = bnreply.cubeeBusinessNews();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === 'action=sportNews') {
            const confirm = bnreply.cubeeBusinessNews();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === 'action=cubeeFood') {
            const confirm = bnreply.cubeeFoodLocation();
            return this.reply(postback.replyToken, [confirm]);
        } else if (postback.postback.data === 'action=foodLocation') {
            const confirm = bnreply.cubeeFood();
            return this.reply(postback.replyToken, [confirm]);
        }
    }

    processAiResponse(chatId, apiaiResponse, replyToken) {
        let responseText = apiaiResponse.result.fulfillment.speech;
        let responseData = apiaiResponse.result.fulfillment.data;
        let messages = apiaiResponse.result.fulfillment.messages;
        let action = apiaiResponse.result.action;
        let result = apiaiResponse.result.fulfillment;
        console.log(responseText);
        console.log(action);
        console.log(result);
        let contexts = apiaiResponse.result.contexts;
        let parameters = apiaiResponse.result.parameters;

        if (this.isDefined(messages) && (messages.length == 1 && messages[0].type == 0)) {
            console.log("first if");
            let timeoutInterval = 1100;
            let previousType;
            let cardTypes = [];
            let timeout = 0;
            for (var i = 0; i < messages.length; i++) {

                previousType = messages[i].type;

            }
            if (action != "input.unknown") {
                const message = {
                    type: "text",
                    text: responseText
                };
                return this.reply(replyToken, [message]);
            } else {
                return Promise.resolve(0);
            }
        } else if (messages.length > 1) {
            var ran = messages[Math.floor(Math.random() * messages.length)];
            if (ran.type == 0) {
                const message = {
                    type: "text",
                    text: ran.speech
                };
                return this.reply(replyToken, [message]);
            } else {
                return this.reply(replyToken, [ran.payload]);
            }
        } else if (messages[0].type != 0 || !this.isDefined(action)) {
            console.log("sec if");
            return this.reply(replyToken, [messages[0].payload]);
        } else if (this.isDefined(action)) {
            console.log("3 gandalf");
            return this.reply(replyToken, [messages[0].payload]);

        } else if (this.isDefined(responseText)) {
            const message = {
                type: "text",
                text: "系統錯誤"
            };
            return this.reply(replyToken, [message]);
        }
    }

    reply(replyToken, messages) {
        console.log("reply in " + messages);
        return new Promise((resolve, reject) => {
            request.post("https://api.line.me/v2/bot/message/reply", {
                forever: true,
                headers: {
                    'Authorization': `Bearer ${this.botConfig.channelAccessToken}`
                },
                json: {
                    replyToken: replyToken,
                    messages: messages
                }
            }, (error, response, body) => {
                if (error) {
                    this.logError('Error while sending message', error);
                    reject(error);
                    return;
                }

                if (response.statusCode !== 200) {
                    this.logError('Error status code while sending message', body);
                    reject(error);
                    return;
                }

                this.log('Send message succeeded');
                resolve(body);
            });
        });
    }

    replyPush(receiverId, messages) {
        console.log("liyo hack");
        return new Promise((resolve, reject) => {
            request.post("https://api.line.me/v2/bot/message/push", {
                forever: true,
                headers: {
                    'Authorization': `Bearer ${this.botConfig.channelAccessToken}`
                },
                json: {
                    to: receiverId,
                    messages: messages
                }
            }, (error, response, body) => {
                if (error) {
                    this.logError('Error while sending message', error);
                    reject(error);
                    return;
                }

                if (response.statusCode !== 200) {
                    this.logError('Error status code while sending message', body);
                    reject(error);
                    return;
                }

                this.log('Send message succeeded');
                resolve(body);
            });
        });
    }

    getProfile(userid) {
        console.log("fuckin user =" + userid);
        return new Promise((resolve, reject) => {
            request.get(`https://api.line.me/v2/bot/profile/${userid}`, {
                headers: {
                    'Authorization': `Bearer ${this.botConfig.channelAccessToken}`
                }
            }, (error, response, body) => {
                if (error) {
                    this.logError('Error while sending message', error);
                    reject(error);
                    return;
                }

                if (response.statusCode !== 200) {
                    this.logError('Error status code while sending message', body);
                    reject(error);
                    return;
                }

                this.log('Send message succeeded');
                resolve(body);
            });
        });
    }

    sleep(delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), delay);
        });
    }

    log() {
        let args = Array.prototype.slice.call(arguments);
        console.log.apply(console, args);
    }

    logError() {
        let args = Array.prototype.slice.call(arguments);
        console.error.apply(console, args);
    }

    isDefined(obj) {
        if (typeof obj === 'undefined') {
            return false;
        }

        if (!obj) {
            return false;
        }

        return obj !== null;
    }

    PUBG(message, status) {
        //return Promise.resolve(0)
        var lowerCase = message.message.text.toLowerCase();
        if ((lowerCase.indexOf('fuck cubee') != -1) || (lowerCase.indexOf('cubee 安安') != -1) || (lowerCase.indexOf('hi cubee') != -1)) {
            const confirm = bnreply.cubee(); // end confirm
            return Promise.resolve(confirm);
        } else if ((message.message.text.indexOf('TaxiGo') != -1)) {
            const confirm = {
                type: "text",
                text: "TaxiGo 我兄弟啦 "
            };
            const pushConfirm = {
                type: "text",
                text: "找我兄弟不如買我們的貼圖  https://line.me/S/sticker/3998963"
            };
            this.replyPush(message.source.groupId || message.source.userId, [pushConfirm]);
            const pushConfirm1 = {
                type: "text",
                text: "找我兄弟不如買我們的貼圖  https://line.me/S/sticker/4357617"
            };
            this.replyPush(message.source.groupId || message.source.userId, [pushConfirm1]);
            const pushConfirm2 = {
                type: "text",
                text: "找我兄弟不如買我們的貼圖  https://line.me/S/sticker/3998963"
            };
            this.replyPush(message.source.groupId || message.source.userId, [pushConfirm2]);
            const pushConfirm3 = {
                type: "text",
                text: "找我兄弟不如買我們的貼圖  https://line.me/S/sticker/4212262"
            };
            this.replyPush(message.source.groupId | message.source.userId, [pushConfirm3]);
            const pushConfirm4 = {
                type: "text",
                text: "找我兄弟不如買我們的貼圖  https://line.me/S/sticker/4212262"
            };
            this.replyPush(message.source.groupId || message.source.userId, [pushConfirm4]);
            const pushConfirm5 = {
                type: "text",
                text: "找我兄弟不如買我們的貼圖  https://line.me/S/sticker/3662781"
            };
            this.replyPush(message.source.groupId || message.source.userId, [pushConfirm5]);
            const pushConfirm6 = {
                type: "text",
                text: "找我兄弟不如買我們的貼圖 https://line.me/S/sticker/4212408"
            };
            this.replyPush(message.source.groupId || message.source.userId, [pushConfirm6]);
            return Promise.resolve(confirm);
        }
        if (message.message.text === "BlueNet功能 敬請期待" || message.message.text === "BN 測試 #####") {

            return Promise.resolve(eroFunction.chooseMenu());
        } else if (message.message.text === "查詢") {
            const confirm = {
                type: "text",
                text: "your line userid = " + message.source.userId
            }; // end confirm
            return Promise.resolve(confirm);
        } else if (((message.message.text.indexOf('台北') != -1) && (message.message.text.indexOf('捷運') != -1)) || (message.message.text.indexOf('北捷') != -1)) {
            const confirm = {
                "type": "image",
                "originalContentUrl": "https://i.imgur.com/sWZca1G.jpg",
                "previewImageUrl": "https://i.imgur.com/sWZca1G.jpg"
            }; // end confirm
            return Promise.resolve(confirm);
        } else if (((message.message.text.indexOf('高雄') != -1) && (message.message.text.indexOf('捷運') != -1)) || (message.message.text.indexOf('高捷') != -1)) {
            const confirm = {
                "type": "image",
                "originalContentUrl": "https://i.imgur.com/Dubzevw.jpg",
                "previewImageUrl": "https://i.imgur.com/Dubzevw.jpg"
            }; // end confirm
            return Promise.resolve(confirm);
        } else if ((message.message.text.indexOf('捷運') != -1)) {
            const confirm = {
                "type": "template",
                "altText": "Ask MRT template",
                "template": {
                    "type": "buttons",
                    "thumbnailImageUrl": "https://www.bluenet-ride.com/images/drawable/cubeegroup/surprisecubee.png",
                    "imageAspectRatio": "rectangle",
                    "imageSize": "cover",
                    "imageBackgroundColor": "#4898AF",
                    "title": "搭捷運嗎 ?",
                    "text": "您要台北捷運還是高雄捷運呢 ?",
                    "defaultAction": {
                        "type": "uri",
                        "label": "View detail",
                        "uri": "http://example.com/page/123"
                    },
                    "actions": [{
                            "type": "message",
                            "label": "北捷",
                            "text": "北捷"
                        },
                        {
                            "type": "message",
                            "label": "高捷",
                            "text": "高捷"
                        }
                    ]
                }
            }; // end confirm
            return Promise.resolve(confirm);
        } else if (message.message.text === "老鐵回家了") {
            return Promise.resolve(eroFunction.selftest());
        } else if ((message.message.text.indexOf('開始時間') != -1) && (message.message.text.indexOf('結束時間') != -1) && (message.message.text.indexOf('地點') != -1)) {
            var index = {
                start: message.message.text.indexOf('開始時間'),
                end: message.message.text.indexOf('結束時間'),
                location: message.message.text.indexOf('活動地點'),
                content: message.message.text.indexOf('活動內容')
            }
            var start = message.message.text.slice(index.start + 5, index.end);
            var end = message.message.text.slice(index.end + 5, index.location);
            var title = message.message.text.slice(0, index.start);
            var location = message.message.text.slice(index.location + 5, index.content);
            const confirm = bnreply.calendarReply(title, start, end, location);
            return Promise.resolve(confirm);
        } else {
            return Promise.resolve(0);
        }
    }
};