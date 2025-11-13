const navMenu = document.querySelector('.nav-menu');
const burgerButton = document.querySelector('.hamburger-link');

burgerButton.addEventListener('click', (e) => {
    navMenu.classList.toggle('active')
    e.preventDefault()
})
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !burgerButton.contains(e.target)) {
        
        navMenu.classList.remove('active');
    }
})