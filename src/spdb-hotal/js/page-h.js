function PageH (element, callback) {
  // 根元素
  this.$root = element;

  this.$button = element.find('.page-h__button');

  this.callback = callback;
}

PageH.prototype.bindClickEvent = function() {
  return new Promise(resolve => {
    this.$button.on('click', resolve);
  })
};

export default PageH;
