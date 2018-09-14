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
                "thumbnailImageUrl": "https://i.imgur.com/KcialbA.png",
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
                "title": "交通",
                "text": "cubee真守法",
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
                "title": "娛樂",
                "text": "cubee真愛玩",
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
                "title": "學習",
                "text": "cubee真聰明",
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

  cubeeTraffic: () => {
    const confirm = {
      "type": "template",
      "altText": "cubee交通關心您",
      "template": {
          "type": "carousel",
          "columns": [
              {
                "thumbnailImageUrl": "https://i.imgur.com/kAKSNNy.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "捷運路線圖",
                "text": "cubee真博學",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [
                    {
                       "type":"message",
                       "label":"台北 / 桃園捷運",
                       "text":"北捷"
                    },
                    {
                       "type":"message",
                       "label":"高雄捷運",
                       "text":"高捷"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/WJ5Cjn4.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "火車 / 高鐵 訂票",
                "text": "cubee真守法",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [
                    {
                        "type": "uri",
                        "label": "台鐵",
                        "uri": "http://railway.hinet.net/Foreign/TW/etno1.html"
                    },
                    {
                        "type": "uri",
                        "label": "高鐵",
                        "uri": "https://irs.thsrc.com.tw/IMINT/"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/kkTPxfx.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "機票比價網",
                "text": "cubee真愛玩",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [
                    {
                        "type": "uri",
                        "label": "skyscanner",
                        "uri": "https://www.skyscanner.com.tw/"
                    },
                    {
                        "type": "uri",
                        "label": "wego",
                        "uri": "https://www.wego.tw"
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

  cubeeEntertainment: () => {
    const confirm = {
      "type": "template",
      "altText": "cubee交通關心您",
      "template": {
          "type": "carousel",
          "columns": [
              {
                "thumbnailImageUrl": "https://i.imgur.com/kAKSNNy.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "線上瘋追劇",
                "text": "cubee真博學",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [
                    {
                        "type": "uri",
                        "label": "netflix",
                        "uri": "https://www.netflix.com"
                    },
                    {
                        "type": "uri",
                        "label": "愛奇藝",
                        "uri": "https://tw.iqiyi.com/"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/WJ5Cjn4.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "線上瘋購物",
                "text": "cubee真守法",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [
                    {
                        "type": "uri",
                        "label": "蝦皮",
                        "uri": "https://shopee.tw/"
                    },
                    {
                        "type": "uri",
                        "label": "PC home",
                        "uri": "https://shopping.pchome.com.tw/"
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

  cubeeLearn: () => {
    const confirm = {
      "type": "template",
      "altText": "cubee學習關心您",
      "template": {
          "type": "carousel",
          "columns": [
              {
                "thumbnailImageUrl": "https://i.imgur.com/kAKSNNy.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "綜合性線上學習網",
                "text": "cubee真博學",
                "defaultAction": {
                    "type": "uri",
                    "label": "網易",
                    "uri": "https://open.163.com/"
                },
                "actions": [
                    {
                        "type": "uri",
                        "label": "網易",
                        "uri": "https://open.163.com/"
                    },
                    {
                        "type": "uri",
                        "label": "udemy",
                        "uri": "https://www.udemy.com/"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/WJ5Cjn4.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "語言課程線上學習網",
                "text": "cubee真守法",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [
                    {
                        "type": "uri",
                        "label": "duolingo",
                        "uri": "https://www.duolingo.com/"
                    },
                    {
                        "type": "uri",
                        "label": "lemu",
                        "uri": "https://lernu.net/zh-tw"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/WJ5Cjn4.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "大學課程線上學習網",
                "text": "cubee真守法",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [
                    {
                        "type": "uri",
                        "label": "台大",
                        "uri": "http://ocw.aca.ntu.edu.tw/ntu-ocw/"
                    },
                    {
                        "type": "uri",
                        "label": "交大",
                        "uri": "http://ocw.nctu.edu.tw/"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://i.imgur.com/WJ5Cjn4.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "程式課程線上學習網",
                "text": "cubee真守法",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [
                    {
                        "type": "uri",
                        "label": "code.org",
                        "uri": "https://code.org/"
                    },
                    {
                        "type": "uri",
                        "label": "codecademy",
                        "uri": "https://www.codecademy.com/"
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

  cubeeBusinessNews: () => {
    return newsapi.v2.topHeadlines({
      // q: 'trump',
      category: 'business',
      // language: 'en',
      country: 'tw'
    }).then(response => {
      // console.log(response);
      if(response.status == 'ok'){
        console.log('fuckfuckfuckfuck 4');
        const randomLimit = response.totalResults;
        const confirm = {
          "type": "template",
          "altText": "This is a buttons template",
          "template": {
              "type": "carousel",
              "columns":[
              ]
          }
}
        /*const confirm = {
          "type": "template",
          "altText": "cubee關心您",
          "template": {
              "type": "carousel",
              "columns": [
                  {
                    "thumbnailImageUrl": response.articles[0].urlToImage != null ? (response.articles[0].urlToImage.substring(0,5) == "https" ? response.articles[0].urlToImage : "https://i.imgur.com/kAKSNNy.png") : "https://i.imgur.com/kAKSNNy.png",
                    "imageBackgroundColor": "#FFFFFF",
                    "title": response.articles[0].title.substring(0,39) || "綜合性線上學習網",
                    "text": response.articles[0].description != null ? response.articles[0].description.substring(0,59) : "cubee真博學",
                    "defaultAction": {
                        "type": "uri",
                        "label": "XD",
                        "uri": response.articles[0].url || "https://open.163.com/"
                    },
                    "actions": [
                        {
                            "type": "uri",
                            "label": "造訪網址",
                            "uri": response.articles[0].url || "https://open.163.com/"
                        }
                    ]
                  },
                  {
                    "thumbnailImageUrl": response.articles[1].urlToImage != null ? (response.articles[1].urlToImage.substring(0,5) == "https" ? response.articles[0].urlToImage : "https://i.imgur.com/kAKSNNy.png") : "https://i.imgur.com/kAKSNNy.png",
                    "imageBackgroundColor": "#FFFFFF",
                    "title": response.articles[1].title.substring(0,39) || "綜合性線上學習網",
                    "text": response.articles[1].description != null ? response.articles[1].description.substring(0,59) : "cubee真博學",
                    "defaultAction": {
                        "type": "uri",
                        "label": "XD",
                        "uri": response.articles[1].url || "https://open.163.com/"
                    },
                    "actions": [
                        {
                            "type": "uri",
                            "label": "造訪網址",
                            "uri": response.articles[1].url || "https://open.163.com/"
                        }
                    ]
                  },
                  {
                    "thumbnailImageUrl": response.articles[2].urlToImage != null ? (response.articles[2].urlToImage.substring(0,5) == "https" ? response.articles[0].urlToImage : "https://i.imgur.com/kAKSNNy.png") : "https://i.imgur.com/kAKSNNy.png",
                    "imageBackgroundColor": "#FFFFFF",
                    "title": response.articles[2].title.substring(0,39) || "綜合性線上學習網",
                    "text": response.articles[2].description != null ? response.articles[2].description.substring(0,59) : "cubee真博學",
                    "defaultAction": {
                        "type": "uri",
                        "label": "XD",
                        "uri": response.articles[2].url || "https://open.163.com/"
                    },
                    "actions": [
                        {
                            "type": "uri",
                            "label": "造訪網址",
                            "uri": response.articles[2].url || "https://open.163.com/"
                        }
                    ]
                  },
                  {
                    "thumbnailImageUrl": response.articles[3].urlToImage != null ? (response.articles[3].urlToImage.substring(0,5) == "https" ? response.articles[0].urlToImage : "https://i.imgur.com/kAKSNNy.png") : "https://i.imgur.com/kAKSNNy.png",
                    "imageBackgroundColor": "#FFFFFF",
                    "title": response.articles[3].title.substring(0,39) || "綜合性線上學習網",
                    "text": response.articles[3].description != null ? response.articles[3].description.substring(0,59) : "cubee真博學",
                    "defaultAction": {
                        "type": "uri",
                        "label": "XD",
                        "uri": response.articles[3].url || "https://open.163.com/"
                    },
                    "actions": [
                        {
                            "type": "uri",
                            "label": "造訪網址",
                            "uri": response.articles[3].url || "https://open.163.com/"
                        }
                    ]
                  },
                  {
                    "thumbnailImageUrl": response.articles[4].urlToImage != null ? (response.articles[4].urlToImage.substring(0,5) == "https" ? response.articles[0].urlToImage : "https://i.imgur.com/kAKSNNy.png") : "https://i.imgur.com/kAKSNNy.png",
                    "imageBackgroundColor": "#FFFFFF",
                    "title": response.articles[4].title.substring(0,39) || "綜合性線上學習網",
                    "text": response.articles[4].description != null ? response.articles[4].description.substring(0,59) : "cubee真博學",
                    "defaultAction": {
                        "type": "uri",
                        "label": "XD",
                        "uri": response.articles[4].url || "https://open.163.com/"
                    },
                    "actions": [
                        {
                            "type": "uri",
                            "label": "造訪網址",
                            "uri": response.articles[4].url || "https://open.163.com/"
                        }
                    ]
                  }
              ],
              "imageAspectRatio": "rectangle",
              "imageSize": "cover"
          }
        } // end confirm*/
        console.log(response.articles[0].urlToImage);
        console.log(response.articles[1].urlToImage);
        console.log(response.articles[2].urlToImage);
        console.log(response.articles[3].urlToImage);
        console.log(response.articles[4].urlToImage);
        return confirm;

        //response.articles[]
      } else {
        const sticker = {
            type: "sticker",
            packageId: "2",
            stickerId: "159"
        };
        return sticker;
      }
    });
  }
}