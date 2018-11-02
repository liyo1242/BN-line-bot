var moment = require('moment-timezone');
module.exports.alertBubble = ([id, place, planet, way, race, levelS, levelE, start, end, reward1, reward2, reward3] = []) => {
    let m1 = moment(),
        m2 = moment.unix(end),
        du = moment.tz(m2 - m1, 'Africa/Abidjan');
    const confirm = {
        // "type": "flex",
        // "altText": "Flex Message",
        // "contents": {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://cdn.mos.cms.futurecdn.net/R9FkUP5LoYRn3SzgvYHj4R.jpg",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover",
            "action": {
                "type": "uri",
                "label": "Line",
                "uri": "https://linecorp.com/"
            }
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
                    "type": "text",
                    "text": "warframe 警報",
                    "size": "lg",
                    "align": "center",
                    "weight": "bold",
                    "color": "#FC641B"
                },
                {
                    "type": "separator",
                    "margin": "md",
                    "color": "#FC641B"
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "md",
                    "contents": [{
                        "type": "text",
                        "text": `${place} ${planet} | ${way} | ${race} (${levelS}-${levelE})`,
                        "flex": 8,
                        "size": "md",
                        "align": "center",
                        "gravity": "bottom",
                        "weight": "bold",
                        "color": "#666666",
                        "wrap": true
                    }]
                },
                {
                    "type": "separator",
                    "margin": "md",
                    "color": "#FC641B"
                },
                {
                    "type": "box",
                    "layout": "horizontal",
                    "spacing": "md",
                    "margin": "md",
                    "contents": [{
                        "type": "text",
                        "text": `${reward1} | ${reward2} | ${reward3}`,
                        "flex": 8,
                        "align": "center",
                        "color": "#666666",
                        "wrap": true
                    }]
                },
                {
                    "type": "separator",
                    "margin": "md",
                    "color": "#FC641B"
                },
                {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "margin": "md",
                    "contents": [{
                        "type": "text",
                        "text": `還剩下${du.hour() ? `${du.hour()}時${du.minute()}分` : `${du.minute()}分鐘` }`,
                        "flex": 5,
                        "size": "sm",
                        "align": "center",
                        "color": "#666666",
                        "wrap": true
                    }]
                }
            ]
        }
        // }
    }
    return confirm;
}
module.exports.voidBubble = ([id, place, planet, way, race, level, end] = []) => {
    let m1 = moment(),
        m2 = moment.unix(end),
        du = moment.tz(m2 - m1, 'Africa/Abidjan');
    const confirm = {
        // "type": "flex",
        // "altText": "Flex Message",
        // "contents": {
            "type": "bubble",
            "hero": {
                "type": "image",
                "url": "https://images.mmorpg.com/images/heroes/videos/6028.jpg",
                "size": "full",
                "aspectRatio": "20:13",
                "aspectMode": "cover"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [{
                        "type": "text",
                        "text": "虛空遺物",
                        "size": "sm",
                        "align": "center",
                        "weight": "bold",
                        "color": "#DB6C1E",
                        "wrap": true
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [{
                                "type": "separator"
                            },
                            {
                                "type": "text",
                                "text": `${place} | ${planet} | ${way} | ${race} | (${level}) `,
                                "size": "md",
                                "align": "center",
                                "color": "#DB8407",
                                "wrap": true
                            },
                            {
                                "type": "text",
                                "text": `還剩下${du.hour() ? `${du.hour()}時${du.minute()}分` : `${du.minute()}分鐘` }`,
                                "size": "lg",
                                "align": "center",
                                "weight": "bold",
                                "color": "#DB8407",
                                "wrap": true
                            }
                        ]
                    }
                ]
            }
        // }
    }
    return confirm;
}