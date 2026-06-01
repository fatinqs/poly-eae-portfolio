// JavaScript Document

window.addEventListener('scroll', function() {
    const nav = document.querySelector('#header-nav');
    
    if (window.scrollY > 500) { 
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});