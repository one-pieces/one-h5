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
    // 音乐事件
    $('#music').on('click', function() {
      const $audio = document.getElementById('audio');
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
