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
      require('../img/f5/background.jpg'),
      require('../img/f5/talk.png'),
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
      return changePageRightToLeft(pageB);
    })
    .then(() => {
      pageA.$root.hide();
      return pageB.run();
    })
    .then(() => {
      pageC = new PageC($pageC);
      return changePageLeftToRight(pageC)
    })
    .then(() => pageB.hideTalk())
    .then(() => pageC.run())
    .then(() => hidePageRightToLeft(pageC))
    .then(() => pageB.showSuitcase())
    .then(() => pageC.showCase())
    .then(() => changePageLeftToRight(pageC))
    .then(() => pageC.bindClickEvent())
    .then(() => {
      pageD = new PageD($pageD);
      return changePageRightToLeft(pageD);
    })
    .then(() => {
      pageB.$root.hide();
      pageC.$root.hide();
      return pageD.run();
    })
    .then(() => {
      pageE = new PageE($pageE);
      return new Promise(resolve => {
        setTimeout(() => {
          pageE.$root.fadeIn(500, () =>{
            pageE.$root.fadeOut(500, () => {
              pageE.$root.fadeIn(1000);
              pageD.$root.fadeOut(1500, () => {
                pageE.$talk.fadeIn(800);
                resolve();
              });
            });
          });
        }, 500);
      });
    })
    .then(() => pageE.run())
    .then(() => {
      pageF = new PageF($pageF);
      return changePageRightToLeft(pageF);
    })
    .then(() => pageF.run())
    .then(() => {
      new Promise(resolve => {
        pageG = new PageG($pageG);
        pageF.$root.fadeOut(800);
        pageG.$root.fadeIn(500, resolve);
      });
    })
    .then(() => pageG.run())
    .then(() => {
      pageH = new PageH($pageH);
      return changePageRightToLeft(pageH);
    })
    .then(() => pageH.bindClickEvent())
    .then(() => {
      pageI = new PageI($pageI);
      return changePageRightToLeft(pageI);
    })
    .then(() => {
      pageH.$root.hide();
      return pageI.run();
    })
    .then(() => {
      pageJ = new PageJ($pageJ);
      return changePageFade(pageI, pageJ);
    })
    .then(() => {
      pageI.$root.hide();
      return pageJ.run();
    })
    .then(() => {
      pageJ.$root.fadeOut(300);
      return new Promise(resolve => {
        $pageK
          .fadeIn(300)
          .css({ transition: 'all 1s ease-in-out'})
          .css({ backgroundSize: '100%' })
          .one('transitionend', () => setTimeout(resolve, 800));
      });
    })
    .then(() => {
      changePageFade({ $root: $pageK }, { $root: $pageL });
    });
}

// 从 left: 100% 到 left: 0 移动页面，即从屏幕右侧向左侧滑动
// 从 left: -100% 到 left: 0 移动页面，即从屏幕左侧向右侧滑动
function movePageOfLeft(page, from = '100%', to = 0) {
  return new Promise(resolve => {
    page.$root
      .css({ left: from, transition: 'left 1s ease-in-out'})
      .css({ left: to })
      .one('transitionend', resolve);
  });
}

function changePageRightToLeft(page) {
  return movePageOfLeft(page);
}

function changePageLeftToRight(page) {
  return movePageOfLeft(page, '-100%');
}

function hidePageRightToLeft(page) {
  return movePageOfLeft(page, 0, '-100%');
}

function changePageFade(from, to) {
  return new Promise(resolve => {
    to.$root.fadeIn(500, () => {
      to.$root.fadeOut(500, () => {
        to.$root.fadeIn(1000);
        from.$root.fadeOut(1500, resolve);
      });
    });
  });
}

export default {
  loadManifest
};