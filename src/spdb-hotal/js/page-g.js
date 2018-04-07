function PageG (element, callback) {
  // 根元素
  this.$root = element;

  this.$talk = element.find('.page-g__talk');
  this.$hand = element.find('.page-g__hand');
  this.$bill = element.find('.page-g__bill');
  this.$billDetail = element.find('.page-g__bill-detail');
  this.$billDiscount = element.find('.page-g__bill-discount');
  this.$case = element.find('.page-g__case');
  this.$coin = element.find('.page-g__coin');
  this.$light = element.find('.page-g__light');

  this.callback = callback;
}

PageG.prototype.showCoin = function() {
  return new Promise(resolve => {
    this.$light.fadeIn(500);
    this.$coin.fadeIn(500, resolve);
  });
};

PageG.prototype.showCase = function() {
  return new Promise(resolve => {
    this.$hand
      .css({ transition: 'all 1.5s ease-in-out'})
      .css({ top: '48%' });
    this.$case
      .css({ transition: 'all 1.5s ease-in-out'})
      .css({ top: '25%' })
      .one('transitionend', resolve);
  });
};

PageG.prototype.changeBill = function(from, to) {
  return new Promise(resolve => {
    from.fadeOut(500);
    to.fadeIn(500, resolve);
  });
};

PageG.prototype.run = function() {
  return this.changeBill(this.$bill, this.$billDetail)
    .then(() => this.showCase())
    .then(() => this.showCoin())
    .then(() => this.changeBill(this.$billDetail, this.$billDiscount))
    .then(() => new Promise(resolve => setTimeout(resolve, 1000)));
};

export default PageG;
