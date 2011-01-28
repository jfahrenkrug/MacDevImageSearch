ImageSearch.currentImageController = SC.ObjectController.create(
/** @scope ImageSearch.currentImageController.prototype */ {
  contentBinding: SC.Binding.single('ImageSearch.imagesController.selection')
}) ;