// const loader = document.querySelector('.bike-container')
 
// window.addEventListener("load" , function(){
//     loader.style.display = "none";
// })

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navlinks');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active');
});