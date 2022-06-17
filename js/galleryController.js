'use strict'


// render all imgs and enter the meme creator and show the clicked img
function renderGalleryImgs() {
  const imgsIdx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  const elMenu = document.querySelector('.menu-open')
  const elGallery = document.querySelector('.gallery-container')
  const elMemeEditor = document.querySelector('.meme-editor-container')
  const elSelectedMeme = document.querySelector('.selected-meme')
  const elImgGallery = document.querySelector('.meme-gallery')
  const elCanvasContainer = document.querySelector('.canvas-container')
  const elFilterSearch = document.querySelector('.filter-by-search-by')
  imgsIdx.forEach((imgIdx) => {
    const elImage = document.createElement('img')
    elImage.src = `img/${imgIdx}.jpg`
    elImage.classList.add('meme-img')
    elImage.addEventListener('click', () => {
      // enter the meme creator and show the clicked img
      elSelectedMeme.src = `img/${imgIdx}.jpg`
      renderCanvas()
      elImgGallery.style.display = 'none'
      elCanvasContainer.style.display = 'flex'
      elSelectedMeme.style.display = 'none'
      elGallery.style.backgroundColor = 'transparent'
      elMemeEditor.style.display = 'flex'
      elFilterSearch.style.display = 'none'
      elGallery.style.padding = '1rem'
    })
    elImgGallery.appendChild(elImage)
  })
}

// Toggle Menu
function onToggleMenu() {
  document.body.classList.toggle('menu-open')
}
