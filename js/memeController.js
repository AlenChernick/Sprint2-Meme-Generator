'use stirct'

let gElCanvas
let gCtx

function onInit() {
  gElCanvas = document.querySelector('.main-editor-canvas')
  gCtx = gElCanvas.getContext('2d')
  //   renderCanvas()
  renderMemes()
}

// Render memes on canvas
function renderCanvas() {
  let elImg = document.querySelector('.selected-meme')

  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    getUserTextInput()
  }
}

// Get user text input
function getUserTextInput() {
  let elUserTextInput = document.querySelector('.meme-text').value
  gCtx.font = '30px impact'
  gCtx.fillStyle = 'white'
  gCtx.strokeStyle = 'black'
  gCtx.fillText(elUserTextInput, 50, 50)
  gCtx.strokeText(elUserTextInput, 50, 50)
}
