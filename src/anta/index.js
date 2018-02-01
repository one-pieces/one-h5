import C3D from './js/css3d.min';
import 'script-loader!preloadjs/lib/preloadjs.min';
import 'script-loader!zepto/dist/zepto.min';

loadManifest();

function loadManifest() {
  const manifest = [
    // { src: require('../img/first/background.jpg'), id: 'page1_background' },
    // { src: require('../img/first/button.gif'), id: 'page1_button' },
    // { src: require('../img/first/couplet-left.png'), id: 'page1_couplet-left' },
    // { src: require('../img/first/couplet-right.png'), id: 'page1_couplet-right' },
    // { src: require('../img/first/slogen.png'), id: 'page1_slogen' },
    // { src: require('../img/first/stage.gif'), id: 'page1_stage' }
  ];

  const queue = new createjs.LoadQueue();
  queue.on('progress', () => {
    // $('#loading .loading__content__number').text((queue.progress*100|0) + '%');
    console.log((queue.progress*100|0) + '%');
  });
  queue.on('complete', () => {
    console.log('loading complete');
    start();
  }, this);
  queue.loadManifest(manifest);
};

function start() {
  console.log('wwww', C3D);
  // 创建场景
  const stage = new C3D.Stage({ el: $('#three')[0] });
  stage.size(window.innerWidth, window.innerHeight).update();

  // 容器
  const spMain = new C3D.Sprite();
  spMain.position(0, 0, -600).update();
  stage.addChild(spMain);
}

function createdPanoBg() {

}
