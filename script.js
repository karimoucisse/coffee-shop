const navBar = document.querySelector('.navbar')
const carttem = document.querySelector('.cart-items-container') 
const searchForm = document.querySelector('.search-form')

document.querySelector('#menu-btn').onclick = () => {
    navBar.classList.toggle('active');
    carttem.classList.remove('active');
    searchForm.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
    carttem.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');
    carttem.classList.remove('active');
}

window.onscroll = () => {
    navBar.classList.remove('active');
    carttem.classList.remove('active');
    searchForm.classList.remove('active');
}