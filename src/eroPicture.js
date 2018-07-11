const request = require('request');
//var img = require('fs').readFileSync('./sample.png');

module.exports.eroPictureObjectPost = function(name,channelAccessToken,selected, chatBarText, areas) {

    request.post("https://api.line.me/v2/bot/richmenu", {
      forever: true,
      headers: {
        'Authorization': `Bearer ${channelAccessToken}`,
        'Content-Type': 'application/json'
      },
      json: {
	    "size":{
	        "width":2500,
	        "height":1686
	    },
	    "selected":selected,
	    "name":name,
	    "chatBarText":chatBarText,
	    "areas":areas
  	  }
    }, (error, response, body) => {
      if (error) {
        console.log('Error while sending message : ' + error);
        return;
      }

      if (response.statusCode !== 200) {
        console.log('ERROR ' + response.statusCode);
        return;
      }

      console.log('ERO : ' + body); // 'richMenuId'
  	})
} // ---export end

module.exports.eroMenuList = function (channelAccessToken, sequence){
  return new Promise((resolve,reject) => {
    request.get("https://api.line.me/v2/bot/richmenu/list", {
      headers: {
        'Authorization': `Bearer ${channelAccessToken}`,
      }
    }, (error, response, body) => {
      if (error) {
        console.log('Error while sending message : ' + error);
        reject(error);
      }

      if (response.statusCode !== 200) {
        console.log('ERROR ' + response.statusCode);
        reject(error);
      }
      for(var f = 0; f < JSON.parse(body).richmenus.length; f++)
        console.log(`ERO ${f} richmenus : ` + JSON.parse(body).richmenus[f].richMenuId); // 'richmenus'

      resolve(JSON.parse(body).richmenus[sequence].richMenuId);
    })
  })
}

module.exports.linkUser = function (channelAccessToken,richMenuId,userId){
	request.post(`https://api.line.me/v2/bot/user/${userId}/richmenu/${richMenuId}`, {
      forever: true,
      headers: {
        'Authorization': `Bearer ${channelAccessToken}`
      }
    }, (error, response, body) => {
      if (error) {
        console.log('Error while sending message : ' + error);
        return;
      }

      if (response.statusCode !== 200) {
        console.log('ERROR ' + response.statusCode);
        return;
      }

      console.log('success link'); // 'richMenuId'
  	})
}

module.exports.unlinkUser = function (channelAccessToken,userId){
  request.delete(`https://api.line.me/v2/bot/user/${userId}/richmenu`, {
      headers: {
        'Authorization': `Bearer ${channelAccessToken}`,
      }
    }, (error, response, body) => {
      if (error) {
        console.log('Error while sending message : ' + error);
        return;
      }

      if (response.statusCode !== 200) {
        console.log('ERROR ' + response.statusCode);
        return;
      }

      console.log('success unlink user'); // 'richmenus'
    })
}

module.exports.deleteMenu = function (channelAccessToken,richMenuId){
  request.delete(`https://api.line.me/v2/bot/richmenu/${richMenuId}`, {
      headers: {
        'Authorization': `Bearer ${channelAccessToken}`,
      }
    }, (error, response, body) => {
      if (error) {
        console.log('Error while sending message : ' + error);
        return;
      }

      if (response.statusCode !== 200) {
        console.log('ERROR ' + response.statusCode);
        return;
      }

      console.log('success delete menu'); // 'richmenus'
    })
}


