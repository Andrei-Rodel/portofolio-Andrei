const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.onclick = () => nav.classList.toggle("active");

const reveals = document.querySelectorAll(".reveal");
function reveal(){
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 80){
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll", reveal);
reveal();
