const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header")

btnNavEl.addEventListener('click',function(){
  headerEl.classList.toggle("nav-open")
});

let soc = document.querySelector('.social-media')
btnNavEl.addEventListener('click',function(){
  soc.style.opacity = '0';
})

let contsec = document.querySelector(".form-cnt")
let sub = document.querySelector(".btn-submit")

sub.addEventListener('click',function(){
  contsec.innerHTML ="<h1>Thanks we will get back to you soon</h1>"  
}); 

