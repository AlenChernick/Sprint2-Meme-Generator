'use stirct'

// Global variables
let gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

function onInit() {
  renderGalleryImgs()
  renderStickers()
  initMeme()
  addListeners()
}


// render img on canvas
function drawImage(currImage) {
  let elImage = new Image()
  elImage.src = currImage.url
  gCtx.drawImage(elImage, 0, 0, gElCanvas.width, gElCanvas.height)
}


// Render the current clicked meme img on canvas
function renderCanvas() {
  const meme = getMeme()
  let currImage = getCurrentImg(meme.selectedImgId)
  drawImage(currImage)
  drawText(meme.lines)
  // console.log(currImage);
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
  moveText(plusOrMinus)
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


function onDown(ev) {
  //Get the ev pos from mouse or touch
  const pos = getEvPos(ev)
  const lineIdx = isTextClicked(pos)
  // console.log(lineIdx);
  if (lineIdx === -1) return
  setSelectedLine(lineIdx)
  setTextDrag(true)
  //Save the pos we start from 
  gStartPos = pos
  document.body.style.cursor = 'grabbing'
  renderCanvas()
}


function onMove(ev) {
  const line = getCurrLine()
  // console.log(line);
  if (!line.isDrag) return
  const pos = getEvPos(ev)
  //Calc the delta , the diff we moved
  const dx = pos.x - gStartPos.x
  // console.log(dx);
  const dy = pos.y - gStartPos.y
  // console.log(dy);
  // moveText(dx, dy)
  //Save the last pos , we remember where we`ve been and move accordingly
  gStartPos = pos
  line.x += dx
  line.y += dy
  document.body.style.cursor = 'grabbing'
  //The canvas is render again after every move
  renderCanvas()
}


function onUp() {
  setTextDrag(false)
  document.body.style.cursor = 'grab'
}


function getEvPos(ev) {

  //Gets the offset pos , the default pos
  var pos = {
    x: ev.offsetX,
    y: ev.offsetY
  }
  // Check if its a touch ev
  if (gTouchEvs.includes(ev.type)) {
    //soo we will not trigger the mouse ev
    ev.preventDefault()
    //Gets the first touch point
    ev = ev.changedTouches[0]
    //Calc the right pos according to the touch screen
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
    }
  }
  return pos
}


function addMouseListeners() {
  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
  gElCanvas.addEventListener('touchmove', onMove)
  gElCanvas.addEventListener('touchstart', onDown)
  gElCanvas.addEventListener('touchend', onUp)
}

//Handle the listeners
function addListeners() {
  addMouseListeners()
  addTouchListeners()
  //Listen for resize ev 
  window.addEventListener('resize', () => {
    // resizeCanvas()
    renderCanvas()
  })
}