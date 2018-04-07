function PageF (element, callback) {
  // 根元素
  this.$root = element;

  this.$talk = element.find('.page-f__talk');
  this.$hand = element.find('.page-f__hand');
  this.$bill = element.find('.page-f__bill');
  this.$shell = element.find('.page-f__shell');
  this.$shell2 = element.find('.page-f__shell2');

  this.callback = callback;
}

PageF.prototype.showBill = function() {
  return new Promise(resolve => {
    this.$hand
      .css({ transition: 'all 1s ease-in-out'})
      .css({ transform: 'translateX(0)' })
      .one('transitionend', resolve);
  });
};

PageF.prototype.run = function() {
  return this.showBill().then(() => {
    return new Promise(resolve => {
      this.$shell2.hide();
      this.$shell.show().on('click', () => {
        this.$talk.fadeIn(500, () => setTimeout(resolve, 1000));
      });
    });
  });
};

export default PageF;
