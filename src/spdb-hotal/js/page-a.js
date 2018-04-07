function PageA (element, callback) {
  // 根元素
  this.$root = element;

  this.$talk = element.find('.page-a__talk');
  this.$button = element.find('.page-a__button');

  this.callback = callback;
  // this.run();
}

PageA.prototype.showMessage = function() {
  return new Promise((resolve) => {
    this.$talk.fadeIn(2000, resolve);
  });
};

PageA.prototype.run = function() {
  return this.showMessage().then(() => {
    return new Promise((resolve) => {
      this.$button.on('click', resolve);
    });
  });
};

export default PageA;
