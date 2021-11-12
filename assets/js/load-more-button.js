$(document).ready (function () {
    $(".blogBox").slice(0, 6).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".blogBox:hidden").slice(0, 6).slideDown();
      if ($(".blogBox:hidden").length == 0) {
        $("#loadMore").text("").addClass("noContent");
      }
    });
    })

    $(document).ready (function () {
        $(".Box2").slice(0, 5).show();
        $("#loadMore2").on("click", function(e){
          e.preventDefault();
          $(".Box2:hidden").slice(0, 6).slideDown();
          if ($(".Box2:hidden").length == 0) {
            $("#loadMore2").text("").addClass("noContent");
          }
        });
        })