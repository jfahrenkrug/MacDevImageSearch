ImageSearch.GoogleImage = SC.Record.extend(
/** @scope ImageSearch.GoogleImage.prototype */ {
    primaryKey: "imageId",
  
    imageId: SC.Record.attr(String),
    titleNoFormatting: SC.Record.attr(String),
    unescapedUrl: SC.Record.attr(String),
    width: SC.Record.attr(Number),
    height: SC.Record.attr(Number)
}) ;