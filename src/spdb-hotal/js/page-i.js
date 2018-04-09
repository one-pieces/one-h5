function PageI (element, callback) {
  // 根元素
  this.$root = element;

  this.$coin = element.find('.page-i__coin');

  this.callback = callback;
}

PageI.prototype.run = function() {
  return new Promise(resolve => {
    this.$coin.show();
    setTimeout(() => {
      this.$coin
        .css({ transition: 'all 1.5s ease-in-out'})
        .css({ top: '70%' })
        .one('transitionend', () => setTimeout(resolve, 2000));
    });
  })
};

export default PageI;
