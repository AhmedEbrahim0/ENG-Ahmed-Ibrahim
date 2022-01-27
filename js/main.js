var lines=document.querySelector(".lines");
var menu=document.querySelector(".header-left");
var width=screen.width;
if(width<=767){
    menu.classList.add("menu-hide-show")
}
console.log(width);
lines.addEventListener("click",function(){
    menu.classList.toggle("menu-hide-show")
});


  AOS.init({
    duration: 1000,
  });

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('<span class="c-b">A</span>hmed <span class="c-b">E</span>brahim ')
  .pauseFor(300)
  .deleteAll()
  .typeString('<strong> <span class="c-b"> Web</span>   Developer   </strong> ')
  .deleteAll()
  .typeString('<strong> <span class="c-b">Full stack</span> <span> Developer </span>  </strong> ')
  .pauseFor(1000)
  .deleteAll()
  .start();

  var links=document.querySelectorAll(".links-nav");
  Array.from(links).forEach(link=>{
      link.addEventListener("click",()=>{
          var data=link.getAttribute("data");
          var Section=document.getElementById(data);
          console.log(Section);
          Section.scrollIntoView({
              behavior:"smooth",
              block:"center"
          });
          Array.from(links).forEach(el=>{
            el.classList.remove("active")
          })
          link.classList.add("active")
      })
  })

  var btnUp=document.querySelector(".btn-up");
  btnUp.style.display="none"
  window.addEventListener("scroll",function(){
      
      if(window.scrollY>200)
          btnUp.style.display="block";
              else
                  btnUp.style.display="none"
  })
  btnUp.addEventListener("click",function(){
      document.documentElement.scrollTop=0;
  })

  
  var AboutName=document.querySelector(".about-name")
if(screen.width<=767){
AboutName.classList.add("text-center")
document.body.classList.remove("body-p")
}
else{
AboutName.classList.remove("text-center")
document.body.classList.add("body-p")
} 

let nav=document.querySelector(".menu-moble");
let lastHeight=0;
window.addEventListener("scroll",function(){
  if(lastHeight<window.scrollY){
      nav.classList.add("nav-hidden")
  }else{
      nav.classList.remove("nav-hidden")
  }
  lastHeight=window.scrollY
})