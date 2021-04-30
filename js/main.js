const container = document.querySelector('.container')
const imageUrl = 'https://source.unsplash.com/random/'
const numImgInput = document.querySelector('.numImgInput')
const form = document.querySelector('.form')
const btnOk = document.querySelector('.btn')

createGallery()

function createGallery(numberOfImages = 6) {

    for (let i = 0; i < numberOfImages; i++) {
        const imgEl = document.createElement('img')
        imgEl.src = imageUrl + getRandomSize()
        container.appendChild(imgEl)
    }
}

// get number from 301-310
function getRandomNum() {
    return Math.floor(Math.random() * 50) + 300
}

// get random size example:301x308
function getRandomSize() {
    return `${getRandomNum()}x${getRandomNum()}`
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // reset the content of images
    container.innerHTML = ''

    let numberOfImages = numImgInput.value

    // passing value to function createGallery()
    createGallery(numberOfImages)

    // clear input
    numImgInput.value = ''
})

btnOk.addEventListener('click', (e) => {
    e.preventDefault()

    container.innerHTML = ''
    let numberOfImages = numImgInput.value
    createGallery(numberOfImages)
    numImgInput.value = ''
})