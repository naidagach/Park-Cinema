const siraNomreleri = document.getElementById('siraNomreleri')
const birSet = document.getElementById('birSet')
const ikisetsir = document.getElementById('ikisetsir')
const coxsetir = document.getElementById('coxsetir')
const sonsetir = document.getElementById('sonsetir')
const bessetir = document.getElementById('bessetir')
const zoomTarget = document.getElementById('zoomTarget')
const yerSira = document.getElementById('yerSira')
const umumiQiy = document.getElementById('umumiQiy')
const biletAl = document.getElementById('biletAl')
let selTickets = []
let count = 4
let selectedAile = 0
let aileClicked = false;
let odenis = false

let nomre = ''
let birsetir = ''
let ikiset = ''
let setirler = ''
let besset = ''
let sonset = ''
let scaleOlcu = 1


for (let i = 12; i > 0; i--) {
  nomre += `<li>${i}</li>`
}
siraNomreleri.innerHTML = nomre

for (let i = 1; i <= 17; i++) {
  birsetir += `<div data-sira="12" onclick="choosePlace(this)" class="elParent p-1 relative px-2 w-[30px] h-[30px] bg-[#c7c7c7] m-1 rounded-md grid place-items-center cursor-pointer">
  ${i}
                    <ul class="secim bg-[#ffffffdc] opacity-0 scale-95 pointer-events-none transition-all duration-200 absolute top-[30px] w-[max-content] text-center rounded-md overflow-hidden z-[99]">
                      <li onclick="aileniSec(this)" class="ailebtn px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Ailə</li>
                      <li onclick="boyukSec(this)" class="boyukbtn px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Böyük</li>
                    </ul>
  </div>`
}

birSet.innerHTML = birsetir

for (let i = 0; i < 5; i++) {
  const siraNumber = 11 - i;
  for (let j = 1; j <= 2; j++) {
    ikiset += `<div data-sira="${siraNumber}" onclick="choosePlace(this)" class="elParent p-1 relative px-2 w-[30px] h-[30px] bg-[#c7c7c7] m-1 rounded-md grid place-items-center cursor-pointer">
    ${j}
                    <ul class="secim bg-[#ffffffdc] opacity-0 scale-95 pointer-events-none transition-all duration-200 absolute top-[30px] w-[max-content] text-center rounded-md overflow-hidden z-[99]">
                      <li onclick="aileniSec(this)" class="ailebtn px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Ailə</li>
                      <li onclick="boyukSec(this)" class="boyukbtn px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Böyük</li>
                    </ul>
    </div>`
  }
}
ikisetsir.innerHTML = ikiset

for (let i = 0; i < 5; i++) {
  const siraNumber = 11 - i;
  for (let j = 3; j <= 13; j++) {
    setirler += `<div data-sira="${siraNumber}" onclick="choosePlace(this)" class="elParent p-1 relative px-2 w-[30px] h-[30px] bg-[#c7c7c7] m-1 rounded-md grid place-items-center cursor-pointer">
    ${j}
                    <ul class="secim bg-[#ffffffdc] opacity-0 scale-95 pointer-events-none transition-all duration-200 absolute top-[30px] w-[max-content] text-center rounded-md overflow-hidden z-[99]">
                      <li onclick="aileniSec(this)" class="ailebtn px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Ailə</li>
                      <li onclick="boyukSec(this)" class="boyukbtn px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Böyük</li>
                    </ul>
        
    </div>`
  }
}
coxsetir.innerHTML = setirler

for (let i = 0; i < 5; i++) {
  const siraNumber = 5 - i;
  for (let j = 1; j <= 11; j++) {
    besset += `<div data-sira="${siraNumber}" onclick="choosePlace(this)" class="elParent p-1 relative px-2 w-[30px] h-[30px] bg-[#c7c7c7] m-1 rounded-md grid place-items-center cursor-pointer">
    ${j}
                    <ul class="secim bg-[#ffffffdc] opacity-0 scale-95 pointer-events-none transition-all duration-200 absolute bottom-[30px] w-[max-content] text-center rounded-md overflow-hidden z-[99]">
                      <li onclick="aileniSec(this)" class="ailebtn px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Ailə</li>
                      <li onclick="boyukSec(this)" class="boyukbtn px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Böyük</li>
                    </ul>
    </div>`
  }
}
bessetir.innerHTML = besset

for (let i = 2; i <= 10; i++) {
  sonset += `<li data-sira="1" onclick="choosePlace(this)" class="elParent p-1 px-2 relative  w-[30px] h-[30px] bg-[#c7c7c7] m-1 rounded-md grid place-items-center cursor-pointer">
  ${i}
                      <ul class="secim bg-[#ffffffdc] opacity-0 scale-95 pointer-events-none transition-all duration-200 absolute bottom-[34px] w-[max-content] text-center rounded-md overflow-hidden z-[99]">
                        <li onclick="aileniSec(this)" class="ailebtn px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Ailə</li>
                        <li onclick="boyukSec(this)" class="boyukbtn px-4 py-3 hover:bg-[#d52b1e] hover:text-white cursor-pointer">Böyük</li>
                      </ul>
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

// YERE BASSSSSSSSSSSSSS
function choosePlace(elem) {
  if (elem.classList.contains('bg-red')) {
    elem.classList.remove('bg-red');
    elem.classList.add('bg-[#c7c7c7]');
    
    const sira = elem.dataset.sira;
    const yer = elem.textContent.trim();
    removeTicket(sira, yer);
    
    const wasAile = selTickets.find(t => t.type === 'Ailə' && t.sira === sira && t.yer === yer);
    if (wasAile) {
      document.querySelectorAll('.ailebtn').forEach(btn => {
        btn.style.display = 'block';
      });
    }    
    localUpd();
    return;
  }
  if (aileClicked && selectedAile < count) {
    aileniSec(elem); 
    return;
  }
  document.querySelectorAll('.elParent').forEach(el => {
    el.classList.remove('bg-[#ff9c0e]');
  });
  document.querySelectorAll('.secim').forEach(item => {
    item.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
  });

  elem.classList.add('bg-[#ff9c0e]');

  const secim = elem.querySelector('.secim');
  if (secim) {
    secim.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
    secim.style.display = 'block';
  
    secim.querySelector('.ailebtn').style.display = selectedAile < count ? 'block' : 'none';
    secim.querySelector('.boyukbtn').style.display = 'block';
  
    secim.querySelector('.ailebtn').onclick = (e) => {
      e.stopPropagation();
      aileClicked = true;
      aileniSec(elem);
    };
    secim.querySelector('.boyukbtn').onclick = (e) => {
      e.stopPropagation();
      boyukSec(elem);
    };
  }
  
}

// BOYUKU SECCCCCCCCCC
function boyukSec(elem) {
  if (!elem) return;

  elem.classList.remove('bg-[#ff9c0e]');
  elem.classList.add('bg-red');

  const secim = elem.querySelector('.secim');
  if (secim) secim.style.display = 'none';

  const sira = elem.dataset.sira;
  const yer = elem.textContent.trim();
  const qiymet = getPrice('Böyük');
  
  removeTicket(sira, yer);
  selTickets.push({
    type: 'Böyük',
    price: qiymet,
    sira,
    yer
  });
  localUpd();
}

// AILENI SECCCCCCCCCC
function aileniSec(elem) {
  if (!elem || selectedAile >= count) return;

  elem.classList.remove('bg-[#ff9c0e]');
  elem.classList.add('bg-red');

  const secim = elem.querySelector('.secim');
  if (secim) secim.style.display = 'none';

  const sira = elem.dataset.sira;
  const yer = elem.textContent.trim();
  const qiymet = getPrice('Ailə');
  
  removeTicket(sira, yer);
  selTickets.push({
    type: 'Ailə',
    price: qiymet,
    sira,
    yer
  });
  selectedAile++;
  
  if (selectedAile >= count) {
    document.querySelectorAll('.ailebtn').forEach(btn => {
      btn.style.display = 'none';
    });
  }
  localUpd();
}

  function removeTicket(sira, yer) {
    const removed = selTickets.find(t => t.sira === sira && t.yer === yer);
    if (!removed) return;
  
    selTickets = selTickets.filter(t => !(t.sira === sira && t.yer === yer));
  
    if (removed.type === 'Ailə') {
      selectedAile--;
      if (selectedAile < count) {
        document.querySelectorAll('.ailebtn').forEach(btn => {
          btn.style.display = 'block';
        });
        for (let t of selTickets) {
          if (selectedAile >= count) break;
          if (t.type === 'Böyük') {
            t.type = 'Ailə';
            t.price = getPrice('Ailə');
            selectedAile++;
  
            const cells = document.querySelectorAll('.elParent');
            cells.forEach(cell => {
              if (cell.dataset.sira === t.sira && cell.textContent.trim() === t.yer) {
                cell.classList.add('bg-red');
              }
            });
          }
        }
      }
    }
  
    localUpd();
  }

function localUpd() {
  localStorage.setItem('selTickets', JSON.stringify(selTickets));
  showYerSira();
  getUmumiQiymet();
  
  if (selTickets.length > 0) {
    biletAl.style.backgroundColor = '#d52b1e';
    biletAl.style.color = '#fff';
  } else {
    biletAl.style.backgroundColor = '';
    biletAl.style.color = '';
  }
}

function showYerSira() {
  yerSira.innerHTML = ''
  selTickets.map( elem => {
    yerSira.innerHTML += 
    `<div>
      Sıra <span id="sira">${elem.sira.slice(0,2)}</span>,
      Yer <span id="yer">${elem.yer.slice(0,2)}</span>
      <span id="nov">(${elem.type})</span>
    </div>`
  })
  biletAl.style.backgroundColor = '#d52b1e'
  biletAl.style.color = '#fff'
  odenis = true
}

function getUmumiQiymet() {
  const total = selTickets.reduce((sum, t) => sum + t.price, 0)
  umumiQiy.innerHTML = `<p>Ümumi: ${total} AZN</p>`
}

function getPrice(type) {
  const item = dataBiletDetails[0]

  let discountType = ''
  if (type === 'Ailə') discountType = 'FAMILY'
  if (type === 'Böyük') discountType = 'ADULT'

  const discount = item.price[0].discounts.find(el => el.discountType === discountType);
  return discount.discountValue || 0;
}

function odenisiAc() {
  const item = dataBiletDetails[0]
  if (!odenis) {
    const notif = document.getElementById('notification');
    notif.classList.remove('translate-y-full', 'opacity-0');
    notif.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
      notif.classList.remove('translate-y-0', 'opacity-100');
      notif.classList.add('translate-y-full', 'opacity-0');
    }, 2000);
    return;
  }

  if (selectedAile >= 1 && selectedAile < count) {
    const notifAile = document.getElementById('notifAile');
    notifAile.classList.remove('translate-y-full', 'opacity-0');
    notifAile.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
      notifAile.classList.remove('translate-y-0', 'opacity-100');
      notifAile.classList.add('translate-y-full', 'opacity-0');
    }, 2000);
    return;
  }
  location.href = `../pages/odenis.htm?id=${item.id}`;
}

