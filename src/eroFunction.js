// const ero = require('./eroPicture.js');
module.exports.eavesdropper = (userid, imgurl, userName, userMessage) => {
    console.log("in eavesdropper");
    console.log(userid);
    console.log(imgurl);
    console.log(userName);
    console.log(userMessage);
    const confirm = {
        "type": "flex",
        "altText": "eavesdropper",
        "contents": {
            "type": "bubble",
            "body": {
                "type": "box",
                "layout": "horizontal",
                "spacing": "md",
                "contents": [{
                        "type": "box",
                        "layout": "vertical",
                        "flex": 1,
                        "contents": [{
                            "type": "image",
                            "url": imgurl,
                            "aspectMode": "cover",
                            "aspectRatio": "4:3",
                            "size": "sm",
                            "gravity": "bottom"
                        }]
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "flex": 2,
                        "contents": [{
                            "type": "text",
                            "text": `${userName} -- (${userid}) says ${userMessage}`,
                            "gravity": "top",
                            "wrap": true,
                            "size": "xs",
                            "flex": 1
                        }]
                    }
                ]
            }
        }
    }
    return confirm;
}