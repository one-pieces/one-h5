function PageJ (element, callback) {
  // 根元素
  this.$root = element;

  this.$background1 = element.find('.page-j__background1');
  this.$msg = element.find('.page-j__msg');
  this.$word = element.find('.page-j__word');
  this.$word1 = element.find('.page-j__word1');
  this.$hotalLogo = element.find('.page-j__hotal-logo');

  this.callback = callback;
}

PageJ.prototype.changeBG = function() {
  return new Promise(resolve => {
    this.$background1.show();
    this.$word.fadeIn(800, resolve);
  });
};

PageJ.prototype.showMsg = function() {
  return new Promise(resolve => {
    this.$msg.fadeIn(500).on('click', () => {
      this.$msg.fadeOut(500);
      this.$word.fadeOut(500);
      this.$hotalLogo.fadeIn(500);
      this.$word1.fadeIn(500, () => setTimeout(resolve, 2000));
    });
  });
};

PageJ.prototype.run = function() {
  return this.changeBG()
    .then(() => this.showMsg());
};

export default PageJ;
