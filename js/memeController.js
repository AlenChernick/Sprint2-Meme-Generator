'use stirct'

let gElCanvas
let gCtx

function onInit() {
  gElCanvas = document.querySelector('.main-editor-canvas')
  gCtx = gElCanvas.getContext('2d')
  renderMemesImgs()
}

// Render memes on canvas
function renderCanvas() {
  renderImgOnCanvas()
  getUserTextInput()
}

// Get user text input
function getUserTextInput() {
  let elUserTextInput = document.querySelector('.meme-text').value
  gCtx.font = '30px impact'
  gCtx.fillStyle = 'white'
  gCtx.strokeStyle = 'black'
  gCtx.fillText(elUserTextInput, 150, 50)
  gCtx.strokeText(elUserTextInput, 150, 50)
}

// render img on canvas
function renderImgOnCanvas() {
  let elImg = document.querySelector('.selected-meme')
  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
  }
}
