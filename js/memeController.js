'use stirct'

function onInit() {
  renderGalleryImgs()
}

// render img on canvas
function renderImgOnCanvas() {
  let elImg = document.querySelector('.selected-meme')
  // console.log(elImg)
  gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

// Render memes on canvas
function renderCanvas() {
  const meme = getMeme()
  renderImgOnCanvas()
  drawText(meme.lines[0])
}

// Get user text input
function onUpdateTxt(elValue) {
  getText(elValue)
  renderCanvas()
}

function onChangeColor(elColor) {
  getColor(elColor)
  renderCanvas()
}

function onChangeFontSize(plusOrMinus) {
  changeFontSize(plusOrMinus)
  renderCanvas()
}

function onMoveLine(plusOrMinus) {
  moveLine(plusOrMinus)
  renderCanvas()
}
