const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){

  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.Tentang__img',{}); 
sr.reveal('.Tentang__subtitle',{delay: 400}); 
sr.reveal('.Tentang__text',{delay: 400}); 

sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

sr.reveal('.Pekerjaan__img',{interval: 200}); 
