let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}





let indexSliderBlockPart = 0;
showSlidesAuto();

function showSlidesAuto() {
  let sliderBlockPartEl = document.getElementsByClassName(" slider__block__part");
  let sliderBlockPartDotEl = document.getElementsByClassName("slider__block__part__dot");

  for (i = 0; i < sliderBlockPartEl.length; i++) {
    sliderBlockPartEl[i].style.display = "none";
  }
  indexSliderBlockPart++;
  if (indexSliderBlockPart > sliderBlockPartEl.length) { indexSliderBlockPart = 1 }
  sliderBlockPartEl[indexSliderBlockPart - 1].style.display = "block";
  setTimeout(showSlidesAuto, 3000);

  for (i = 0; i < sliderBlockPartDotEl.length; i++) {
    sliderBlockPartDotEl[i].className = sliderBlockPartDotEl[i].className.replace(" activeDotsIndex", "");
  }
  sliderBlockPartDotEl[indexSliderBlockPart - 1].className += " activeDotsIndex";
}







let sliderBlockPartEl = document.querySelector(".slider__block");
let sliderModalSliderEl = document.querySelector(".slider__modal__slider");
let CloseEl = document.querySelector(".close");


sliderBlockPartEl.onclick = function (event) {
  sliderModalSliderEl.style.display = "block";
}

document.querySelectorAll('.close').forEach(b => b.addEventListener
  ('click', function (e) { sliderModalSliderEl.style.display = "none" }));





let videoPlayEl = document.querySelector(".video__play");
let videoBlockEl = document.querySelector(".video__block");
let closeVideoEl = document.querySelector(".close__video");


videoPlayEl.onclick = function (event) {
  videoBlockEl.style.display = "block";
}

closeVideoEl.onclick = function (event) {
  videoBlockEl.style.display = "none";
}






// let quetionsArticleDiscriptionEl = document.querySelector(".quetions__article__discription");
// let openCloseTagEl = document.querySelector(".open__close__tag");

// // openCloseTagEl.onclick = function (event) {
// //   quetionsArticleDiscriptionEl.classList.add("activeQuetion");
// // }

// document.querySelectorAll('.open__close__tag').forEach(c => c.addEventListener('click', function (e) {
//   document.querySelectorAll('.quetions__article__discription').forEach(() =>{quetionsArticleDiscriptionEl.classList.add("activeQuetion");
//   })
// }));