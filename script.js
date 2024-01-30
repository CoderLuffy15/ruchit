$(".agree").click(function(){
    var music = new Audio("sounds/music.mp3");
    music.play();
    $(".main-title").animate({opacity:'0'}, "slow");
    $(".agree").animate({opacity:'0'}, "slow");
    $("#scroll").css("display","contents");
    $(".slideshow-container").css("display","contents");
})

let slideIndex = 0;
      showSlides();

      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
      }