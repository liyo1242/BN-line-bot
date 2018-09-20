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
                "actions": [{
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

    verifyagainreply: () => {
        const confirm = {
            "type": "template",
            "altText": "this is a confirm template",
            "template": {
                "type": "confirm",
                "text": "驗證碼錯了喔 發生了什麼事嗎??",
                "actions": [{
                        "type": "postback",
                        "label": "不是這支電話",
                        "data": "action=wrongphone"
                        //這裡有可能要用 type : postback 來使 register 狀態 退回
                    },
                    {
                        "type": "postback",
                        "label": "再發一次給我",
                        "data": "action=vertifyagain"
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
                "contents": [{
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://imgur.com/LJC0iaC.jpg",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "新聞",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
                                                    "type": "image",
                                                    "url": "https://imgur.com/LJC0iaC.jpg",
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
                                                    "url": "https://imgur.com/LJC0iaC.jpg",
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
                                            "contents": [{
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "新聞分類",
                                    "data": "action=news"
                                }
                            }]
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
                            "contents": [{
                                    "type": "text",
                                    "text": "美食",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
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
                                            "contents": [{
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "地區分類",
                                    "data": "action=foodLocation"
                                }
                            }]
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
                            "contents": [{
                                    "type": "text",
                                    "text": "購物",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
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
                                            "contents": [{
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "網站排行",
                                    "data": "action=buy&itemid=123"
                                }
                            }]
                        }
                    },
                    {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/wFDwUlH.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "八卦",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
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
                                            "contents": [{
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "網站分類",
                                    "data": "action=buy&itemid=123"
                                }
                            }]
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
                            "contents": [{
                                    "type": "text",
                                    "text": "機票",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
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
                                            "contents": [{
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "網站分類",
                                    "data": "action=buy&itemid=123"
                                }
                            }]
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
                            "contents": [{
                                    "type": "text",
                                    "text": "旅遊",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
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
                                            "contents": [{
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "網站分類",
                                    "data": "action=buy&itemid=123"
                                }
                            }]
                        }
                    }
                ]
            }

        }
        return confirm;
    },

    cubeeNews: () => {
        const confirm = {
            "type": "flex",
            "altText": "this is a flex message",
            "contents": {
                "type": "carousel",
                "contents": [{
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/57lIOx1.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "頭條新聞",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
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
                                            "contents": [{
                                                    "type": "text",
                                                    "text": "標題",
                                                    "size": "md",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "separator"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "標題",
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "更多新聞",
                                    "data": "action=headlineNews"
                                }
                            }]
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
                            "contents": [{
                                    "type": "text",
                                    "text": "焦點新聞",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
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
                                            "contents": [{
                                                    "type": "text",
                                                    "text": "標題",
                                                    "size": "md",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "separator"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "標題",
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "更多新聞",
                                    "data": "action=focusNews"
                                }
                            }]
                        }
                    },
                    {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/8giBrZp.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "國際新聞",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
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
                                            "contents": [{
                                                    "type": "text",
                                                    "text": "標題",
                                                    "size": "md",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "separator"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "標題",
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "更多新聞",
                                    "data": "action=globalNews"
                                }
                            }]
                        }
                    },
                    {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/cQJgaLc.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "財經新聞",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
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
                                            "contents": [{
                                                    "type": "text",
                                                    "text": "標題",
                                                    "size": "md",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "separator"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "標題",
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "更多新聞",
                                    "data": "action=businessNews"
                                }
                            }]
                        }
                    },
                    {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/0o5fnMG.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "社會新聞",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
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
                                            "contents": [{
                                                    "type": "text",
                                                    "text": "標題",
                                                    "size": "md",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "separator"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "標題",
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "更多新聞",
                                    "data": "action=societyNews"
                                }
                            }]
                        }
                    },
                    {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/OEWxVSa.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "科技新聞",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
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
                                            "contents": [{
                                                    "type": "text",
                                                    "text": "標題",
                                                    "size": "md",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "separator"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "標題",
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "更多新聞",
                                    "data": "action=techNews"
                                }
                            }]
                        }
                    },
                    {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/GtnlVTM.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "旅遊新聞",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
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
                                            "contents": [{
                                                    "type": "text",
                                                    "text": "標題",
                                                    "size": "md",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "separator"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "標題",
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "更多新聞",
                                    "data": "action=tourNews"
                                }
                            }]
                        }
                    },
                    {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/iAYMXkf.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "娛樂新聞",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
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
                                            "contents": [{
                                                    "type": "text",
                                                    "text": "標題",
                                                    "size": "md",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "separator"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "標題",
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "更多新聞",
                                    "data": "action=entertainmentNews"
                                }
                            }]
                        }
                    },
                    {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/mKJ7uKm.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "交通新聞",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
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
                                            "contents": [{
                                                    "type": "text",
                                                    "text": "標題",
                                                    "size": "md",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "separator"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "標題",
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "更多新聞",
                                    "data": "action=trafficNews"
                                }
                            }]
                        }
                    },
                    {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/O3nHXv6.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "體育新聞",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
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
                                            "contents": [{
                                                    "type": "text",
                                                    "text": "標題",
                                                    "size": "md",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "separator"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "標題",
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "更多新聞",
                                    "data": "action=sportNews"
                                }
                            }]
                        }
                    }
                ]

            }
        }
        return confirm;
    },

    cubeeFood: () => {
        const confirm = {
            "type": "flex",
            "altText": "this is a flex message",
            "contents": {
                "type": "carousel",
                "contents": [{
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/hdXSiha.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "雲嘉南美食",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
                                                    "type": "image",
                                                    "url": "https://i.imgur.com/hdXSiha.png",
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
                                                    "url": "https://i.imgur.com/hdXSiha.png",
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
                                            "contents": [{
                                                    "type": "text",
                                                    "text": "標題",
                                                    "size": "md",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "separator"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "標題",
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "更多美食",
                                    "data": "action=food"
                                }
                            }]
                        }
                    },
                    {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/9a6ZcZZ.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "中彰投美食",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
                                                    "type": "image",
                                                    "url": "https://i.imgur.com/9a6ZcZZ.png",
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
                                                    "url": "https://i.imgur.com/9a6ZcZZ.png",
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
                                            "contents": [{
                                                    "type": "text",
                                                    "text": "標題",
                                                    "size": "md",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "separator"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "標題",
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "更多美食",
                                    "data": "action=food"
                                }
                            }]
                        }
                    },
                    {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/UpZ9a9g.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "北北基美食",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
                                                    "type": "image",
                                                    "url": "https://i.imgur.com/UpZ9a9g.png",
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
                                                    "url": "https://i.imgur.com/UpZ9a9g.png",
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
                                            "contents": [{
                                                    "type": "text",
                                                    "text": "標題",
                                                    "size": "md",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "separator"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "標題",
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "更多美食",
                                    "data": "action=food"
                                }
                            }]
                        }
                    },
                    {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/TIYzrrr.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "桃竹苗美食",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
                                                    "type": "image",
                                                    "url": "https://i.imgur.com/TIYzrrr.png",
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
                                                    "url": "https://i.imgur.com/TIYzrrr.png",
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
                                            "contents": [{
                                                    "type": "text",
                                                    "text": "標題",
                                                    "size": "md",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "separator"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "標題",
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "更多美食",
                                    "data": "action=food"
                                }
                            }]
                        }
                    },
                    {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/VinjKDl.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "宜花東美食",
                                    "weight": "bold",
                                    "size": "lg"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "box",
                                            "layout": "vertical",
                                            "flex": 1,
                                            "contents": [{
                                                    "type": "image",
                                                    "url": "https://i.imgur.com/VinjKDl.png",
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
                                                    "url": "https://i.imgur.com/VinjKDl.png",
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
                                            "contents": [{
                                                    "type": "text",
                                                    "text": "標題",
                                                    "size": "md",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "separator"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "標題",
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
                            "contents": [{
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "更多美食",
                                    "data": "action=food"
                                }
                            }]
                        }
                    }
                ]

            }
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
            "type": "flex",
            "altText": "this is a flex message",
            "contents": {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "size": "full",
                    "aspectRatio": "20:13",
                    "aspectMode": "cover",
                    "url": "https://img.appledaily.com.tw/images/twapple/640pix/20180829/LA01/LA01_002.jpg"
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [{
                            "type": "box",
                            "layout": "baseline",
                            "contents": [{
                                "type": "text",
                                "text": "標題",
                                "weight": "bold",
                                "size": "md",
                                "flex": 0
                            }]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [{
                                "type": "text",
                                "text": "內文",
                                "wrap": true,
                                "weight": "bold",
                                "size": "xs",
                                "flex": 0
                            }]
                        }
                    ]
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [{
                            "type": "separator"
                        },
                        {
                            "type": "button",
                            "action": {
                                "type": "postback",
                                "label": "下則新聞",
                                "data": "action=businessNews"
                            }
                        }
                    ]
                }
            }

        }
        return confirm;
    },

    cubeeFoodLocation: () => {
        const confirm = {
            "type": "flex",
            "altText": "this is a flex message",
            "contents": {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "size": "full",
                    "aspectRatio": "20:13",
                    "aspectMode": "cover",
                    "url": "https://i.imgur.com/T1pQCVr.png"
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [{
                            "type": "box",
                            "layout": "baseline",
                            "contents": [{
                                "type": "text",
                                "text": "標題",
                                "weight": "bold",
                                "size": "md",
                                "flex": 0
                            }]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [{
                                "type": "text",
                                "text": "內文",
                                "wrap": true,
                                "weight": "bold",
                                "size": "xs",
                                "flex": 0
                            }]
                        }
                    ]
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [{
                            "type": "separator"
                        },
                        {
                            "type": "button",
                            "action": {
                                "type": "postback",
                                "label": "下則美食",
                                "data": "action=food"
                            }
                        }
                    ]
                }
            }

        }
        return confirm;
    },

    calendarReply: (title, start, end, location, content) => {
        var gandalfText = {
            "type": "flex",
            "altText": "Flex Message",
            "contents": {
                "type": "bubble",
                "styles": {
                    "footer": {
                        "separator": true
                    }
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [{
                            "type": "box",
                            "layout": "baseline",
                            "contents": [{
                                    "type": "icon",
                                    "url": "https://www.bluenet-ride.com/images/drawable/cubeegroup/hellocubee.png",
                                    "size": "xl"
                                },
                                {
                                    "type": "text",
                                    "text": "加進行事曆前的提醒",
                                    "weight": "bold",
                                    "margin": "xl",
                                    "flex": 0,
                                    "size": "xl",
                                    "color": "#aaaaaa"
                                }
                            ]
                        },
                        {
                            "type": "separator",
                            "margin": "xxl"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "margin": "xxl",
                            "spacing": "sm",
                            "contents": [{
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "text",
                                            "text": "活動名稱 :",
                                            "size": "sm",
                                            "color": "#555555",
                                            "flex": 2
                                        },
                                        {
                                            "type": "text",
                                            "text": title,
                                            "size": "sm",
                                            "wrap": true,
                                            "color": "#111111",
                                            "flex": 4
                                        }
                                    ]
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "text",
                                            "text": "開始時間 :",
                                            "size": "sm",
                                            "color": "#555555",
                                            "flex": 2
                                        },
                                        {
                                            "type": "text",
                                            "text": start,
                                            "size": "sm",
                                            "color": "#111111",
                                            "wrap": true,
                                            "flex": 4
                                        }
                                    ]
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "text",
                                            "text": "結束時間 :",
                                            "size": "sm",
                                            "color": "#555555",
                                            "flex": 2
                                        },
                                        {
                                            "type": "text",
                                            "text": end,
                                            "size": "sm",
                                            "color": "#111111",
                                            "flex": 4,
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "separator",
                                    "margin": "xxl"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "text",
                                            "text": "活動地點 :",
                                            "size": "sm",
                                            "color": "#555555",
                                            "flex": 2
                                        },
                                        {
                                            "type": "text",
                                            "text": (location != "" && location != undefined) ? location : "無",
                                            "size": "sm",
                                            "color": "#111111",
                                            "wrap": true,
                                            "flex": 4
                                        }
                                    ]
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                            "type": "text",
                                            "text": "活動內容 :",
                                            "size": "sm",
                                            "color": "#555555",
                                            "flex": 2
                                        },
                                        {
                                            "type": "text",
                                            "text": (content != "" && content != undefined) ? content : "無",
                                            "size": "sm",
                                            "color": "#111111",
                                            "wrap": true,
                                            "flex": 4
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "separator",
                            "margin": "xxl"
                        },
                        {
                            "type": "button",
                            "action": {
                                "type": "uri",
                                "label": "加進日曆",
                                "uri": `http://bn-calendar.herokuapp.com?title=${title}&start=${start}&end=${end}&location=${location}`
                            },
                            "style": "link",
                            "color": "#1879e2",
                            "flex": 0,
                            "gravity": "bottom"
                        }
                    ]
                }
            }
        }
        return gandalfText;
    }
}