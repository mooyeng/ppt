$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 10) {
    $(".navbar").addClass("nav-scroll");
    $(".back_to_top").addClass("show_btn");
  } else {
    $(".navbar").removeClass("nav-scroll");
    $(".back_to_top").removeClass("show_btn");
  }
});

$(function () {

  let totaTime = 1500;
  let min = 0;
  let sec = 0;
  let counter = 0;

  let timer = setInterval(function () {
    counter++;
    min = Math.floor((totaTime - counter) / 60);
    sec = totaTime - (min * 60) - counter;

    let formatted_sec = sec < 10 ? `0${sec}` : `${sec}`;
    let formatted_min = min < 10 ? `0${min}` : `${min}`;

    $(".timerBox span").text(formatted_min + ":" + formatted_sec);

    if (counter == totaTime) {
      clearInterval(timer);
     // openPopUp();
    
    }

  }, 1000);


});





















