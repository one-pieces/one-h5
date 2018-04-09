function PageI (element, callback) {
  // 根元素
  this.$root = element;

  this.$talk = element.find('.page-i__talk');
  this.$coin = element.find('.page-i__coin');

  this.callback = callback;
}

PageI.prototype.run = function() {
  this.$coin.show();
  return new Promise(resolve => {
    this.$talk.fadeIn(500, () => {
      this.$coin
        .css({ transition: 'all 1.5s ease-in-out'})
        .css({ top: '70%' })
        .one('transitionend', () => setTimeout(resolve, 2000));
    });
  })
};

export default PageI;
