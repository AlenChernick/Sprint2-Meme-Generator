'use strict'


// render imgs on board
function renderGalleryImgs() {
  const images = getImages()
  const strHtml = images.map((img) => `<img src="${img.url}" class="meme-img" onclick="onImgSelect(${img.id})">`)
  document.querySelector('.meme-gallery').innerHTML = strHtml.join('')
}


// when img selected enter the meme creator
function onImgSelect(imgId) {
  setImage(imgId)
  document.querySelector('.meme-editor-container').style.display = 'flex'
  document.querySelector('.meme-gallery').style.display = 'none'
  document.querySelector('.canvas-container').style.display = 'flex'
  document.querySelector('.filter-by-search-by').style.display = 'none'
  renderCanvas()
}

// Toggle Menu
function onToggleMenu() {
  document.body.classList.toggle('menu-open')
}



// Get Back to homepage //Gallery
function onReturnToGallery() {
  document.querySelector('.meme-gallery').style.display = 'grid'
  document.querySelector('.meme-editor-container').style.display = 'none'
  document.querySelector('.filter-by-search-by').style.display = 'flex'
  document.querySelector('.gallery-container').style.backgroundColor = '#383b42'
  document.querySelector('.upload-container').style.display = 'none'
  document.querySelector('.meme-text').value = ''
  initMeme()
}



// another way //
// render all imgs and enter the meme creator and show the clicked img
// function renderGalleryImgs() {
//   const imgsIdx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
//   const elGallery = document.querySelector('.gallery-container')
//   const elMemeEditor = document.querySelector('.meme-editor-container')
//   const elSelectedMeme = document.querySelector('.selected-meme')
//   const elImgGallery = document.querySelector('.meme-gallery')
//   const elCanvasContainer = document.querySelector('.canvas-container')
//   const elFilterSearch = document.querySelector('.filter-by-search-by')
//   imgsIdx.forEach((imgIdx) => {
//     const elImage = document.createElement('img')
//     elImage.src = `img/${imgIdx}.jpg`
//     elImage.classList.add('meme-img')
//     elImage.addEventListener('click', () => {
//       // enter the meme creator and show the clicked img
//       elSelectedMeme.src = `img/${imgIdx}.jpg`
//       renderCanvas()
//       elImgGallery.style.display = 'none'
//       elCanvasContainer.style.display = 'flex'
//       elSelectedMeme.style.display = 'none'
//       elMemeEditor.style.display = 'flex'
//       elFilterSearch.style.display = 'none'
//       elGallery.style.padding = '1rem'
//     })
//     elImgGallery.appendChild(elImage)
//   })
// }




