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
  }
}