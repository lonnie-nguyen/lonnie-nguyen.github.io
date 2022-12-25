// add navbarDark class to show a dark background color during scrolling
const header = document.querySelector('.navbar')

window.onscroll = () => {
    let top = window.scrollY
    top >= 100 ? header.classList.add('navbarDark') : header.classList.remove('navbarDark')
}