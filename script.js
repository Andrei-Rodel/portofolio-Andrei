const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// ANIMAÇÃO REVEAL AO SCROLL
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(top < windowHeight - 80){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
