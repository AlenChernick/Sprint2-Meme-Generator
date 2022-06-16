'use strict'


// Global Canvas and context
const gElCanvas = document.querySelector('.main-editor-canvas')
const gCtx = gElCanvas.getContext('2d')

// Global meme
const gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'Enter Meme Text',
      size: 35,
      color: 'white',
      font: 'Impact',
      x: gElCanvas.width / 4,
      y: 50,
    },
  ],
}

// Draw the text
function drawText(userTxt) {
  for (let i = 0; i <= gMeme.selectedLineIdx; i++) {
    gCtx.lineWidth = 2
    gCtx.font = `${userTxt[i].size}px ${userTxt[i].font}`
    gCtx.fillStyle = userTxt[i].color
    gCtx.strokeStyle = 'black'
    gCtx.fillText(userTxt[i].txt, userTxt[i].x, userTxt[i].y)
    gCtx.strokeText(userTxt[i].txt, userTxt[i].x, userTxt[i].y)
  }
}


// Return Global Meme
function getMeme() {
  return gMeme
}


// Get meme line index
function memeIdx() {
  return gMeme.selectedLineIdx
}

// Get meme text
function getText(text) {
  gMeme.lines[memeIdx()].txt = text
}

// Get meme text Color
function getColor(color) {
  gMeme.lines[memeIdx()].color = color
}


// Get meme text font size and changes depends on user click
function changeFontSize(plusOrMinus) {
  gMeme.lines[memeIdx()].size += 5 * plusOrMinus
}

// Get meme line text and changes depends on user click
function moveLine(plusOrMinus) {
  gMeme.lines[memeIdx()].y += 5 * plusOrMinus
}

// Align meme text to left side

function alignTxtLeft() {
  gMeme.lines[memeIdx()].x = gElCanvas.width / 20
}


// Align meme text to right side
function alignTxtRight() {
  gMeme.lines[memeIdx()].x = gElCanvas.width / 2
}


// Align meme text to center
function alignTxtCenter() {
  gMeme.lines[memeIdx()].x = gElCanvas.width / 4
}


// Change font depends on user select
function changeFont(font) {
  gMeme.lines[memeIdx()].font = font
}

// Add new line text up to 3 times on bottom and on middle
function addLine() {
  if (gMeme.selectedLineIdx === 2) return
  gMeme.selectedLineIdx++
  if (gMeme.selectedLineIdx === 1) {
    gMeme.lines.push({
      txt: 'Enter Meme Text',
      size: 35,
      color: 'white',
      font: 'Impact',
      x: gElCanvas.width / 4,
      y: gElCanvas.height / 1.1,
    })
  }
  if (gMeme.selectedLineIdx === 2) {
    gMeme.lines.push({
      txt: 'Enter Meme Text',
      size: 35,
      color: 'white',
      font: 'Impact',
      x: gElCanvas.width / 4,
      y: gElCanvas.height / 2,
    })
  }

  // console.log(gMeme.selectedLineIdx)
  // console.log(gMeme.lines)
}

// Remove Text Line
function removeLine() {
  if (gMeme.selectedLineIdx === 0) return
  gMeme.selectedLineIdx--
  gMeme.lines.pop()
  // console.log(gMeme.lines)
}


// Switch text lines
function switchLines() {
  _rotateAnArrayByOne(gMeme.lines, gMeme.lines.length)
}


//Sequential for loop
function _rotateAnArrayByOne(array, arrayLength) {
  var idx = array[arrayLength - 1],
    i
  for (i = arrayLength - 1; i > 0; i--) array[i] = array[i - 1]
  array[0] = idx
  // console.log(array[0])
}

