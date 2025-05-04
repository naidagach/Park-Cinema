const siraNomreleri = document.getElementById('siraNomreleri')
const birSetir = document.getElementById('birSetir')
const ikisetsir = document.getElementById('ikisetsir')
const coxsetir = document.getElementById('coxsetir')
const sonsetir = document.getElementById('sonsetir')
const bessetir = document.getElementById('bessetir')
const zoomTarget = document.getElementById('zoomTarget')
const yerSira = document.getElementById('yerSira')

let nomre = ''
let birsetir = ''
let ikiset = ''
let setirler = ''
let besset = ''
let sonset = ''
let scaleOlcu = 1

const item = dataBiletDetails[0]

for (let i = 12; i > 0; i--) {
  nomre += `<li id="nomreler">${i}</li>`
}
siraNomreleri.innerHTML = nomre

for (let i = 1; i <= 17; i++) {
  birsetir += `<li data-sira="12" onclick="choosePlace(this)" class="elParent p-1 relative px-2 w-[30px] h-[30px] bg-[#c7c7c7] m-1 rounded-md grid place-items-center cursor-pointer">
  ${i}
      <div class="secim bg-[#ffffff88] opacity-0 scale-95 pointer-events-none transition-all duration-200 absolute top-[30px] w-[max-content] text-center rounded-md overflow-hidden z-[99] backdrop-blur">
                    <ul>
                      <li onclick="aileniSec(this)" class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Ailə</li>
                      <li onclick="boyukSec(this)" class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Böyük</li>
                    </ul>
      </div>
  </li>`
}

birSetir.innerHTML = birsetir

for (let i = 0; i < 5; i++) {
  const siraNumber = 11 - i;
  for (let j = 1; j <= 2; j++) {
    ikiset += `<div data-sira="${siraNumber}" onclick="choosePlace(this)" class="elParent p-1 relative px-2 w-[30px] h-[30px] bg-[#c7c7c7] m-1 rounded-md grid place-items-center cursor-pointer">
    ${j}
        <div class="secim bg-[#ffffff88] opacity-0 scale-95 pointer-events-none transition-all duration-200 absolute top-[30px] w-[max-content] text-center rounded-md overflow-hidden z-[99] backdrop-blur">
                    <ul>
                      <li onclick="aileniSec(this)" class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Ailə</li>
                      <li onclick="boyukSec(this)" class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Böyük</li>
                    </ul>
        </div>
    </div>`
  }
}
ikisetsir.innerHTML = ikiset

for (let i = 0; i < 5; i++) {
  const siraNumber = 11 - i;
  for (let j = 3; j <= 13; j++) {
    setirler += `<div data-sira="${siraNumber}" onclick="choosePlace(this)" class="elParent p-1 relative px-2 w-[30px] h-[30px] bg-[#c7c7c7] m-1 rounded-md grid place-items-center cursor-pointer">
    ${j}
    <div class="secim bg-[#ffffff88] opacity-0 scale-95 pointer-events-none transition-all duration-200 absolute top-[30px] w-[max-content] text-center rounded-md overflow-hidden z-[99] backdrop-blur">
                    <ul>
                      <li onclick="aileniSec(this)" class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Ailə</li>
                      <li onclick="boyukSec(this)" class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Böyük</li>
                    </ul>
    </div>
        
    </div>`
  }
}
coxsetir.innerHTML = setirler

for (let i = 0; i < 5; i++) {
  const siraNumber = 6 - i;
  for (let j = 1; j <= 11; j++) {
    besset += `<div data-sira="${siraNumber}" onclick="choosePlace(this)" class="elParent p-1 relative px-2 w-[30px] h-[30px] bg-[#c7c7c7] m-1 rounded-md grid place-items-center cursor-pointer">
    ${j}
        <div class="secim bg-[#ffffff88] opacity-0 scale-95 pointer-events-none transition-all duration-200 absolute bottom-[30px] w-[max-content] text-center rounded-md overflow-hidden z-[99] backdrop-blur">
                    <ul>
                      <li onclick="aileniSec(this)" class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Ailə</li>
                      <li onclick="boyukSec(this)" class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Böyük</li>
                    </ul>
        </div>
    </div>`
  }
}
bessetir.innerHTML = besset

for (let i = 2; i <= 10; i++) {
  sonset += `<li data-sira="1" onclick="choosePlace(this)" class="elParent p-1 px-2 relative  w-[30px] h-[30px] bg-[#c7c7c7] m-1 rounded-md grid place-items-center cursor-pointer">
  ${i}
        <div class="secim bg-[#ffffff88] opacity-0 scale-95 pointer-events-none transition-all duration-200 absolute bottom-[34px] w-[max-content] text-center rounded-md overflow-hidden z-[99] backdrop-blur">
                      <ul>
                        <li onclick="aileniSec(this)" class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Ailə</li>
                        <li onclick="boyukSec(this)" class="px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Böyük</li>
                      </ul>
        </div>
  </li>`
}
sonsetir.innerHTML = sonset

function handleZoom(a) {
  if (a === 'in') {
    scaleOlcu += 0.1
  } else if (a === 'out') {
    scaleOlcu = Math.max(0.4, scaleOlcu - 0.1)
  }
  zoomTarget.style.transform = `scale(${scaleOlcu})`  
}


function choosePlace(elem) {
  elem.classList.toggle('bg-[#ff9c0e]')

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
      elem.classList.remove('bg-[#ff9c0e]', 'text-white')
      document.onclick = null 
    }
  }

}

function boyukSec(item) {
  const nomreler = document.getElementById('nomreler')
  const parent = item.closest('.elParent') 
  if (parent) {
    parent.classList.remove('bg-[#ff9c0e]') 
    parent.classList.add('bg-red') 
  }
  document.querySelectorAll('.secim').forEach(elem => {
    elem.classList.add('opacity-0', 'scale-95', 'pointer-events-none')
  })
  if(parent.classList.contains('bg-red')) {
    yerSira.innerHTML += 
                            `<div>
                              Sıra <span id="sira">${parent.dataset.sira}</span>,
                              Yer <span id="yer">${parent.innerHTML}</span>
                              <span id="nov">(Böyük)</span>
                            </div>`
    } else return ''
}

function aileniSec(item) {
  const parent = item.closest('.elParent') 
  if (parent) {
    parent.classList.remove('bg-[#ff9c0e]') 
    parent.classList.add('bg-red') 
  }
  document.querySelectorAll('.secim').forEach(elem => {
    elem.classList.add('opacity-0', 'scale-95', 'pointer-events-none')
  })
  if(parent.classList.contains('bg-red')) {
    yerSira.innerHTML += 
                            `<div>
                              Sıra <span id="sira">${parent.dataset.sira}</span>,
                              Yer <span id="yer">${parent.innerHTML}</span>
                              <span id="nov">(Ailə)</span>
                            </div>`
    } else return ''
}