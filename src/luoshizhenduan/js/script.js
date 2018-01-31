function loadManifest() {
  const manifest = [
    { src: require('../img/first/background.jpg'), id: 'page1_background' },
    { src: require('../img/first/button.gif'), id: 'page1_button' },
    { src: require('../img/first/couplet-left.png'), id: 'page1_couplet-left' },
    { src: require('../img/first/couplet-right.png'), id: 'page1_couplet-right' },
    { src: require('../img/first/slogen.png'), id: 'page1_slogen' },
    { src: require('../img/first/stage.gif'), id: 'page1_stage' }
  ];

  const queue = new createjs.LoadQueue();
  queue.on('progress', () => {
    $('#loading .loading__content__number').text((queue.progress*100|0) + '%');
    console.log((queue.progress*100|0) + '%');
  });
  queue.on('complete', () => {
    console.log('loading complete');
    start();
  }, this);
  queue.loadManifest(manifest);
};

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
  setTimeout(() => {
    $('#second .second__sticks').removeClass('ani-shake');
    showThirdPage();
  }, 1000);
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