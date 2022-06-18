'use strict'

function onDownloadCanvas(elLink) {
    gIsDownload = true;
    renderCanvas()
    gIsDownload = false;
    //protect the image soo attacker could not download imgs from diff domain
    const data = gElCanvas.toDataURL()// for security reason you can`t do toDataUrl on tainted canvas
    //This protects users from having private data exposed by using images
    // to pull information from remote web sites without permission.
    elLink.href = data
    elLink.download = 'my-img.jpg'
}