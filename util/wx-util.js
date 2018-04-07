import scriptjs from 'scriptjs';

exports.wxSetJsSdkConfig = (url) => {
  return new Promise((resolve, reject) => {
    scriptjs('http://res.wx.qq.com/open/js/jweixin-1.2.0.js', () => {
      $.ajax({
        type: 'get',
        // url: 'http://d8006ef8.ngrok.io/getJsSdkSign',
        url: 'http://www.tron-m.com/tron-api/jssdk/share.do',
        data: { url },
        dataType: 'json',
        success(res) {
          // const { appId, timestamp, nonceStr, signature } = res.data;
          const { appId, timestamp, nonceStr, signature } = res.result;
          if (res.code === 1) {
            wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId, // 必填，公众号的唯一标识
              timestamp, // 必填，生成签名的时间戳
              nonceStr, // 必填，生成签名的随机串
              signature,// 必填，签名，见附录1
              jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
          } else {
            console.log("getWXConfig has error:" + res.msg);
            reject(res.msg);
          }

          wx.ready(() => {
            resolve();
          });

          wx.error((res) => {
            console.log("wx has error: ", res);
            reject(res);
          });
        }
      })
    });
  });
};