'use strict';

const apiai = require('apiai');
const uuid = require('uuid');
const request = require('request');
const async = require('async');
const eroPicture = require('./eroPicture.js');
const eroFunction = require('./eroFunction.js');
const tennoAlert = require('./alert.js');

var Crawler = require("crawler");
var c = new Crawler({
    // 在每个请求处理完毕后将调用此回调函数
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ 默认为 Cheerio 解析器
            // 它是核心jQuery的精简实现，可以按照jQuery选择器语法快速提取DOM元素
            console.log($("title").text());
        }
        done();
    }
});

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
        this.getProfile(chatId)
            .then((profiledata) => {
                const data = JSON.parse(profiledata);
                // const liyomessage = eroFunction.eavesdropper(data.userId, data.pictureUrl, data.displayName, messageText)
                // this.replyPush('Ue2b706a7936e38a777f4d946c88c482a', [liyomessage]);
            })

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
                    this.PUBG(message).then((value) => {
                            console.log(value);
                            if (value == 0) {
                                console.log("I'm in");
                                let apiaiRequest = this._apiaiService.textRequest(messageText, {
                                    sessionId: this._sessionIds.get(chatId)
                                });

                                apiaiRequest.on('response', (response) => {
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
            } else {
                this.log('Empty message 2 ');
            }
        } else {
            //return this.reply(message.replyToken, [confirm]);
            if (message.message.type == "sticker") {
                const messages = {
                    "type": "image",
                    "originalContentUrl": "https://i.imgur.com/rrKM5HZ.png",
                    "previewImageUrl": "https://i.imgur.com/xBhVsZS.png"
                };
                return this.reply(message.replyToken, [messages]);
            } else if (message.message.type == "image") {
                const messages = {
                    type: "text",
                    text: "請不要隨便傳垃圾訊息 大撒B"
                };
                return this.reply(message.replyToken, [messages]);
            }
            this.log('Empty message 3 ');
        }
    }

    processPostback(postback, res) {
        if (this._botConfig.devConfig) {
            this.log("message", postback);
        }
        // (source:{type:chatId,userId:uid},type:type,postback:{data:data})
        let chatId = this.getChatId(postback); //postback.source.type
        //let messageText = postback.postback.params.datetime;
        if (postback.type === 'follow') { //點級圖片 換
            eroPicture.linkUser(this.botConfig.channelAccessToken, "richmenu-3ba259947b097e4f2511d26310533ada", postback.source.userId);
            // change menu notify
            this.getProfile(postback.source.userId)
                .then((profiledata) => {
                    const data = JSON.parse(profiledata);
                    const messageText = "change Menu";
                    const liyomessage = eroFunction.eavesdropper(data.userId, data.pictureUrl, data.displayName, messageText)
                    this.replyPush('Ue2b706a7936e38a777f4d946c88c482a', [liyomessage]);
                })
        } else if (postback.postback.data === 'action=blink') {
            eroPicture.linkUser(this.botConfig.channelAccessToken, "richmenu-25bc0217fc3fa8a78bb9b4ea1e50bda6", postback.source.userId);
        } else if (postback.postback.data === 'action=laugh') {
            eroPicture.linkUser(this.botConfig.channelAccessToken, "richmenu-54c07267e2af8dd29879c4294f91e36d", postback.source.userId);
        } else if (postback.postback.data === 'action=angry') {
            eroPicture.linkUser(this.botConfig.channelAccessToken, "richmenu-b71a72d363f626b38f178deb4b0d94c0", postback.source.userId);
        } else if (postback.postback.data === 'action=unlink') {
            eroPicture.unlinkUser(this.botConfig.channelAccessToken, postback.source.userId);
        }
        // blink => richmenu-25bc0217fc3fa8a78bb9b4ea1e50bda6
        // laugh => richmenu-54c07267e2af8dd29879c4294f91e36d
        // angry => richmenu-b71a72d363f626b38f178deb4b0d94c0
        // main  => richmenu-dc75c99a1a98dea4913a18bbd7bb83ff
    }

    processAiResponse(chatId, {
            result: {
                fulfillment: {
                    speech: sp = "Hello World",
                    messages: mes = [],
                    data: dt
                },
                action: act = "unknown",
                contexts: ct = [],
                parameters: p = {}
            }
        },
        replyToken) {
        if (mes.length == 1 && mes[0].type == 0) {
            console.log("first if");
            let timeoutInterval = 1100;
            let previousType;
            for (var i = 0; i < mes.length; i++) { // null.length = 0

                previousType = mes[i].type;

            }
            if (act != "input.unknown") {
                const message = {
                    type: "text",
                    text: sp
                };
                return this.reply(replyToken, [message]);
            } else {
                return Promise.resolve(0);
            }
        } else if (mes.length > 1) {
            var ran = mes[Math.floor(Math.random() * mes.length)];
            if (ran.type == 0) {
                const message = {
                    type: "text",
                    text: ran.speech
                };
                return this.reply(replyToken, [message]);
            } else {
                return this.reply(replyToken, [ran.payload]);
            }
        } else if (mes[0].type != 0 || !this.isDefined(act)) {
            console.log("sec if");
            return this.reply(replyToken, [mes[0].payload]);
        } else if (this.isDefined(act)) {
            console.log("3 gandalf");
            return this.reply(replyToken, [mes[0].payload]);

        } else if (this.isDefined(sp)) {
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

    PUBG(message) {
        if ((message.message.text.indexOf('develop') != -1)) {
            const confirm = {
                type: "text",
                text: "develop 測試成功"
            };
            return Promise.resolve(confirm);
        } else if ((message.message.text.indexOf('TaxiGo') != -1)) {
            const confirm = {
                type: "text",
                text: "TaxiGo 我兄弟啦 "
            };
            return Promise.resolve(confirm);
        } else if (message.message.text === "查詢") {
            const confirm = {
                type: "text",
                text: "your line userid = " + message.source.userId
            }; // end confirm
            return Promise.resolve(confirm);
        } else if (message.message.text === "tennobait"){
            const confirm = {
              "type": "image",
              "originalContentUrl": "https://i.imgur.com/0rppS8q.gif",
              "previewImageUrl": "https://i.imgur.com/0rppS8q.gif",
              "animated": true
            };
            return Promise.resolve(confirm);
        } else if (message.message.text === "tennofish"){
            const confirm = {
              "type": "image",
              "originalContentUrl": "https://semlar.com/fishing_map.jpg",
              "previewImageUrl": "https://semlar.com/fishing_map.jpg",
              "animated": true
            };
            return Promise.resolve(confirm);
        } else if (message.message.text === "tennoalert"){
            return Promise.resolve(tennoAlert.alert());
        }else if (message.message.text === "tennocetus"){
            return Promise.resolve(tennoAlert.alert());
        }else if (message.message.text === "tennoinvasion"){
            return Promise.resolve(tennoAlert.alert());
        }else if (message.message.text === "Baro'Ki Teel"){
            return Promise.resolve(tennoAlert.alert());
        }else if (message.message.text === "tennosortie"){
            return Promise.resolve(tennoAlert.alert());
        } else if (message.message.text === "tennovoid"){
            return Promise.resolve(tennoAlert.void());
        } else if (message.message.text === "tennonews") {
            console.log('Tenno');
            return new Promise((resolve, reject) => {
                c.queue([{
                    uri: 'https://www.tennoclocknews.com/',
                    jQuery: true,
                    // The global callback won't be called
                    callback : function (error, res, done) {
                        if(error){
                            reject(error);
                        }else{
                            var $ = res.$;
                            // $ 默认为 Cheerio 解析器
                            // 它是核心jQuery的精简实现，可以按照jQuery选择器语法快速提取DOM元素
                            console.log($("#main:first-child .entry-content > p > strong > a").attr('href'));
                            const confirm = {
                                type: "text",
                                text: $("#main:first-child .entry-content > p > strong > a").attr('href')
                            };
                            resolve(confirm);
                        }
                        done();
                    }
                }]);
            })
        }
        return Promise.resolve(0);
    }
};