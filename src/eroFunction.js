// const ero = require('./eroPicture.js');

module.exports.chooseMenu = () => {
	const confirm = {
			  "type": "template",
			  "altText": "This is a buttons template",
			  "template": {
			      "type": "buttons",
			      "thumbnailImageUrl": "https://www.bluenet-ride.com/images/drawable/cubeegroup/surprisecubee.png",
			      "imageAspectRatio": "rectangle",
			      "imageSize": "cover",
			      "imageBackgroundColor": "#1EE5E5",
			      "title": "Menu",
			      "text": "Update to the latest version of the menu",
			      "defaultAction": {
			          "type": "uri",
			          "label": "View detail",
			          "uri": "http://example.com/page/123"
			      },
			      "actions": [
			        {
		              	"type": "postback",
              			"label": "ok",
              			"data": "action=one"
		            }
			      ]
			  }
			}

	return confirm;
}
module.exports.selftest = () => {
	const confirm = {
		  	"type": "template",
		  	"altText": "this is a image carousel template",
		  	"template": {
		      	"type": "image_carousel",
		      	"columns": [
		          {
		            "imageUrl": "https://i.imgur.com/opV3f3t.jpg",
		            "action": {
		              	"type": "postback",
              			"label": "door",
              			"data": "action=alpha"
		            }
		          }
		      	]
		  	}
		}
	return confirm;
}

module.exports.eavesdropper = (userid, imgurl, userName, userMessage) => {
	console.log("in eavesdropper");
	const confirm = {
		"type": "flex",
	    "altText": "eavesdropper",
	    "contents":{
		  "type": "bubble",
		  "body": {
		    "type": "box",
		    "layout": "horizontal",
		    "spacing": "md",
		    "contents": [
		      {
		        "type": "box",
		        "layout": "vertical",
		        "flex": 1,
		        "contents": [
		          {
		            "type": "image",
		            "url": imgurl,
		            "aspectMode": "cover",
		            "aspectRatio": "4:3",
		            "size": "sm",
		            "gravity": "bottom"
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
		            "text": `${userName} -- (${userid}) says ${userMessage}`,
		            "gravity": "top",
		            "wrap": true,
		            "size": "xs",
		            "flex": 1
		          }
		        ]
		      }
		    ]
		  }
		}
	}
	return confirm;
}