import { deviceMotionShake } from 'util/motion';

// function loadManifest() {
//   const manifest = [
//     { src: require('../img/first/background.jpg'), id: 'page1_background' },
//     { src: require('../img/first/button.gif'), id: 'page1_button' },
//     { src: require('../img/first/couplet-left.png'), id: 'page1_couplet-left' },
//     { src: require('../img/first/couplet-right.png'), id: 'page1_couplet-right' },
//     { src: require('../img/first/slogen.png'), id: 'page1_slogen' },
//     { src: require('../img/first/stage.gif'), id: 'page1_stage' },
//     { src: require('../img/second/background.jpg'), id: 'page2_background' },
//     { src: require('../img/second/slogen.png'), id: 'page2_slogen' },
//     { src: require('../img/second/sticks.png'), id: 'page2_sticks' },
//     { src: require('../img/third/light.png'), id: 'page3_light' },
//     { src: require('../img/third/aiqing-stick.png'), id: 'page3_aiqing-stick' },
//     { src: require('../img/third/caiyun-stick.png'), id: 'page3_caiyun-stick' },
//     { src: require('../img/third/jiankang-stick.png'), id: 'page3_jiankang-stick' },
//     { src: require('../img/third/renyuan-stick.png'), id: 'page3_renyuan-stick' },
//     { src: require('../img/third/shiye-stick.png'), id: 'page3_shiye-stick' },
//     { src: require('../img/fourth/background.jpg'), id: 'page4_background' }
//   ];
//
//   const queue = new createjs.LoadQueue();
//   queue.on('progress', () => {
//     $('#loading .loading__content__number').text((queue.progress*100|0) + '%');
//     console.log((queue.progress*100|0) + '%');
//   });
//   queue.on('complete', () => {
//     console.log('loading complete');
//     start();
//   }, this);
//   queue.loadManifest(manifest);
// };

function loadManifest() {
  const queue = new resLoader({
    resources: [
      require('../img/first/background.jpg'),
      require('../img/first/button.gif'),
      require('../img/first/couplet-left.png'),
      require('../img/first/couplet-right.png'),
      require('../img/first/slogen.png'),
      require('../img/first/stage.gif'),
      require('../img/second/background.jpg'),
      require('../img/second/slogen.png'),
      require('../img/second/sticks.png'),
      require('../img/third/light.png'),
      require('../img/second/sticks.png'),
      require('../img/third/aiqing-stick.png'),
      require('../img/third/caiyun-stick.png'),
      require('../img/third/jiankang-stick.png'),
      require('../img/third/renyuan-stick.png'),
      require('../img/third/shiye-stick.png'),
      require('../img/fourth/background.jpg')
    ],
    onProgress(current, total) {
      const percent = parseInt(current / total * 100);
      console.log('percent', percent);
      $('#loading .loading__content__number').text(percent + '%');
    },
    onComplete() {
      console.log('loading complete');
      $('#loading .loading__content__text').hide();
      $('#loading .loading__content__complete').show().on('click', () => {
        start();
      });
    }
  });
  queue.start();
}

function start() {
  $('#loading').hide();
  $('#first').show();
  $('#first .first__button').on('click', () => {
    $('#first').hide();
    showSecondPage();
  });
}

function showSecondPage() {
  $('#second').show();
  deviceMotionShake(1000).then(() => {
    $('#second .second__sticks').removeClass('ani-shake');
    showThirdPage();
  });
}

function showThirdPage() {
  $('#third').show();
  const stickList = ['.aiqing-stick', '.caiyun-stick', '.jiankang-stick', '.renyuan-stick', '.shiye-stick'];
  const index = Math.round(Math.random() * (stickList.length - 1));
  console.log('stick index ', index);
  const stickName = stickList[index];
  $(`#third ${stickName}`).show().on('click', () => {
    $('#second').hide();
    $('#third').hide();
    showFourthPage();
  });
}

function showFourthPage() {
  $('#fourth').show();
}

export default {
  loadManifest
};