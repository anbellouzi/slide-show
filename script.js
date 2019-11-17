function makeSlideShow(slidesId) {
  const slides = document.getElementById(slidesId)
  const slidesInner = slides.querySelector('.slides-inner')
  const images = slidesInner.querySelectorAll('img')

  let index = 0

  setInterval(function() {
    index += 1
    if(index === images.length) {
      index = 0
    }

    slidesInner.style.transform = `translate3d(${index * -1200}px, 0, 0)`

    console.log(slidesInner)

  }, 2000)

}

// document.addEventListener('DOMContentLoaded',function(){
  makeSlideShow("slides")
// });
