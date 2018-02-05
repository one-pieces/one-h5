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
      require('../img/fourth/background.jpg'),
      require('../img/fourth/again-btn.png'),
      require('../img/fourth/aiqingwang.png'),
      require('../img/fourth/caiyunwang.png'),
      require('../img/fourth/cloud1.png'),
      require('../img/fourth/cloud2.png'),
      require('../img/fourth/flower1.png'),
      require('../img/fourth/flower2.png'),
      require('../img/fourth/jiankangwang.png'),
      require('../img/fourth/renyuanwang.png'),
      require('../img/fourth/share-btn.png'),
      require('../img/fourth/shiyewang.png'),
      require('../img/fourth/share.png')
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
        $('#loading').fadeOut(100, start);
      });
    }
  });
  queue.start();
}

function start() {
  $('#first').fadeIn(300);
  $('#first .first__button').on('click', () => {
    $('#first').fadeOut(100, showSecondPage);
  });
}

function showSecondPage() {
  $('#second').fadeIn(300);
  $('#second .second__sticks').addClass('animated wobble infinite');
  deviceMotionShake(1000).then(() => {
    $('#second .second__sticks').removeClass('animated wobble infinite');
    showThirdPage();
  });
}

function showThirdPage() {
  $('#third').show();
  const stickList = ['aiqing', 'caiyun', 'jiankang', 'renyuan', 'shiye'];
  const index = Math.round(Math.random() * (stickList.length - 1));
  console.log('stick index ', index);
  const stickName = stickList[index];
  $('#third__stick')
    .removeClass()
    .addClass(`third__stick animated fadeIn zoomIn ${stickName}-stick`)
    .on('click', function() {
      $(this).off('click');
      $('#second').fadeOut(100);
      $('#third').fadeOut(100, () => {
        showFourthPage(stickName);
      });
    });
}

function showFourthPage(stickName) {
  $('#fourth').fadeIn(300);
  $('#fourth__wang').removeClass().addClass(`fourth__wang ${stickName}-wang`);
  // 再来一次
  $('#fourth .again-btn').on('click', function() {
    $(this).off('click');
    $('#fourth').fadeOut(100, showSecondPage);
  });
  // 分享
  $('#fourth .share-btn').on('click', () => {
    $('#fourth .fourth__mark').fadeIn(100).on('click', function () {
      $(this).hide();
    });
  });
}

export default {
  loadManifest
};