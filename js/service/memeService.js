'use strict'

const gElCanvas = document.querySelector('.main-editor-canvas')
const gCtx = gElCanvas.getContext('2d')

const gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'Enter Meme Text',
      size: 35,
      align: 'left',
      color: 'white',
      font: 'Impact',
      x: 150,
      y: 50,
    },
  ],
}

function drawText(userTxt) {
  gCtx.lineWidth = 2
  gCtx.font = `${userTxt.size}px ${userTxt.font}`
  gCtx.fillStyle = userTxt.color
  gCtx.strokeStyle = 'black'
  gCtx.fillText(userTxt.txt, userTxt.x, userTxt.y)
  gCtx.strokeText(userTxt.txt, userTxt.x, userTxt.y)
}

function getText(text) {
  gMeme.lines[0].txt = text
}

function getColor(color) {
  gMeme.lines[0].color = color
}

function changeFontSize(plusOrMinus) {
  gMeme.lines[0].size += 5 * plusOrMinus
}

function moveLine(plusOrMinus) {
  gMeme.lines[0].y += 5 * plusOrMinus
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function getMeme() {
  return gMeme
}
