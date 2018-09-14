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
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://i.imgur.com/38tEl5i.png",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "新聞",
            "weight": "bold",
            "size": "lg"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "contents": [
                  {
                    "type": "image",
                    "url": "https://i.imgur.com/57lIOx1.png",
                    "aspectMode": "cover",
                    "aspectRatio": "4:3",
                    "size": "sm",
                    "gravity": "bottom"
                  },
                  {
                    "type": "separator"
                  },
                  {
                    "type": "image",
                    "url": "https://i.imgur.com/38tEl5i.png",
                    "aspectMode": "cover",
                    "aspectRatio": "4:3",
                    "margin": "md",
                    "size": "sm"
                  },
                  {
                    "type": "separator"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 2,
                "contents": [
                  {
                    "type": "text",
                    "text": "頭條新聞",
                    "size": "md",
                    "flex": 1
                  },
                  {
                    "type": "separator"
                  },
                  {
                    "type": "text",
                    "text": "焦點新聞",
                    "size": "md",
                    "flex": 1
                  },
                  {
                    "type": "separator"
                  }
                ]
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "button",
            "action": {
              "type": "postback",
              "label": "新聞分類",
              "data": "action=buy&itemid=123"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://img.chinatimes.com/newsphoto/2017-11-26/656/20171126003369.jpg",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "美食",
            "weight": "bold",
            "size": "lg"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "contents": [
                  {
                    "type": "image",
                    "url": "https://www.1111.com.tw/15sp/delicacy/delicacy_img/activImg/index_852_.jpg",
                    "aspectMode": "cover",
                    "aspectRatio": "4:3",
                    "size": "sm",
                    "gravity": "bottom"
                  },
                  {
                    "type": "separator"
                  },
                  {
                    "type": "image",
                    "url": "https://pic.pimg.tw/mystussy/1498144779-2497766737_n.jpg",
                    "aspectMode": "cover",
                    "aspectRatio": "4:3",
                    "margin": "md",
                    "size": "sm"
                  },
                  {
                    "type": "separator"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 2,
                "contents": [
                  {
                    "type": "text",
                    "text": "隨機美食",
                    "size": "md",
                    "flex": 1
                  },
                  {
                    "type": "separator"
                  },
                  {
                    "type": "text",
                    "text": "隨機美食",
                    "size": "md",
                    "flex": 1
                  },
                  {
                    "type": "separator"
                  }
                ]
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "button",
            "action": {
              "type": "postback",
              "label": "地區分類",
              "data": "action=buy&itemid=123"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://png.clipart.me/istock/previews/6767/67677003-shopping-store-icon.jpg",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "購物",
            "weight": "bold",
            "size": "lg"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "contents": [
                  {
                    "type": "image",
                    "url": "https://buzzorange.com/techorange/wp-content/uploads/sites/2/2018/02/4570.png",
                    "aspectMode": "cover",
                    "aspectRatio": "4:3",
                    "size": "sm",
                    "gravity": "bottom"
                  },
                  {
                    "type": "separator"
                  },
                  {
                    "type": "image",
                    "url": "https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/66/52/b8/6652b831-4ad9-4604-840e-fdf2b56fabdc/AppIcon-1x_U007emarketing-85-220-4.png/1024x1024bb.png",
                    "aspectMode": "cover",
                    "aspectRatio": "4:3",
                    "margin": "md",
                    "size": "sm"
                  },
                  {
                    "type": "separator"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 2,
                "contents": [
                  {
                    "type": "text",
                    "text": "pchome",
                    "size": "md",
                    "flex": 1
                  },
                  {
                    "type": "separator"
                  },
                  {
                    "type": "text",
                    "text": "蝦皮拍賣",
                    "size": "md",
                    "flex": 1
                  },
                  {
                    "type": "separator"
                  }
                ]
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "button",
            "action": {
              "type": "postback",
              "label": "網站排行",
              "data": "action=buy&itemid=123"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://i.imgur.com/38tEl5i.png",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "八卦",
            "weight": "bold",
            "size": "lg"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "contents": [
                  {
                    "type": "image",
                    "url": "https://static.newmobilelife.com/wp-content/uploads/2015/04/ptt-push-icon.jpeg",
                    "aspectMode": "cover",
                    "aspectRatio": "4:3",
                    "size": "sm",
                    "gravity": "bottom"
                  },
                  {
                    "type": "separator"
                  },
                  {
                    "type": "image",
                    "url": "https://p2.bahamut.com.tw/HOME/creationCover/82/0003893682_B.JPG",
                    "aspectMode": "cover",
                    "aspectRatio": "4:3",
                    "margin": "md",
                    "size": "sm"
                  },
                  {
                    "type": "separator"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 2,
                "contents": [
                  {
                    "type": "text",
                    "text": "ptt",
                    "size": "md",
                    "flex": 1
                  },
                  {
                    "type": "separator"
                  },
                  {
                    "type": "text",
                    "text": "dcard",
                    "size": "md",
                    "flex": 1
                  },
                  {
                    "type": "separator"
                  }
                ]
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "button",
            "action": {
              "type": "postback",
              "label": "網站分類",
              "data": "action=buy&itemid=123"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://pic.pimg.tw/cherrytcj/1477557883-3412659381.jpg",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "機票",
            "weight": "bold",
            "size": "lg"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "contents": [
                  {
                    "type": "image",
                    "url": "https://uupon.tw/upload/store/2195f725f30000029a5e.jpg",
                    "aspectMode": "cover",
                    "aspectRatio": "4:3",
                    "size": "sm",
                    "gravity": "bottom"
                  },
                  {
                    "type": "separator"
                  },
                  {
                    "type": "image",
                    "url": "https://img.hongkongcard.com/v6/d//2014/08/merchant/thumbnail/ml_1272.jpg",
                    "aspectMode": "cover",
                    "aspectRatio": "4:3",
                    "margin": "md",
                    "size": "sm"
                  },
                  {
                    "type": "separator"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 2,
                "contents": [
                  {
                    "type": "text",
                    "text": "長榮航空",
                    "size": "md",
                    "flex": 1
                  },
                  {
                    "type": "separator"
                  },
                  {
                    "type": "text",
                    "text": "中華航空",
                    "size": "md",
                    "flex": 1
                  },
                  {
                    "type": "separator"
                  }
                ]
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "button",
            "action": {
              "type": "postback",
              "label": "網站分類",
              "data": "action=buy&itemid=123"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://www.liontravel.com/promotion/tkt/cheaptickets/FileUpLoad/PictureAndWord/Model/8161/22591/ae065251-7cb8-4790-8caf-e6d421036c8d.jpg",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "旅遊",
            "weight": "bold",
            "size": "lg"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "contents": [
                  {
                    "type": "image",
                    "url": "https://expediagroup-b54c.kxcdn.com/wp-content/uploads/2013/06/logo-trivago-v2.png",
                    "aspectMode": "cover",
                    "aspectRatio": "4:3",
                    "size": "sm",
                    "gravity": "bottom"
                  },
                  {
                    "type": "separator"
                  },
                  {
                    "type": "image",
                    "url": "https://www.kkday.com/assets/img/kkday_logo_final.png",
                    "aspectMode": "cover",
                    "aspectRatio": "4:3",
                    "margin": "md",
                    "size": "sm"
                  },
                  {
                    "type": "separator"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 2,
                "contents": [
                  {
                    "type": "text",
                    "text": "trivago",
                    "size": "md",
                    "flex": 1
                  },
                  {
                    "type": "separator"
                  },
                  {
                    "type": "text",
                    "text": "kkday",
                    "size": "md",
                    "flex": 1
                  },
                  {
                    "type": "separator"
                  }
                ]
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "button",
            "action": {
              "type": "postback",
              "label": "網站分類",
              "data": "action=buy&itemid=123"
            }
          }
        ]
      }
    }
  ]
}

}
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
    const confirm = {
      "type": "text",
      "text": "Cubee趕工中"
    }
    return confirm;
  }
}