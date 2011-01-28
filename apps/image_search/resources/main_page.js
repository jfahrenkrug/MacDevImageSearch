ImageSearch.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
      childViews: 'splitView'.w(),

      splitView: SC.SplitView.design({
        layout: { left: 0, top: 0, right: 0, bottom: 0 },
        layoutDirection: SC.LAYOUT_HORIZONTAL,
        autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
        defaultThickness: 0.8,

        topLeftView: SC.View.design({
          layout: { top: 0, bottom: 0, width: 200 },
          childViews: 'textField scrollView'.w(),
          textField: SC.TextFieldView.design({
            layout: { top: 2, height: 24, left: 5, right: 5 },
            controlSize: SC.LARGE_CONTROL_SIZE,
            fontWeight: SC.BOLD_WEIGHT,
            hint: 'type your search here',
            valueBinding: 'ImageSearch.imagesController.searchTerm',
            target: "ImageSearch.imagesController",
            action: "performSearch",
            keyDown: function(evt) {
              sc_super();    	   
              if (evt.keyCode === 13) {
                ImageSearch.imagesController.performSearch(); 
                return YES;
              } else {
                return NO;
              }
          }}),
      
          scrollView: SC.ScrollView.design({
            hasHorizontalScroller: NO,
            layout: { top: 28, bottom: 0, left: 5, right: 5 },
            backgroundColor: 'white',

            contentView: SC.ListView.design({
              contentBinding: 'ImageSearch.imagesController.arrangedObjects',
              selectionBinding: 'ImageSearch.imagesController.selection',
              contentValueKey: "titleNoFormatting",
              exampleView: SC.ListItemView,
              escapeHTML: NO,
            })
          })
        }),
        topLeftMaxThickness: 250,
        dividerView: SC.SplitDividerView.design({
            layout: {}
        }),

        bottomRightView: SC.ImageView.design({
          layout: { left: 0, top: 0, right: 0, bottom: 0 },
          valueBinding: "ImageSearch.currentImageController.unescapedUrl"
        })
      })
    })

});
