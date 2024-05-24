const menuElement = document.querySelector('.menu');
const closeElement = document.querySelector('.close');
const mobileNavElement = document.querySelector('.mobile-nav');

menuElement.addEventListener('click', () => {
    mobileNavElement.classList.toggle('active');
});

closeElement.addEventListener('click', () => {
    mobileNavElement.classList.toggle('active');
});