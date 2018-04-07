function PageD (element, callback) {
  // 根元素
  this.$root = element.show().css({ left: '100%' });

  this.$girlFall = element.find('.page-d__girl-fall');
  this.$girlSleep = element.find('.page-d__girl-sleep');
  this.$girlJump = element.find('.page-d__girl-jump');
  this.$talk = element.find('.page-d__talk');
  this.$waveDown = element.find('.page-d__wave-down');
  this.$waveLeft = element.find('.page-d__wave-left');
  this.$waveRight = element.find('.page-d__wave-right');
  this.$light = element.find('.page-d__light');

  this.callback = callback;
}

PageD.prototype.girlFall = function() {
  return new Promise((resolve) => {
    this.$girlFall
      .css({ transition: 'all 1.5s ease-in-out'})
      .css({ top: '20%' })
      .css({ opacity: 0 })
      .one('transitionend', () => {
        this.$girlSleep.fadeIn(1000, () => {
          this.$talk.fadeIn(500, resolve);
        });
      });
  });
};

PageD.prototype.showWave = function($wave) {
  return new Promise((resolve) => {
    $wave
      .css({ transition: 'all .5s ease-in-out'})
      .css({ transform: 'translate(0)' })
      .one('transitionend', resolve);
  });
};

PageD.prototype.run = function() {
  this.$waveDown.show();
  this.$waveLeft.show();
  this.$waveRight.show();
  return this.girlFall()
    .then(() => this.showWave(this.$waveLeft))
    .then(() => this.showWave(this.$waveRight))
    .then(() => this.showWave(this.$waveDown))
    .then(() => {
      return new Promise((resolve) => {
        this.$girlSleep.fadeOut(800);
        this.$girlJump.fadeIn(800);
        this.$light.fadeIn(800, resolve);
      });
    });
};

export default PageD;
