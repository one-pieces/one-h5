function PageB (element, callback) {
  // 根元素
  this.$root = element;

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

PageB.prototype.showMessage = function() {
  return new Promise((resolve) => {
    this.$talk.fadeIn(1000, () => {
      this.$bkDown.fadeIn(1500, () => {
        this.$bkDownButton.on('click', resolve);
      });
    });
  });
};

PageB.prototype.showSuitcase = function() {
  return new Promise((resolve) => {
    this.$bag.fadeOut(1000);

    this.$suitcase.fadeIn(1000);
    this.$suitcaseTalk.fadeIn(1000);
    this.$suitcaseTip
      .css({ transition: 'all 1s ease-in-out 2s' })
      .css({ opacity: 0 })
      .css({ transform: 'translateY(-300%)' })
      .one('transitionend', resolve);
  });
};

PageB.prototype.hideTalk = function() {
  return new Promise(resolve => {
    this.$talk.hide();
    resolve();
  });
};

PageB.prototype.run = function() {
  return this.showMessage().then(() => {
    return new Promise((resolve) => {
      this.$bkDown
        .css({ bottom: 0, transition: 'bottom 1s ease-in-out'})
        .css({ bottom: '-100%' });
      this.$bag.fadeIn(1000);
      this.$bagTalk.fadeIn(1000);
      this.$bagTip
        .css({ transition: 'all 1s ease-in-out 2s' })
        .css({ opacity: 0 })
        .css({ transform: 'translateY(-300%)' })
        .one('transitionend', resolve);
    });
  });
};

export default PageB;
