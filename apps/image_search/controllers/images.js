ImageSearch.imagesController = SC.ArrayController.create(
/** @scope ImageSearch.imagesController.prototype */ {
  searchTerm: null,
  
  performSearch: function() {
    var imageQuery = SC.Query.remote(ImageSearch.GoogleImage, {query: this.get('searchTerm')});
    var images = ImageSearch.store.find(imageQuery);
    ImageSearch.imagesController.set('content', images);
  }
}) ;