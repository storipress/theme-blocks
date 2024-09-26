export default {
  directives: {
    lazyload: {
      inserted: (el) => {
        function loadImage() {
          const imageElement = Array.from(el.children).find((el) => el.nodeName === 'IMG')
          if (imageElement) {
            imageElement.addEventListener('load', () => {
              el.classList.add('loaded')
            })
            imageElement.src = imageElement.dataset.src
            imageElement.alt = imageElement.dataset.alt
          }
        }
        function handleIntersect(entries, observer) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage()
              observer.unobserve(el)
            }
          })
        }
        function createObserver() {
          const options = {
            root: null,
            threshold: '0',
          }
          const observer = new IntersectionObserver(handleIntersect, options)
          observer.observe(el) // target element to watch
        }
        if (!window.IntersectionObserver) {
          loadImage()
        } else {
          createObserver()
        }
      },
    },
  },
}
