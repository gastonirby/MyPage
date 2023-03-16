const title = document.querySelector('h1')
const btn = document.querySelectorAll('a')

window.addEventListener('load', loader)

function loader () {
  const TLLOAD = gsap.timeline({
    default: {
      ease: 'power2'
    }
  })

  TLLOAD.to('.images-container', { height: 400, duration: 1.3, delay: 0.4 })
    // .to('.bloc-txt', {height: 'auto', duration: 0.6}, '-=0.8')
    // .to('.bloc-txt h2', {y: 0, duration: 0.6}, '-=0.6 ')
    .to('.f2', { y: 0, duration: 0.6 })
    .to('.flip-img1', { display: 'none', duration: 0 })
    .to('.f2', { y: '-100%', duration: 0.6 })
    .to('.load-container', { autoAlpha: 0, duration: 0.8, delay: 1 })
    .from('.name', { autoAlpha: 0, y: -500, duration: 5, ease: 'power4', 
    }, '-=1')
    .from('.aboutme', {
      duration: 1.5,
      autoAlpha: 0,
      y: 200,
      scale: 1,
      scrollTrigger: {
        trigger: '.aboutme',
        start: 'top 75%',
        end: 'bottom 70%',
        scrub: 5
      }
    })
    .from('.projects', {
        duration: 1.5,
        autoAlpha: 0,
        y: 200,
        scale: 1,
        scrollTrigger: {
          trigger: '.projects',
          start: 'top 90%',
          end: 'bottom 80%',
          scrub: 5
        }
    })
} 

gsap.from('.card', { autoAlpha: 0, scale: 1.5, duration: 3 })