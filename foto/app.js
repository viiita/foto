const grayscale = document.querySelector('#grayscale')
const contrast = document.querySelector('#contrast')
const brightness = document.querySelector('#brightness')
const sepia = document.querySelector('#sepia')
const saturate = document.querySelector('#saturate')
const img = document.querySelector('#image')
const reset = document.querySelector('#reset')
const imgUrl = document.querySelector('#img-url')

const defaults = {
    grayscale:0,
    contrast:100,
    brightness:100,
    sepia:0,
    saturate:100,
}

grayscale.addEventListener('input', updateFinterValue)
contrast.addEventListener('input', updateFinterValue)
brightness.addEventListener('input', updateFinterValue)
sepia.addEventListener('input', updateFinterValue)
saturate.addEventListener('input', updateFinterValue)

reset.addEventListener('click', resetFilterValue)

imgUrl.addEventListener('change', updateImageUrl)

function updateFinterValue() {
    reset.disabled = false
   img.style.filter = `
   grayscale(${grayscale.value}%)
   contrast(${contrast.value}%)
   brightness(${brightness.value}%)
   sepia(${sepia.value}%)
   saturate(${saturate.value}%)
   `
}

function resetFilterValue() {
    console.log('click')

    img.style.filter = `
    grayscale(${defaults.grayscale}%)
    contrast(${defaults.contrast}%)
    brightness(${defaults.brightness}%)
    sepia(${defaults.sepia}%)
    saturate(${defaults.saturate}%)
    `

    grayscale.value = defaults.grayscale
    contrast.value = defaults.contrast
    brightness.value = defaults.brightness
    sepia.value = defaults.sepia
    saturate.value = defaults.saturate

    reset.disabled = true
}

function updateImageUrl() {
    const imageUrl=imgUrl.value
    img.setAttribute('src', imageUrl)
}

