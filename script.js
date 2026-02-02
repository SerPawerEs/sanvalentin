const img1 = document.getElementById('imagen1')
const page1 = document.getElementById('page1')
const page2 = document.getElementById('page2')
const imgtitle = document.getElementById('imgtitle')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

document.addEventListener('click', () => {
    if (img1.style.opacity != '0') {
        img1.style.animation = 'click 1s ease'
        animpage1()
        setTimeout(() => {
            img1.style.opacity = 0
        }, 900);
    }
})

function animpage1() {
    setTimeout(() => {
        page1.style.animation = 'intro 1s ease'
        page1.style.opacity = 1
        page1.style.visibility = 'visible'
        setTimeout(() => {
            imgtitle.style.animation = 'intro 1s ease'
            imgtitle.style.opacity = 1
        }, 500);
    }, 900);
}

function animpage2() {
    page1.style.animation = 'outro 1s ease'
    setTimeout(() => {
        page1.style.opacity = 0
        page2.style.animation = 'intro 1s ease'
        page2.style.opacity = 1
        page2.style.visibility = 'visible'
    }, 900);
}

function btn1press() {
    if (page1.style.visibility == 'visible') {
        page1.style.animation = 'outro 1s ease'
        window.location.href = window.location.href
    } else {
        page2.style.animation = 'outro 1s ease'
        page2.style.opacity = 0
        page2.visibility = 'hidden'
        animpage1()
    }
    console.log('prsionado')
}


function btn2press() {
    if (page1.style.visibility == 'visible') {
        animpage2()
    }
}