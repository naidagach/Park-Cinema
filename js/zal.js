const siraNomreleri = document.getElementById('siraNomreleri')
const birSetir = document.getElementById('birSetir')
const ikisetsir = document.getElementById('ikisetsir')
const coxsetir = document.getElementById('coxsetir')
const sonsetir = document.getElementById('sonsetir')
const bessetir = document.getElementById('bessetir')
const zoomTarget = document.getElementById('zoomTarget')

let scaleOlcu = 1


useBiletDetails(id) 
.then(info =>{
  dataBiletDetails.length = 0
  dataBiletDetails.push(info)
  showSeats(id)
})

function showSeats(id) {

  let nomre = ''
  let birsetir = ''
  let ikiset = ''
  let setirler = ''
  let besset = ''
  let sonset = ''

const item = dataBiletDetails[0]

for (let i = 12; i > 0; i--) {
  nomre += `<li>${i}</li>`
}
siraNomreleri.innerHTML = nomre

for (let i = 1; i <= 17; i++) {
  birsetir += `<li onclick="choosePlace(this)" class="p-1 relative px-2 w-[30px] h-[30px] bg-[#c7c7c7] m-1 rounded-md grid place-items-center cursor-pointer">
  ${i}
      <div class="secim bg-[#ffffff88] opacity-0 scale-95 pointer-events-none transition-all duration-200 absolute top-[30px] w-[max-content] text-center rounded-md overflow-hidden z-[99] backdrop-blur">
                    <ul>
                      <li class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">
                      </li>
                      <li class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Böyük</li>
                    </ul>
      </div>
  </li>`
}
birSetir.innerHTML = birsetir

for (let i = 0; i < 5; i++) {
  for (let j = 1; j <= 2; j++) {
    ikiset += `<div onclick="choosePlace(this)" class="p-1 relative px-2 w-[30px] h-[30px] bg-[#c7c7c7] m-1 rounded-md grid place-items-center cursor-pointer">
    ${j}
        <div class="secim bg-[#ffffff88] opacity-0 scale-95 pointer-events-none transition-all duration-200 absolute top-[30px] w-[max-content] text-center rounded-md overflow-hidden z-[99] backdrop-blur">
                    <ul>
                      <li class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Ailə</li>
                      <li class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Böyük</li>
                    </ul>
        </div>
    </div>`
  }
}
ikisetsir.innerHTML = ikiset

for (let i = 0; i < 5; i++) {
  for (let j = 3; j <= 13; j++) {
    setirler += `<div onclick="choosePlace(this)" class="p-1 relative px-2 w-[30px] h-[30px] bg-[#c7c7c7] m-1 rounded-md grid place-items-center cursor-pointer">
    ${j}
    <div class="secim bg-[#ffffff88] opacity-0 scale-95 pointer-events-none transition-all duration-200 absolute top-[30px] w-[max-content] text-center rounded-md overflow-hidden z-[99] backdrop-blur">
                    <ul>
                      <li class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Ailə</li>
                      <li class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Böyük</li>
                    </ul>
    </div>
        
    </div>`
  }
}
coxsetir.innerHTML = setirler

for (let i = 0; i < 5; i++) {
  for (let j = 1; j <= 11; j++) {
    besset += `<div onclick="choosePlace(this)" class="p-1 relative px-2 w-[30px] h-[30px] bg-[#c7c7c7] m-1 rounded-md grid place-items-center cursor-pointer">
    ${j}
        <div class="secim bg-[#ffffff88] opacity-0 scale-95 pointer-events-none transition-all duration-200 absolute bottom-[30px] w-[max-content] text-center rounded-md overflow-hidden z-[99] backdrop-blur">
                    <ul>
                      <li class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Ailə</li>
                      <li class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Böyük</li>
                    </ul>
        </div>
    </div>`
  }
}
bessetir.innerHTML = besset

for (let i = 2; i <= 10; i++) {
  sonset += `<li onclick="choosePlace(this)" class="p-1 px-2 relative  w-[30px] h-[30px] bg-[#c7c7c7] m-1 rounded-md grid place-items-center cursor-pointer">
  ${i}
        <div class="secim bg-[#ffffff88] opacity-0 scale-95 pointer-events-none transition-all duration-200 absolute bottom-[34px] w-[max-content] text-center rounded-md overflow-hidden z-[99] backdrop-blur">
                      <ul>
                        <li class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Ailə</li>
                        <li class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Böyük</li>
                      </ul>
        </div>
  </li>`
}
sonsetir.innerHTML = sonset
}




function handleZoom(a) {
  if (a === 'in') {
    scaleOlcu += 0.1
  } else if (a === 'out') {
    scaleOlcu = Math.max(0.7, scaleOlcu - 0.1)
  }
  zoomTarget.style.transform = `scale(${scaleOlcu})`  
}

function choosePlace(elem) {

  elem.classList.toggle('bg-[#ff9c0e]')
  elem.classList.toggle('text-white')

  document.querySelectorAll('.secim').forEach(item => {
    item.classList.add('opacity-0', 'scale-95', 'pointer-events-none')
  })
  const secim = elem.querySelector('.secim')
  if (secim) {
    secim.classList.toggle('opacity-0')
    secim.classList.toggle('scale-95')
    secim.classList.toggle('pointer-events-none')

  }
  document.onclick = function(e) {
    if (!elem.contains(e.target)) {
      secim.classList.add('opacity-0', 'scale-95', 'pointer-events-none')
      document.onclick = null 
    }
  }
}