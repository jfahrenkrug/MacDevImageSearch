ImageSearch.GoogleImageDataSource = SC.DataSource.extend(
/** @scope ImageSearch.GoogleImageDataSource.prototype */ {
  fetch: function(store, query, params) {
    SC.Request.getUrl('ajax/services/search/images?v=1.0&rsz=large&imgtype=photo&q='+query.query).json()
      .notify(this, 'didFetchImages', store, query)
      .send();
    return YES;
  },

  didFetchImages: function(response, store, query) {
    var data;
    if (SC.ok(response)) {
      data = response.get('body').responseData.results;

      var storeKeys = store.loadRecords(ImageSearch.GoogleImage, data);
      store.loadQueryResults(query, storeKeys);

      store.dataSourceDidFetchQuery(query);
    } 
    else store.dataSourceDidErrorQuery(query, response);
  }  
}) ;
