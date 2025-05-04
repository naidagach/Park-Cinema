

const dates = document.getElementById('dates')
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

for (let i = 0; i < 6; i++) {
  dates.innerHTML += `
  <div class="swiper-slide bg-[#474747] flex flex-col items-center justify-center content-center py-3 w-[60px]! ml-6 h-[100px]! rounded-[40px]">
    <p class="text-[#d9dadb] text-[16px]">${months[new Date().getMonth()]}</p>
    <p class="rounded-[50%] bg-[#606060] text-white text-[16px] m-1 w-[48px] h-[48px] grid place-items-center">${new Date().getDate() + i}</p>
  </div>`
}

let swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  // spaceBetween:   10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
