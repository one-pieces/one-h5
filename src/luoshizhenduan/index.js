import './scss/reset.scss';
import './scss/index.scss';
import './scss/loading.scss';
import './scss/first.scss';
import './scss/second.scss';
import './scss/third.scss';
import './scss/fourth.scss';
// import 'script-loader!preloadjs/lib/preloadjs.min';
// import 'script-loader!createjs/builds/1.0.0/createjs.min';
import 'script-loader!util/resLoader';
import 'script-loader!zepto/dist/zepto.min';

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
    script.loadManifest();
  }
});
queue.start();
