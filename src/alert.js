var Crawler = require("crawler");
const request = require('request');
let template = require('./alertTemplate');
var c = new Crawler({
    // 在每个请求处理完毕后将调用此回调函数
    callback: function(error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = res.$;
            // $ 默认为 Cheerio 解析器
            // 它是核心jQuery的精简实现，可以按照jQuery选择器语法快速提取DOM元素
            console.log($("title").text());
        }
        done();
    }
});

module.exports.alert = function() {
    return new Promise((resolve, reject) => {
        request.get("http://wf.poedb.tw/data.php?t=all",
            (error, response, body) => {
                console.log("driverData-response-statusCode", response.statusCode);
                if (error) {
                    console.log('Error : ' + error);
                    reject(error);
                }
                if (response.statusCode !== 200) {
                    console.log(`Error status code ${response.statusCode} while sending ${body.errMsgs}`);
                    reject(response.statusCode);
                }
                const data = JSON.parse(body);
                let contentArr = []
                for (let val of data.alerts_raw) {
                    contentArr.push(template.bubble(val));
                }
                const consfirm = {
                    "type": "flex",
                    "altText": "Flex Message",
                    "contents": {
                        "type": "carousel",
                        "contents": contentArr
                    }
                }
                resolve(consfirm);
            })
    })

};