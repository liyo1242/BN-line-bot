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