function PageB (element, callback) {
  // 根元素
  this.$root = element;

  this.$boom = element.find('.page-b__boom');
  this.$girl = element.find('.page-b__girl');
  this.$talk = element.find('.page-b__talk');
  this.$bkDown = element.find('.page-b__bk-down');
  this.$bkDownButton = element.find('.page-b__bk-down-button');
  this.$bag = element.find('.page-b__bag');
  this.$bagTalk = element.find('.page-b__bag-talk');
  this.$bagTip = element.find('.page-b__bag-tip');
  this.$suitcase = element.find('.page-b__suitcase');
  this.$suitcaseTalk = element.find('.page-b__suitcase-talk');
  this.$suitcaseTip = element.find('.page-b__suitcase-tip');

  this.callback = callback;
  // this.run();
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

// PageB.prototype.girlWalk = function() {
//   return moveLine(this.$girl, 'right', 1.5);
// };

PageB.prototype.showGirl = function() {
  return new Promise(resolve => {
    this.$girl
      .show()
      .addClass('animated flash')
      .on('animationend webkitAnimationEnd', () => {
        this.$girl.removeClass('animated flash');
        setTimeout(resolve, 500);
      });
  });
};

PageB.prototype.showMessage = function() {
  return new Promise((resolve) => {
    this.$talk
      .show()
      .addClass('animated pulse')
      .one('animationend webkitAnimationEnd', () => {
        moveLine(this.$bkDown, 'top').then(() => {
          this.$bkDownButton.on('click', resolve);
        })
      });
  });
};

PageB.prototype.showSuitcase = function() {
  return new Promise((resolve) => {
    this.$boom.fadeIn(800, () => {
      this.$boom
        .css({ transition: 'all .3s ease-in-out' })
        .css({ transform: 'scale(5)' })
        .one('transitionend', () => {
          this.$bag.hide();
          this.$boom.fadeOut(300);
          // this.$suitcase.fadeIn(500);
          // this.$suitcaseTalk.fadeIn(500);
          // this.$suitcaseTip
          //   .css({ transition: 'all 2s ease-in-out 2s' })
          //   .css({ opacity: 0 })
          //   .css({ transform: 'translateY(-300%)' })
          //   .one('transitionend', resolve);
        });
      this.$suitcase.fadeIn(1000);
      this.$suitcaseTalk.fadeIn(1000);
      this.$suitcaseTip
        .css({ transition: 'all 2s ease-in-out 2s' })
        .css({ opacity: 0 })
        .css({ transform: 'translateY(-300%)' })
        .one('transitionend', resolve);
    });
  });
};

PageB.prototype.hideTalk = function() {
  return new Promise(resolve => {
    this.$talk.hide();
    this.$bagTalk.hide();
    resolve();
  });
};

PageB.prototype.run = function() {
  // return this.showGirl()
  return this.showMessage()
    .then(() => {
      return new Promise((resolve) => {
        this.$bkDown
          .css({ bottom: 0, transition: 'bottom 1s ease-in-out'})
          .css({ bottom: '-100%' });
        this.$bag.fadeIn(1000);
        this.$bagTalk.fadeIn(1000);
        this.$bagTip
          .css({ transition: 'all 2s ease-in-out 2s' })
          .css({ opacity: 0 })
          .css({ transform: 'translateY(-300%)' })
          .one('transitionend', resolve);
      });
    });
};

export default PageB;
