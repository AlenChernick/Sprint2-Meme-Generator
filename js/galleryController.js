'use strict'

function renderGalleryImgs() {
  const imgsIdx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  const elSelectedMeme = document.querySelector('.selected-meme')
  const elImgGallery = document.querySelector('.meme-gallery')
  const elSearch = document.querySelector('.search-input')
  const elCanvasContainer = document.querySelector('.canvas-container')
  imgsIdx.forEach((imgIdx) => {
    const elImage = document.createElement('img')
    elImage.src = `img/${imgIdx}.jpg`
    elImage.classList.add('meme-img')
    elImage.addEventListener('click', () => {
      // enter the meme creator and show the clicked img
      elSelectedMeme.src = `img/${imgIdx}.jpg`
      renderCanvas()
      elImgGallery.style.display = 'none'
      elSearch.style.display = 'none'
      elCanvasContainer.style.display = 'block'
      elSelectedMeme.style.display = 'none'
    })
    elImgGallery.appendChild(elImage)
  })
}
