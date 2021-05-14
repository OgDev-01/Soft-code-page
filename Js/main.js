$(document).ready(function () {
  let menuClicked = false;
  let iconOne = document.getElementById("icon-1");
  // let iconTwo = document.getElementById("icon-2");
  let iconThree = document.getElementById("icon-3");
  const listItems = document.getElementById("list-items");
  // const burger = document.getElementById("burger");
  // const body = document.querySelector("body");

  $("#burger").on("click", () => {
    if (!menuClicked) {
      listItems.classList.add("open");
      $(".nav-item").addClass("li-visible");
      iconOne.classList.add("rotate-1");
      // iconTwo.classList.add("second");
      iconThree.classList.add("rotate-2");
      $("body").css("overflow", "hidden");
      menuClicked = true;
    } else {
      listItems.classList.remove("open");
      $(".nav-item").removeClass("li-visible");
      iconOne.classList.remove("rotate-1");
      // iconTwo.classList.remove("second");
      iconThree.classList.remove("rotate-2");
      $("body").css("overflow", "auto");
      menuClicked = false;
    }
  });

  $(document).mousemove(function (e) {
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    $(".cursor-custom").css({
      left: e.clientX,
      top: e.clientY,
    });
  });

  $("a").mouseover(function () {
    $(".cursor-custom").addClass("hovered");
  });
  $("a").mouseleave(function () {
    $(".cursor-custom").removeClass("hovered");
  });
  $(".budget-btn-wrap li").mouseover(function () {
    $(".cursor-custom").addClass("hovered");
  });

  $(".budget-btn-wrap li").mouseleave(function () {
    $(".cursor-custom").removeClass("hovered");
  });

  $(".burger-menu").mouseover(function () {
    $(".cursor-custom").addClass("hovered");
  });

  $(".burger-menu").mouseleave(function () {
    $(".cursor-custom").removeClass("hovered");
  });

  $(".nav-icon").mouseover(function () {
    $(".cursor-custom").addClass("hovered");
  });

  $(".nav-icon").mouseleave(function () {
    $(".cursor-custom").removeClass("hovered");
  });

  // Animate move Handler
  const link = document.querySelectorAll(".nav-item");
  // const cursor = document.querySelector(".cursor");

  const animateit = function (e) {
    const span = this.querySelector(".refresh");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 15,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") span.style.transform = "";
  };

  link.forEach((b) => b.addEventListener("mousemove", animateit));
  link.forEach((b) => b.addEventListener("mouseleave", animateit));

  // var loaded = false;
});

// Active class handler
let path = window.location.href;
$(".refresh").each(function () {
  if (this.href === path) {
    $(this).addClass("active");
  } else {
    $(this).removeClass("active");
  }
});

$(".budget-btn-wrap li").each((e) => {
  $(".budget-btn-wrap li").click(() => {
    $(".budget-btn-wrap li").removeClass("selected");
    $(this).addClass("selected");
  });
  // e.preventDefault();
});
