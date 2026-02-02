const img1 = document.getElementById('imagen1')
const page1 = document.getElementById('page1')

document.addEventListener('click', () => {
    if (img1.style.opacity != '0') {
        img1.style.animation = 'click 1s ease'
        setTimeout(() => {
            img1.style.opacity = 0
            page1.style.animation = 'intro 1s ease'
            page1.style.opacity = 1
            page1.style.visibility = 'visible'
        }, 900);
    }
})


