//Disable cut copy paste
document.oncopy = function(){alert("sorry bro!"); return false;}

document.oncut = function(){alert("cut option disabled");return false;}

document.onpaste = function(){alert("paste option disabled");return false;}


//Disable mouse right click
document.onmousedown = disableclick;

function disableclick(event) {
  if(event.button==2) {
    alert("Right Click Disabled");

    return false;
  }
}

/*—————————— Content Page ———————————*/
const container = document.querySelector('.container');

container.addEventListener("click", (e) => {
  if (e.target.className == 'btn' || e.target.className == 'rd') {
    alert("layanan belum tersedia");
  } 
  
  
  
})


/*—————————— Header Page ———————————*/
const navBar = document.querySelector(".navbar"),
      menuBtn = document.querySelector(".hamburger");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("pushed");
  navBar.classList.toggle("pushed");
});

/*—————————— Contact Page ———————————*/

function onSubmit() {
  const frm = document.getElementsByName('contact-form')[0];
  frm.submit(); // Submit the form
  frm.reset(); // Reset all form data
  return false; // Prevent page refresh
}

// —————————— Swiper.js ——————————— //
const swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
  },
});
