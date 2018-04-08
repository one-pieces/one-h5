function PageH (element, callback) {
  // 根元素
  this.$root = element;

  this.$button = element.find('.page-h__button');
  this.$wave = element.find('.page-h__wave');
  this.$msg = element.find('.page-h__msg');
  this.$hongbao = element.find('.page-h__hongbao');

  this.callback = callback;
}

PageH.prototype.run = function() {
  return new Promise(resolve => {
    // this.$msg
    //   .css({ transition: 'all .5 ease-in-out '})
    //   .css({ top: '21%' })
    //   .one('transitionend', () => {
    //     this.$hongbao
    //       .css({ transition: 'all .5 ease-in-out '})
    //       .css({ transform: 'translate(-50%, 0)' })
    //       .one('transitionend', () => {
    //         this.$wave
    //           .css({ transition: 'all .5 ease-in-out '})
    //           .css({ top: '1770px' });
    //       });
    //   });
    this.$button.on('click', () => {
      this.$wave
        .css({ transition: 'all 1s ease-in-out'})
        .css({ top: 0 })
        .one('transitionend', resolve);
    });
  })
};

export default PageH;
