let slideIndex = 1;
slidingImgs(slideIndex);

// Next/previous controls
function newImg(n) {
  slidingImgs(slideIndex += n);
}

// Thumbnail image controls
function presentImg(n) {
  slidingImgs(slideIndex = n);
}

function slidingImgs(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  let nextbtns = document.getElementsByClassName("nextbtn");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < nextbtns.length; i++) {
    nextbtns[i].className = nextbtns[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  nextbtns[slideIndex-1].className += " active";
}

setInterval(function() {
    newImg(1)
  }, 3000);