const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('377710b3f4ac43b48ac4dc77d97eea2b');

module.exports = {

    cubee: () => {
        // call verify API AGAIN
        const confirm = {
            "type": "flex",
            "altText": "cubee 選單",
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
                            "url": "https://i.imgur.com/QEvtNdX.jpg",
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
                                                    "url": "https://i.imgur.com/QEvtNdX.jpg",
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
                                                    "url": "https://i.imgur.com/QEvtNdX.jpg",
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
                            "url": "https://i.imgur.com/3QtqA5h.jpg",
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
                                                    "url": "https://i.imgur.com/3QtqA5h.jpg",
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
                                                    "url": "https://i.imgur.com/3QtqA5h.jpg",
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
                            "url": "https://i.imgur.com/zXUL9Am.jpg",
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
                                                    "url": "https://i.imgur.com/zXUL9Am.jpg",
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
                                                    "url": "https://i.imgur.com/zXUL9Am.jpg",
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
                            "url": "https://i.imgur.com/1xmp6VF.jpg",
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
                                                    "url": "https://i.imgur.com/1xmp6VF.jpg",
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
                                                    "url": "https://i.imgur.com/1xmp6VF.jpg",
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
            "altText": "cubee 新聞",
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
            "altText": "cubee 美食",
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
                                    "data": "action=cubeeFood"
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
                                    "data": "action=cubeeFood"
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
                                    "data": "action=cubeeFood"
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
                                    "data": "action=cubeeFood"
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
                                    "data": "action=cubeeFood"
                                }
                            }]
                        }
                    },
                    {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/CEyKBBj.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "高屏美食",
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
                                                    "url": "https://i.imgur.com/CEyKBBj.png",
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
                                                    "url": "https://i.imgur.com/CEyKBBj.png",
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
                                    "data": "action=cubeeFood"
                                }
                            }]
                        }
                    },
                    {
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://i.imgur.com/KiH5bAL.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover"
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "text",
                                    "text": "附近美食",
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
                                                    "url": "https://i.imgur.com/KiH5bAL.png",
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
                                                    "url": "https://i.imgur.com/KiH5bAL.png",
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
                                    "data": "action=cubeeFood"
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
            "altText": "cubee 新聞",
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
            "altText": "cubee 美食",
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
                                "data": "action=cubeeFood"
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