import './scss/reset.scss';
import './scss/index.scss';
import './scss/loading.scss';
import './scss/first.scss';
import './scss/second.scss';
import './scss/third.scss';
import './scss/fourth.scss';
import 'animate.css';
import 'script-loader!util/resLoader';
import 'script-loader!jquery/dist/jquery.min';
import musicUrl from './static/music.mp3';

import script from './js/script';

// 加载loading页资源
const queue = new resLoader({
  resources: [
    require('./img/background.jpg'),
    require('./img/logo.png'),
    require('./img/music-close.png'),
    require('./img/music-open.png'),
    require('./img/loading/loading.png')
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

    const $audio = document.getElementById('audio');
    $audio.src = musicUrl;
    $audio.loop = 'loop';
    $('#music').addClass('on');
    $audio.play();
    // 微信不能自动播放音频，需要在微信的回调函数中播放音频
    document.addEventListener('WeixinJSBridgeReady', function () {
      WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
        console.log('getNetworkType', e);
        $('#music').addClass('on');
        $audio.play();
      });
    }, false);
    // 音乐事件
    $('#music').on('click', function() {
      console.log('aaa', $audio.paused);
      if ($audio.paused) {
        $(this).addClass('on');
        $audio.play();
      } else {
        $(this).removeClass('on');
        $audio.pause();
      }
    });
    script.loadManifest();
  }
});
queue.start();
