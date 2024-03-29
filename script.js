
(function() {
  function init() {
    const slides = document.querySelectorAll('.ms-slide-show')
    for (let i = 0; i < slides.length; i += 1) {
      makeSlides(slides[i])
    }
  }

  function makeSlides(slides) {
    const images = Array.from(slides.querySelectorAll('.slide-show-inner > img'))
    const slidesInner = slides.querySelector('.slide-show-inner')

    let indicators = null

    if (slides.dataset.indicators) {
      indicators = makeIndicators(slides, images.length)
    }

    let index = 0
    const w = slides.clientWidth
    console.log(w)

    setInterval(() => {
      nextSlide()
    }, 3000)

    function nextSlide() {
      index += 1
      if (index === images.length) {
        index = 0
      }
      // Use translate3d() for better performance!
      slidesInner.style.transform = `translate3d(-${index * w}px, 0, 0)`
      if (indicators !== null) {
        for (let i = 0; i < indicators.length; i += 1) {
          if (i === index) {
            indicators[i].style.backgroundColor = 'rgba(255,255,255,1.0)'
          } else {
            indicators[i].style.backgroundColor = 'rgba(255,255,255,0.5)'
          }
        }
      }
    }
  }

  // _______________________________



  function makeIndicators(slides, n) {
    const el = document.createElement('div')
    el.style.display = 'flex'
    el.style.flexDirection = 'row'
    el.style.justifyContent = 'center'
    el.style.position = 'absolute'
    el.style.left = '50%'
    el.style.bottom = '0'
    el.style.transform = 'translate(-50%, 0)'
    el.style.zIndex = '999'

    const indicators = []

    for (let i = 0; i < n; i += 1) {
      const dot = document.createElement('div')
      dot.style.width = '10px'
      dot.style.height = '10px'
      dot.style.margin = '5px'
      dot.style.borderRadius = '50%'
      dot.style.backgroundColor = 'rgba(255,255,255, 0.5)'

      el.appendChild(dot)
      indicators.push(dot)
    }

    console.log(el)
    slides.appendChild(el)
    return indicators
  }

  left_button = document.getElementById('left_button')
  right_button = document.getElementById('right_button')

  if (left_button != null) {
  }

  init()
})()
