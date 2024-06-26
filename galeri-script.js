window.onload = function () {
    var hangoutButton = document.getElementById("all-button");
  
    hangoutButton.click(); // this will trigger the click event
  };
  
  $(".portfolio-menu ul li").click(function () {
    $(".portfolio-menu ul li").removeClass("active");
    $(this).addClass("active");
  
    var selector = $(this).attr("data-filter");
    $(".portfolio-item").isotope({
      filter: selector,
    });
    return false;
  });
  $(document).ready(function () {
    var popup_btn = $(".popup-btn");
    popup_btn.magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });
  