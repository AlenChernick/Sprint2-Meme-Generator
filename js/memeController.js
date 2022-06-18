'use stirct'

// Global variables
let gStartPos


function onInit() {
  renderGalleryImgs()
  renderStickers()
}

// render img on canvas
function renderImgOnCanvas() {
  let elImg = document.querySelector('.selected-meme')
  gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

// Render memes on canvas
function renderCanvas() {
  const meme = getMeme()
  renderImgOnCanvas()
  drawText(meme.lines)
}

// Render Stickers to the stickers container
function renderStickers() {
  const stickers = getStickers()
  const strHtml = stickers.map((sticker) => `<span onclick="onAddLine('${sticker}')">${sticker}</span>`)
  document.querySelector('.stickers-container').innerHTML = strHtml.join('')
  // console.log(document.querySelector('.stickers-container'));
}

// Get user text input
function onUpdateTxt(elValue) {
  getText(elValue)
  renderCanvas()
}


// Change Text Color By User

function onChangeColor(elColor) {
  getColor(elColor)
  renderCanvas()
}

// Change Font Size By User

function onChangeFontSize(plusOrMinus) {
  changeFontSize(plusOrMinus)
  renderCanvas()
}

// Move Line By User

function onMoveLine(plusOrMinus) {
  moveLine(plusOrMinus)
  renderCanvas()
}

// Add new line txt

function onAddLine(text = '') {
  if (text) addLine(text)
  else addLine()
  renderCanvas()
}


// Add remove line txt

function onRemoveLine() {
  removeLine()
  renderCanvas()
}


// Align text left

function onAlignTxtLeft() {
  alignTxtLeft()
  renderCanvas()
}

// Align text right

function onAlignTxtRight() {
  alignTxtRight()
  renderCanvas()
}


// Align text Center

function onAlignTxtCenter() {
  alignTxtCenter()
  renderCanvas()
}

// Switch bettwen text lines

function onSwitchLine() {
  switchLines()
  renderCanvas()
}

// change font type

function onChangeFont(font) {
  changeFont(font)
  renderCanvas()
}


// Get Back to homepage //Gallery
function onReturnToGallery() {
  const elImgGallery = document.querySelector('.meme-gallery')
  const elMemeEditor = document.querySelector('.meme-editor-container')
  const elFilterSearch = document.querySelector('.filter-by-search-by')
  const elGallery = document.querySelector('.gallery-container')
  elImgGallery.style.display = 'grid'
  elMemeEditor.style.display = 'none'
  elFilterSearch.style.display = 'flex'
  elGallery.style.backgroundColor = '#383b42'
}





