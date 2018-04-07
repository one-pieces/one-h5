function PageE (element, callback) {
  // 根元素
  this.$root = element;

  this.$talk = element.find('.page-e__talk');

  this.callback = callback;
}

PageE.prototype.run = function() {
  this.$talk.fadeIn(500);
  return new Promise((resolve) => {
    setTimeout(() => {
      this.$talk
        .css({ transition: 'all 1.5s ease-in-out'})
        .css({ transform: 'scale(0.7)' });
      this.$root
        .css({ transition: 'all 1.5s ease-in-out'})
        .css({ backgroundSize: '100% 100%' })
        .one('transitionend', resolve);
    }, 1000);
  });
};

export default PageE;
