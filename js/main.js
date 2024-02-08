const loader = document.querySelector('.bike-container')
 
window.addEventListener("load" , function(){
    loader.style.display = "none";
})

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navlinks');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active');
});

// start fqo logic section 

const fqo_boxes = document.querySelectorAll('.fqo-box');

console.log(fqo_boxes);

fqo_boxes.forEach((fqo_box) => {
  console.log(fqo_box);
  fqo_box.addEventListener('click', () => {
    fqo_box.classList.toggle('active');
  });
});