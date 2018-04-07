import './scss/index.scss';
// import musicUrl from './media/music.mp3';
import 'script-loader!util/resLoader';
import 'script-loader!jquery/dist/jquery.min';
import script from './js/script';
import { wxSetJsSdkConfig } from 'util/wx-util';

// 分享设置
wxSetJsSdkConfig(window.location.href).then(() => {
  const params = {
    title: '浦发酒店银行',
    desc: '为酒店银行打call，兑现完美假期！',
    link: window.location.href,
    imgUrl: 'http://test.tron-m.com/oib/luoshi/luoshizhenduan/static/icon.png',
    success() {
      // 用户确认分享后执行的回调函数
      // $('#fourth .fourth__mark').hide();
    },
    cancel() {
      // 用户取消分享后执行的回调函数
      // $('#fourth .fourth__mark').hide();
    }
  };
  wx.onMenuShareTimeline(params);
  wx.onMenuShareAppMessage(params);
  wx.onMenuShareQQ(params);
  wx.onMenuShareWeibo(params);
  wx.onMenuShareQZone(params);
});

// 加载loading页资源
const queue = new ResLoader({
  resources: [
    require('./img/background.jpg')
  ],
  onProgress(current, total) {
    const percent = parseInt(current / total * 100);
    console.log('percent', percent);
  },
  onComplete() {
    console.log('preLoading complete');
    // 禁止拉动
    $('body').on('touchmove', (e) => {
      e.preventDefault();
    });
    $('#app').show();

    // const $audio = document.getElementById('audio');
    // $audio.src = musicUrl;
    // $audio.loop = 'loop';
    // $('#music').addClass('on');
    // $audio.play();
    // // 微信不能自动播放音频，需要在微信的回调函数中播放音频
    // document.addEventListener('WeixinJSBridgeReady', function () {
    //   WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
    //     console.log('getNetworkType', e);
    //     $('#music').addClass('on');
    //     $audio.play();
    //   });
    // }, false);
    // // 音乐事件
    // $('#music').on('click', function() {
    //   console.log('aaa', $audio.paused);
    //   if ($audio.paused) {
    //     $(this).addClass('on');
    //     $audio.play();
    //   } else {
    //     $(this).removeClass('on');
    //     $audio.pause();
    //   }
    // });
    script.loadManifest();
  }
});
queue.start();
