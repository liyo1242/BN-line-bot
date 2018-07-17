// const ero = require('./eroPicture.js');

module.exports.chooseMenu = () => {
	const confirm = {
		  	"type": "template",
		  	"altText": "this is a image carousel template",
		  	"template": {
		      	"type": "image_carousel",
		      	"columns": [
		          {
		            "imageUrl": "https://i.imgur.com/CK6wfnJ.png",
		            "action": {
		              	"type": "postback",
              			"label": "1",
              			"data": "action=one"
		            }
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