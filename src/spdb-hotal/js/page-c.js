function PageC (element, callback) {
  // 根元素
  this.$root = element;

  this.$hongbao = element.find('.page-c__hongbao');
  this.$hongbao2 = element.find('.page-c__hongbao2');
  this.$paizi = element.find('.page-c__paizi');
  this.$talk = element.find('.page-c__talk');
  this.$button = element.find('.page-c__button');

  this.callback = callback;
}

PageC.prototype.showCase = function() {
  return new Promise((resolve) => {
    this.$hongbao2.hide();

    this.$paizi.show();
    this.$talk.show();
    this.$button.show();
    resolve();
  });
};

PageC.prototype.bindClickEvent = function() {
  return new Promise((resolve) => {
    this.$button.on('click', resolve);
  });
};

PageC.prototype.run = function() {
  return new Promise((resolve) => {
    this.$hongbao.on('click', () => {
      this.$hongbao.fadeOut(500);
      this.$hongbao2.fadeIn(1000, () => setTimeout(resolve, 1000));
    });
  });
};

export default PageC;
