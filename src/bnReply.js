const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('377710b3f4ac43b48ac4dc77d97eea2b');

module.exports = {

  signupreply: () => {
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
  },

  askphonereply: () => {
    const confirm = {
      type: "text",
      text: "請傳送電話號碼給我 稍後將有驗證碼至您的手機 Ex:0912345678"
    }; // end confirm
    return confirm;
  },

  phonewrongreply: () => {
    const confirm = {
      type: "text",
      text: " 您輸入的號碼格式有點怪喔 請再輸入一次喔 "
    }; // end confirm
    return confirm;
  },

  askverifycodereply: (phonenumber) => {
    const confirm = {
      type: "text",
      text: "驗證碼已經發至" + phonenumber + "請給我您所收到的驗證碼喔 "
    }; // end confirm
    return confirm;
  },

  verifysucessreply: () => {
    const confirm = {
      type: "text",
      text: " 成功驗證 辛苦了 兄滴 "
    }; // end confirm
    return confirm;
  },

  verifyagainreply:  () => {
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
  },

  vertifyagain: () => {
    // call verify API AGAIN
    const confirm = {
      type: "text",
      text: "驗證碼已經重新發至您的手機 記得發給我您所收到的驗證碼喔 "
    }; // end confirm
    return confirm;
  },

  cubee: () => {
    // call verify API AGAIN
    const confirm = {
      "type": "template",
      "altText": "cubee 關心您",
      "template": {
          "type": "carousel",
          "columns": [
              {
                "thumbnailImageUrl": "https://i.imgur.com/8giBrZp.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "新聞",
                "text": "cubee真博學",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [
                    {
                        "type": "postback",
                        "label": "了解更多",
                        "data": "action=news"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/WJ5Cjn4.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "美食",
                "text": "cubee真愛吃",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [
                    {
                        "type": "postback",
                        "label": "了解更多",
                        "data": "action=traffic"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/kkTPxfx.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "購物",
                "text": "cubee Shopping",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [
                    {
                        "type": "postback",
                        "label": "了解更多",
                        "data": "action=entertainment"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/9Q9jofg.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "八卦",
                "text": "cubee真壞",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [
                    {
                        "type": "postback",
                        "label": "了解更多",
                        "data": "action=learn"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/9Q9jofg.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "機票",
                "text": "cubee真會賺",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [
                    {
                        "type": "postback",
                        "label": "了解更多",
                        "data": "action=learn"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/9Q9jofg.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "旅遊住宿",
                "text": "cubee真會住",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [
                    {
                        "type": "postback",
                        "label": "了解更多",
                        "data": "action=learn"
                    }
                ]
              }
          ],
          "imageAspectRatio": "rectangle",
          "imageSize": "cover"
      }
    } // end confirm
    return confirm;
  },

  cubeeNews: () => {
    const confirm = {
      "type": "template",
      "altText": "cubee新聞關心您",
      "template": {
          "type": "carousel",
          "columns": [
              {
                "thumbnailImageUrl": "https://i.imgur.com/8giBrZp.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "國際新聞",
                "text": "cubee新聞",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://tw.news.appledaily.com/headline/daily/"
                },
                "actions": [
                    {
                      "type": "postback",
                      "label": "更多",
                      "data":"action=businessNews"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/38tEl5i.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "焦點新聞",
                "text": "cubee新聞",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://tw.news.appledaily.com/headline/daily/"
                },
                "actions": [
                    {
                       "type":"uri",
                       "label":"前往",
                       "uri":"https://tw.news.appledaily.com/headline/daily/"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/cQJgaLc.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "財經新聞",
                "text": "cubee新聞",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://tw.news.appledaily.com/headline/daily/"
                },
                "actions": [
                    {
                       "type":"uri",
                       "label":"前往",
                       "uri":"https://tw.news.appledaily.com/headline/daily/"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/0o5fnMG.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "社會新聞",
                "text": "cubee新聞",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://tw.news.appledaily.com/headline/daily/"
                },
                "actions": [
                    {
                       "type":"uri",
                       "label":"前往",
                       "uri":"https://tw.news.appledaily.com/headline/daily/"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/OEWxVSa.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "科技新聞",
                "text": "cubee新聞",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://tw.news.appledaily.com/headline/daily/"
                },
                "actions": [
                    {
                       "type":"uri",
                       "label":"前往",
                       "uri":"https://tw.news.appledaily.com/headline/daily/"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/57lIOx1.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "頭條新聞",
                "text": "cubee新聞",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://tw.news.appledaily.com/headline/daily/"
                },
                "actions": [
                    {
                       "type":"uri",
                       "label":"前往",
                       "uri":"https://tw.news.appledaily.com/headline/daily/"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/GtnlVTM.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "旅遊新聞",
                "text": "cubee新聞",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://tw.news.appledaily.com/headline/daily/"
                },
                "actions": [
                    {
                       "type":"uri",
                       "label":"前往",
                       "uri":"https://tw.news.appledaily.com/headline/daily/"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/iAYMXkf.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "娛樂新聞",
                "text": "cubee新聞",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://tw.news.appledaily.com/headline/daily/"
                },
                "actions": [
                    {
                       "type":"uri",
                       "label":"前往",
                       "uri":"https://tw.news.appledaily.com/headline/daily/"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/wFDwUlH.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "八卦新聞",
                "text": "cubee新聞",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://tw.news.appledaily.com/headline/daily/"
                },
                "actions": [
                    {
                       "type":"uri",
                       "label":"前往",
                       "uri":"https://tw.news.appledaily.com/headline/daily/"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/O3nHXv6.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "體育新聞",
                "text": "cubee新聞",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://tw.news.appledaily.com/headline/daily/"
                },
                "actions": [
                    {
                       "type":"uri",
                       "label":"前往",
                       "uri":"https://tw.news.appledaily.com/headline/daily/"
                    }
                ]
              }
          ],
          "imageAspectRatio": "rectangle",
          "imageSize": "cover"
      }
    } // end confirm
    return confirm;
  },

  cubeeFood: () => {
    const confirm = {
      "type": "text",
      "text": "Cubee趕工中"
    }
    return confirm;
  },

  cubeeShop: () => {
    const confirm = {
      "type": "text",
      "text": "Cubee趕工中"
    }
    return confirm;
  },

  cubeeGossip: () => {
    const confirm = {
      "type": "text",
      "text": "Cubee趕工中"
    }
    return confirm;
  },

  cubeeTicket: () => {
    const confirm = {
      "type": "text",
      "text": "Cubee趕工中"
    }
    return confirm;
  },

  cubeeTour: () => {
    const confirm = {
      "type": "text",
      "text": "Cubee趕工中"
    }
    return confirm;
  },

  cubeeBusinessNews: () => {
    return newsapi.v2.topHeadlines({
      // q: 'trump',
      category: 'business',
      // language: 'en',
      country: 'tw'
    }).then(response => {
      if(response.status == 'ok'){
        const randomLimit = response.totalResults;
        const confirm = {
            "type": "text",
            "text": "Cubee趕工中"
        }
        return confirm;
      } else {
        const confirm = {
            "type": "text",
            "text": "Cubee發生錯誤"
        }
        return confirm;
      }
    });
  }
}