$(document).ready(function () {
  $(".grid").each(function () {
    var $grid = $(this);
    $grid.masonry({
      gutter: 10,
      horizontalOrder: true,
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      percentPosition: true,
    });
    // Relayout as images arrive so column heights stay correct.
    $grid.imagesLoaded().progress(function () {
      $grid.masonry("layout");
    });
    $grid.find("img").on("load", function () {
      $grid.masonry("layout");
    });
  });
});
