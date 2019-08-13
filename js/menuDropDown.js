const menuBtn = document.querySelector('.menu');
const menuItem = document.querySelector(".main-header nav ul");

menuBtn.addEventListener('click', ()=>{
    menuItem.style.left == '-3%' ? menuItem.style.left = '-999px' : menuItem.style.left = '-3%';
    
});