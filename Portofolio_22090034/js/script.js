const navbar = document.querySelector('.navbar-wrapper');
const togglenavbar = document.querySelector('.icon-navbar');

togglenavbar.addEventListener('click', function(){
  navbar.classList.toggle('navbar-toggle')
  navbar.classList.toggle('navbar-wrapper')
});
function checkScreenSize() {  
  // Mengecek ukuran layar saat ini
  if (window.matchMedia("(max-width: 850px)")) {
    if(navbar.classList.contains('navbar-toggle')){
      navbar.classList.remove('navbar-toggle');
      navbar.classList.add('navbar-wrapper');
    }
    if(!(navbar.classList.contains('navbar-wrapper'))){
      navbar.classList.add('navbar-wrapper')
    }
  }
}
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);



