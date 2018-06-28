/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
'use strict';


const apiai = require('apiai');
const uuid = require('uuid');
const request = require('request');
const async = require('async');
const readline = require('readline');
const fs = require('fs');
const mongo = require('./mongo.js');
let shutup = 0 ;



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
    let messageText = this.getText(message);

    if (chatId && messageText) {

      this.log(chatId, messageText);

      if (messageText) {
        if (!this._sessionIds.has(chatId)) {
          this._sessionIds.set(chatId, uuid.v4());
        }

            // this.PUBG(message).then((value) => {
            //   console.log(value);
            //     if(value == 0){
            //       console.log("I'm in");
            //       let apiaiRequest = this._apiaiService.textRequest(messageText,{
            //       sessionId: this._sessionIds.get(chatId)
            //     });

            //     apiaiRequest.on('response', (response) => {

            //     let action = response.result.action;

            //     this.processAiResponse(chatId, response, message.replyToken)
            //         .then(() => this.log('Message sent'))
            //         .catch((err) => this.logError(err))
            //     });

            //     apiaiRequest.on('error', (error) => console.error(error));
            //     apiaiRequest.end();
            //   }else{
            //     console.log("Oh no");
            //     return this.reply(message.replyToken, [value]);
            //   }
            // })
            // .catch(err => console.log(err));
            this.log('correct message 1 ');
        //});
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

        if(postback.postback.data === "action=wrongphone"){
          const confirm = this.wrongphone(postback);
          return this.reply(postback.replyToken, [confirm]);
        }
        else if (postback.postback.data === "action=vertifyagain"){

          const confirm = this.vertifyagain();
           // =======================================================fuck
          return this.reply(postback.replyToken, [confirm]); //重新發送
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

  signupreply(){
    const confirm = {
      "type": "template",
      "altText": "this is a confirm template",
      "template": {
        "type": "confirm",
        "text": "準備好開始註冊了嗎?! +笑臉",
        "actions": [
          {
            "type": "message",
            "label": "Yes",
            "text": "準備好了"
          },
          {
            "type": "message",
            "label": "no",
            "text": "甩頭走掉"
          }
        ]
      }
    }; // end confirm
    return confirm;
  }
  askphonereply(){
    const confirm = {
      "type": "imagemap",
      "baseUrl": "https://i.imgur.com/opV3f3t.jpg",
      "altText": "This is an imagemap",
      "baseSize": {
          "height": 1040,
          "width": 1040
      },
      "actions": [
          {
              "type": "message",
              "text": "Helloooooooooo",
              "area": {
                  "x": 0,
                  "y": 0,
                  "width": 520,
                  "height": 1040
              }
          },
          {
              "type": "message",
              "text": "Hello",
              "area": {
                  "x": 520,
                  "y": 0,
                  "width": 520,
                  "height": 1040
              }
          }
      ]
    }; // end confirm
    return confirm;
  }
  phonewrongreply(){
    const confirm = {
        "type": "template",
        "altText": "this is a carousel template",
        "template": {
            "type": "carousel",
            "columns": [
                {
                  "thumbnailImageUrl": "https://i.imgur.com/qGnooDu.jpg",
                  "imageBackgroundColor": "#FFFFFF",
                  "title": "this is menu",
                  "text": "description",
                  "defaultAction": {
                      "type": "uri",
                      "label": "View detail",
                      "uri": "http://bootstrap.hexschool.com/docs/4.0/utilities/flex/"
                  },
                  "actions": [
                      {
                          "type": "postback",
                          "label": "Buy",
                          "data": "action=buy&itemid=111"
                      },
                      {
                          "type": "postback",
                          "label": "Add to cart",
                          "data": "action=add&itemid=111"
                      },
                      {
                          "type": "uri",
                          "label": "View detail",
                          "uri": "http://bootstrap.hexschool.com/docs/4.0/utilities/flex/"
                      }
                  ]
                },
                {
                  "thumbnailImageUrl": "https://i.imgur.com/4VjHyMA.jpg",
                  "imageBackgroundColor": "#000000",
                  "title": "this is menu",
                  "text": "description",
                  "defaultAction": {
                      "type": "uri",
                      "label": "View detail",
                      "uri": "http://bootstrap.hexschool.com/docs/4.0/utilities/flex/"
                  },
                  "actions": [
                      {
                          "type": "postback",
                          "label": "Buy",
                          "data": "action=buy&itemid=222"
                      },
                      {
                          "type": "postback",
                          "label": "Add to cart",
                          "data": "action=add&itemid=222"
                      },
                      {
                          "type": "uri",
                          "label": "View detail",
                          "uri": "http://bootstrap.hexschool.com/docs/4.0/utilities/flex/"
                      }
                  ]
                }
            ],
            "imageAspectRatio": "rectangle",
            "imageSize": "cover"
        }
      }; // end confirm
    return confirm;
  }
  askverifycodereply(){
    const confirm = {
        "type": "template",
        "altText": "this is a image carousel template",
        "template": {
            "type": "image_carousel",
            "columns": [
                {
                  "imageUrl": "https://i.imgur.com/4VjHyMA.jpg",
                  "action": {
                    "type": "message",
                    "label": "NO",
                    "text": "no"
                  }
                },
                {
                  "imageUrl": "https://i.imgur.com/yKLLiE2.png",
                  "action": {
                    "type": "message",
                    "label": "Yes",
                    "text": "yes"
                  }
                },
                {
                  "imageUrl": "https://i.imgur.com/qGnooDu.jpg",
                  "action": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://bootstrap.hexschool.com/docs/4.0/utilities/flex/"
                  }
                }
            ]
        }
      }; // end confirm
    return confirm;
  }
  verifysucessreply(){
    const confirm = {
      type: "text",
      text: " 成功驗證 辛苦了 兄滴 "
    }; // end confirm
    return confirm;
  }
  verifyagainreply(){
    const confirm = {
      "type": "template",
      "altText": "this is a confirm template",
      "template": {
        "type": "confirm",
        "text": "驗證碼錯了喔 發生了什麼事嗎??",
        "actions": [
          {
            "type": "postback",
            "label": "不是這支電話",
            "data":"action=wrongphone"
            //這裡有可能要用 type : postback 來使 register 狀態 退回
          },
          {
            "type": "postback",
            "label": "再發一次給我",
            "data":"action=vertifyagain"
            // 這裡有可能要用 type : postback 來重新 call 一次 API
          }
        ]
      }
    }; // end confirm
    return confirm;
  }

  wrongphone(message){

    return this.askphonereply();
  }

  vertifyagain(){
    // call verify API AGAIN
    const confirm = {
      type: "text",
      text: "驗證碼已經重新發至您的手機 記得發給我您所收到的驗證碼喔 "
    }; // end confirm
    return confirm;
  }
  PUBG(message){
    //return Promise.resolve(0)
    if(message.message.text === "return"){
      return Promise.resolve(0);
    }
    else if(message.message.text === "給我圖片" ){
      return Promise.resolve(this.askphonereply());
    }
    else if(message.message.text === "給我更大圖片" ){
      return Promise.resolve(this.askverifycodereply());
    }
    else if(message.message.text === "給我更大大圖片" ){
      return Promise.resolve(this.phonewrongreply());
    }else if(message.message.text === "我想使用日曆功能" ){
      const confirm = {
          "type": "template",
          "altText": "this is a confirm template",
          "template": {
              "type": "confirm",
              "text":"請由此登入google帳號 以開啟日曆功能",
              "actions": [
                  {
                    "type": "uri",
                    "label": "URL",
                    "uri": "https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=872352562762-o4h96p16jiq6k9pe37vev6rbla3e4f1e.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground%2F"
                  },
                  {
                    "type": "message",
                    "label": "再考慮一下",
                    "text": "no"
                  }
              ]
          }
        };
      return Promise.resolve(confirm);
    }else{       
      return Promise.resolve(0);
    }
  }

  GuestKey(LineUserId){ 
    return new Promise((resolve,reject) => {
      request.get('http://api-dev.bluenet-ride.com/v2_0/GetGuestKey ',(error, response, body) => {
        if (!error && response.statusCode == 200) {
          this.log("GuestKey-response-statusCode",response.statusCode);
          console.log("body = " + body); 
          resolve(body);
        }else{
          reject(error);
          return;
        }
      })
    })
  }

  registerNewUserAPI(LineUserId,guestKey){
    console.log("deep guestKey = " + guestKey);
    return new Promise((resolve,reject) => {
      request.post("https://api-dev.bluenet-ride.com/v2_0/register/verify",{ 
        headers: {
          'Content-Type' : ' application/json'
        },
        json:{
          "guestKey": guestKey,
          "kind":4,
          "uid": LineUserId,
          "code":this.botConfig.channelAccessToken
        }
      },
      (error, response, body) => {
        this.log("registerNewUserAPI-response-statusCode",response.statusCode);
        //this.log("response == ",response);
        if (error) {
          this.logError('Error while sending message', error);
          reject(error);
          return;
        }

        if (response.statusCode !== 200) {
          this.log("body",body);
          this.logError('Error status code while sending message', body.errMsgs);
          reject(error);
          return;
        }

        this.log('body Status = ',body);

        if(body.status == 0){
          this.log('body accessKey = ',body.results.accessKey); 
          
        }      

        this.log('Send registerPost succeeded');       
        resolve();
      })
    })
  }

  registerSigninAPI(LineUserId,guestKey){
    console.log("deep guestKey = " + guestKey);
    return new Promise((resolve,reject) => {
      request.post("https://api-dev.bluenet-ride.com/v2_0/register/signin",{ 
        headers: {
          'Content-Type' : ' application/json'
        },
        json:{
          "guestKey": guestKey,
          "kind":4,
          "uid": LineUserId,
          "accessToken":this.botConfig.channelAccessToken,
          "platform":"",
          "uids":[{"id":LineUserId,"appid":""}]
        }
      },
      (error, response, body) => {
        this.log("registerSigninAPI-response-statusCode",response.statusCode);
        //this.log("response == ",response);
        if (error) {
          this.logError('Error while sending message', error);
          reject(error);
          return;
        }

        if (response.statusCode !== 200) {
          this.log("body",body);
          this.logError('Error status code while sending message', body.errMsgs);
          reject(error);
          return;
        }

        this.log('body Status = ',body);

        if(body.status == 0){
          this.log('body accessKey = ',body.results.accessKey); 
        }   

        this.log('Send registerSignin succeeded');       
        resolve();
      })
    })
  }

  phoneSignupAPI(accessKey,userId,phonenumber){
      console.log("deep guestKey = " + accessKey);
      console.log("deep phonenumber = " + phonenumber);
      console.log("deep userId = " + userId);
    return new Promise((resolve,reject) => {

       request.post("https://api-dev.bluenet-ride.com/v2_0/user/phone/signup", { 
          headers: {
            'Content-Type' : ' application/json'
          },
          json:{
            "accessKey": accessKey,
            "userID":userId,
            "phoneCountry": 886,
            "phoneNumber":phonenumber
          }
        },
        (error, response, body) => {
          this.log("phoneSignupAPI-response-statusCode",response.statusCode);
          if (error) {
            this.logError('Error while sending message', error);
            reject(error);
            return;
          }

          if (response.statusCode !== 200) {
            this.log('body Status = ',body.status);
            this.logError('Error status code while sending message', body.errMsgs);
            reject(error);
            return;
          }

          this.log('Send registerPost succeeded');
          this.log('body Status = ',body.status);
          this.log('body errMsgs = ',body.errMsgs);
          resolve(body.status);
        })
    })
  }

  phoneVerifyAPI(accessKey,userId,phonenumber,code){
    return new Promise((resolve,reject) => {
        request.post("https://api-dev.bluenet-ride.com/v2_0/user/phone/verify", { 
          headers: {
            'Content-Type' : ' application/json'
          },
          json:{
            "accessKey": accessKey,
            "userID":userId,
            "phoneCountry":886,
            "phoneNumber":phonenumber,
            "code":code
          }
        }, (error, response, body) => {
          this.log("phoneVerifyAPI-response-statusCode",response.statusCode);
          if (error) {
            this.logError('Error while sending message', error);
            reject(error);
            return;
          }

          if (response.statusCode !== 200) {
            this.log('body Status = ',body.status);
            this.logError('Error status code while sending message', body.errMsgs);
            reject(error);
            return;
          }

            this.log('Send phoneVerifyAPI succeeded');
            this.log('phoneVerifyAPI body Status = ',body.status);
            resolve(body.status);
        })
    });
  }

  rule(phone){
    var i,jd,phonetemp;

    phonetemp = "0123456789-+ ";
    if(phone.length == 10){
      if( (phone.charAt(0) + phone.charAt(1)) === "09" ){
        for (i = 0;i<phone.length;i++){
          jd = phonetemp.indexOf(phone.charAt(i));
          if(jd == -1)
            return 0;
        }
        return 1 ;
      }else{
        return 0 ;
      }
    }else{
      return 0 ;
    }
  }
};