function PageE (element, callback) {
  // 根元素
  this.$root = element;

  this.$talk = element.find('.page-e__talk');
  this.$beizi = element.find('.page-e__beizi');

  this.callback = callback;
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

PageE.prototype.run = function() {
  return new Promise((resolve) => {
    moveLine(this.$root, 'top', 1.5).then(() => {
      // this.$talk.fadeIn(1000, () => {
        // this.$talk
        //   .css({ transition: 'all 1.5s ease-in-out'})
        //   .css({ transform: 'scale(0.7)' });
        this.$root
          .addClass('ani-change');
        //   .one('animationend webkitAnimationEnd', resolve);
        setTimeout(() => {
          this.$root
            .css({ transition: 'all 1.5s ease-in-out'})
            .css({ backgroundSize: '100% 100%' })
            .one('transitionend', resolve);
        });
      // });
    });
  });
};

export default PageE;
