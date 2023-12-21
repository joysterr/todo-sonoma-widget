const imgs = ['clouds', 'meadow', 'shrine']

function changeBg() {
    let imgIndex = localStorage.getItem('bgIndex')
    if (imgIndex >= imgs.length-1) {
        localStorage.setItem('bgIndex', 0)
        setBg(0)
    } else {
        imgIndex++
        setBg(imgIndex)
        localStorage.setItem('bgIndex', imgIndex)
        console.log(imgIndex)
    }
}

function setBg(imgIndex) {
    const body = document.querySelector('body')
    body.style.background = `url(./assets/${imgs[imgIndex]}.webp) center`
    body.style.backgroundRepeat = 'no-repeat'
    body.style.backgroundSize = 'cover'
}

function initBg() {
    if (!localStorage.getItem('bgIndex') || localStorage.getItem('bgIndex') >= imgs.length) {
        localStorage.setItem('bgIndex', 0)
    } else {
        setBg(localStorage.getItem('bgIndex'))
    }
}

initBg()