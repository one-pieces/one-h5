import PageA from './page-a';
import PageB from './page-b';
import PageC from './page-c';
import PageD from './page-d';
import PageE from './page-e';
import PageF from './page-f';
import PageG from './page-g';
import PageH from './page-h';
import PageI from './page-i';
import PageJ from './page-j';

function loadManifest() {
  const queue = new ResLoader({
    resources: [
      require('../img/f1/background.jpg'),
      require('../img/f1/talk.png'),
      require('../img/f1/button.png'),
      require('../img/f2/background.jpg'),
      require('../img/f2/boom.gif'),
      require('../img/f2/girl.png'),
      require('../img/f2/talk.png'),
      require('../img/f2/bag.png'),
      require('../img/f2/bag-talk.png'),
      require('../img/f2/bk-down.png'),
      require('../img/f2/button.gif'),
      require('../img/f2/suitcase.png'),
      require('../img/f2/suitcase-talk.png'),
      require('../img/f3/background.jpg'),
      require('../img/f3/button.png'),
      require('../img/f3/hongbao.gif'),
      require('../img/f3/hongbao2.png'),
      require('../img/f3/paizi.png'),
      require('../img/f3/talk.png'),
      require('../img/f4/background.jpg'),
      require('../img/f4/girl-fall.png'),
      require('../img/f4/girl-jump.png'),
      require('../img/f4/girl-sleep.png'),
      require('../img/f4/light.png'),
      require('../img/f4/talk.png'),
      require('../img/f4/wave-down.png'),
      require('../img/f4/wave-left.png'),
      require('../img/f4/wave-right.png'),
      require('../img/f4/f5-sky.jpg'),
      require('../img/f5/background.jpg'),
      require('../img/f5/talk.png'),
      require('../img/f5/beizi.jpg'),
      require('../img/f6/background.jpg'),
      require('../img/f6/bill.png'),
      require('../img/f6/hand.png'),
      require('../img/f6/shell.gif'),
      require('../img/f6/shell2.png'),
      require('../img/f6/talk.png'),
      require('../img/f7/background.jpg'),
      require('../img/f7/bill.png'),
      require('../img/f7/case.png'),
      require('../img/f7/coin.png'),
      require('../img/f7/light.png'),
      require('../img/f9/background.jpg'),
      require('../img/f9/button.gif'),
      require('../img/f9/hongbao.jpg'),
      require('../img/f9/msg.png'),
      require('../img/f9/wave.png'),
      require('../img/f10/background.jpg'),
      require('../img/f10/coin.png'),
      require('../img/f10/talk.png'),
      require('../img/f11/background.jpg'),
      require('../img/f11/background1.jpg'),
      require('../img/f11/msg.gif'),
      require('../img/f11/word.png'),
      require('../img/f11/word1.png'),
      require('../img/f12/background.jpg'),
      require('../img/f13/background.jpg'),
      require('../img/f13/banner.png'),
      require('../img/f13/button1.png'),
      require('../img/f13/button2.png')
    ],
    onProgress(current, total) {
      const percent = parseInt(current / total * 100);
      console.log('percent', percent);
      $('.page-load__content__number').text(percent + '%');
    },
    onComplete() {
      console.log('loading complete');
      $('.page-load').fadeOut(100, start);
    }
  });
  queue.start();
}

function start() {
  // 页面容器元素
  const $pageA = $('.page-a');
  const $pageB = $('.page-b');
  const $pageC = $('.page-c');
  const $pageD = $('.page-d');
  const $pageE = $('.page-e');
  const $pageF = $('.page-f');
  const $pageG = $('.page-g');
  const $pageH = $('.page-h');
  const $pageI = $('.page-i');
  const $pageJ = $('.page-j');
  const $pageK = $('.page-k');
  const $pageL = $('.page-l');

  const pageA = new PageA($pageA);
  let pageB, pageC, pageD, pageE,
    pageF, pageG, pageH, pageI, pageJ;

  pageA.run()
    .then(() => {
      pageB = new PageB($pageB);
      return changePageScale(pageA, pageB, { x: '70%', y: '23%' });
    })
    .then(() => {
      return pageB.run();
    })
    .then(() => {
      pageC = new PageC($pageC);
      return changePageScale(pageB, pageC, { x: '82%', y: '33%' });
    })
    .then(() => pageB.hideTalk())
    .then(() => pageC.run())
    .then(() => changePageScale(pageC, pageB, { x: '50%', y: '30%' }))
    .then(() => pageB.showSuitcase())
    .then(() => pageC.showCase())
    .then(() => changePageScale(pageB, pageC, { x: '82%', y: '33%' }))
    .then(() => pageC.bindClickEvent())
    .then(() => {
      pageD = new PageD($pageD);
      return changePageScale(pageC, pageD, { x: '50%', y: '70%' });
    })
    .then(() => {
      return pageD.run();
    })
    .then(() => {
      pageE = new PageE($pageE);
      return pageE.run();
    })
    .then(() => {
      pageF = new PageF($pageF);
      return pageF.run();
    })
    .then(() => {
      // pageD.$root.hide();
      // pageE.$root.hide();
      pageF.$root
        .css({ transition: 'all 1s ease-in-out' })
        .css({ transform: 'translateY(100%)' })
        .one('transitionend', () => pageF.$root.hide());
      pageG = new PageG($pageG);
      return moveLine(pageG.$root, 'bottom');
    })
    .then(() => pageG.run())
    .then(() => {
      pageH = new PageH($pageH);
      return moveLine(pageH.$root, 'left');
    })
    .then(() => pageH.run())
    .then(() => {
      pageI = new PageI($pageI);
      pageH.$root.fadeOut(1000);
      pageI.$root.fadeIn(800);
      return pageI.run();
    })
    .then(() => {
      pageJ = new PageJ($pageJ);
      return changePageScale(pageI, pageJ, { x: '65%', y: '65%' });
    })
    .then(() => {
      pageI.$root.hide();
      return pageJ.run();
    })
    .then(() => {
      return new Promise(resolve => {
        pageJ.$root.fadeOut(300);
        $pageK
          .fadeIn(500)
          .css({ transition: 'all 1s ease-in-out'})
          .css({ backgroundSize: '100%' })
          .one('transitionend', () => setTimeout(resolve, 2000));
      });
    })
    .then(() => {
      changePageScale({ $root: $pageK }, { $root: $pageL }, { x: '63%', y: '45%' });
    });
}

function changePageScale(from, to, {x, y}) {
  return new Promise(resolve => {
    from.$root
      .show()
      .css({ transformOrigin: `${x} ${y}` });
    setTimeout(() => {
      from.$root
        .addClass('ani-scale')
        .one('animationend webkitAnimationEnd', () => {
          from.$root
            .removeClass('ani-scale')
            .hide();
        });
      to.$root.fadeIn(1000, resolve);
    });
  });
}

function moveLine(element, toDir, speed = 1) {
  const transform = {
    left: 'translateX(100%)',
    right: 'translateX(-100%)',
    top: 'translateY(100%)',
    bottom: 'translateY(-100%)',
  }[toDir];
  return new Promise(resolve => {
    element
      .show()
      .css({ transform });
    setTimeout(() => {
      element
        .css({ transition: `all ${speed}s ease-in-out` })
        .css({ transform: 'translate(0)' })
        .one('transitionend', resolve);
    });
  });
}

export default {
  loadManifest
};