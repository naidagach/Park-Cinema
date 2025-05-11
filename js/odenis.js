const odenisContent = document.getElementById('odenisContent')
const mail = document.getElementById('mail')
const nomre = document.getElementById('nomre')
const notifEmail = document.getElementById('notifEmail')
const notifNomre = document.getElementById('notifNomre')
const check = document.getElementById('check')
const sonodenis = document.getElementById('sonodenis')
const timer = document.getElementById('timer')
const dataOdenis = []
let i = 0
const id = new URLSearchParams(location.search).get('id')
const tickets = JSON.parse(localStorage.getItem('selTickets')) || []
useOdenisDetails(id)
.then(info => {
  dataOdenis.length = 0
  dataOdenis.push(info)
  showOdenis(id)
})
.finally(() => {
  document.getElementById('anim').classList.add('hidden')
})
function showOdenis(id) {
  const item = dataOdenis[0]
  odenisContent.innerHTML = `
              <div class="flex flex-col gap-1 bg-[#4d4d4d] p-5 rounded-xl">
                <h2 class="text-xl font-medium">${item.movie.name}</h2>
                <p>${item.theatreTitle}</p>
                <p>${item.date.slice(8, 10)}.${item.date.slice(5, 7)}.${item.date.slice(0, 4)} ${item.time} ${item.hallTitle}</p>
                <div class="flex flex-col gap-3"> ${
                  tickets.map(elem => {
                    return `<p>Sıra ${elem.sira.slice(0,2)} Yer ${elem.yer.slice(0,2)} (${elem.type})</p>`
                  }).join('')}
                </div>
                <p class="font-semibold mt-5">Ümumi: ${tickets.reduce((sum, t) => sum + t.price, 0)} AZN</p>
              </div>`
}

function sonOdenis() {
  if (mail.value === '') {
    notifEmail.classList.remove('translate-y-full');
    notifEmail.classList.remove('translate-y-0');
    notifEmail.classList.remove('opacity-0');
    notifEmail.classList.remove('opacity-100');
    setTimeout(() => {
      notifEmail.classList.add('translate-y-full');
      notifEmail.classList.add('opacity-0');
    }, 2000);
  } else if (nomre.value.length < 9) {
    notifNomre.innerHTML = 'Etibarlı telefon nömrəsi daxil edin';
    notifNomre.classList.remove('translate-y-full', 'opacity-0','translate-y-0', 'opacity-100');
    setTimeout(() => {
      notifNomre.classList.add('translate-y-full', 'opacity-0');
    }, 2000);
  } else if (nomre.value === '') {
    notifNomre.innerHTML = 'Zəhmət olmasa telefon nömrənizi daxil edin';
    notifNomre.classList.remove('translate-y-full', 'opacity-0', 'translate-y-0', 'opacity-100');
    setTimeout(() => {
      notifNomre.classList.add('translate-y-full', 'opacity-0');
    }, 2000);
  } else if (check.checked) whatsappTo();
}

function checkbox() {
  if (check.checked && mail.value != '' && nomre.value != '') {
    sonodenis.classList.add('bg-red', 'text-white');
  } else {
    sonodenis.classList.remove('bg-red', 'text-white');
  }
}

function whatsappTo() {
  const item = dataOdenis[0];
  const url = `https://wa.me/994${nomre.value}?text=${
    encodeURIComponent(`${item.movie.name} ${item.theatreTitle} Cinema Zalında saat ${item.date.slice(8, 10)}.${item.date.slice(5, 7)}.${item.date.slice(0, 4)} ${item.time} ${item.hallTitle} - ${
      tickets.map(elem => `Sıra ${elem.sira.slice(0,2)} Yer ${elem.yer.slice(0,2)} (${elem.type})`).join(', ')
    }`)
  }`;
  window.open(url);
}

function move() {
    const elem = document.getElementById("myBar");
    let width = 0;
    const id = setInterval(frame, 180);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        location.href = '/index.htm'
      } else {
        width+=0.1;
        elem.style.width = width + "%";
      }
    }
  }

move()

function timeout() {
  let time = 180 
  const id = setInterval(() => {
    const min = Math.floor(time / 60)
    const sec = time % 60
    
    timer.innerHTML = `${min}:${sec < 10 ? '0' : ''}${sec}`

    time--
  }, 1000)
}
timeout();