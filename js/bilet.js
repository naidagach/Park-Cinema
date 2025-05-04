const biletContent = document.getElementById('biletContent')
const biletQiymet = document.getElementById('biletQiymet')
const umumiQiy = document.getElementById('umumiQiy')
const dataBiletDetails = []
const id = new URLSearchParams(location.search).get('id')

useBiletDetails(id)
.then(info => {
  dataBiletDetails.length = 0
  dataBiletDetails.push(info)
  showBiletsDetail(id)
  showQiymet(id)
})


function showBiletsDetail(id) {
  const item = dataBiletDetails[0]
    biletContent.innerHTML =
        `<div class="w-full h-[300px] flex gap-4 items-center justify-center s:justify-start  s:w-[50%] duration-300 p-3">
          <div class="w-[50%]">
            <img class="max-h-[276px] s:object-cover" src="../img/patrul.webp" alt="" />
          </div>
          <div class="flex flex-col items-start justify-center gap-2 text-white">
            <p class="mb-2">${item.movie.name}</p>
            <p>${item.type.slice(1)}</p>
            <p class="flex gap-2 items-center"><i class="fa-solid fa-calendar"></i>${item.date.slice(8, 10)}.${item.date.slice(5, 7)}.${item.date.slice(0, 4)}</p>
            <p class="mb-2 flex gap-2 items-center"><i class="fa-solid fa-clock"></i>${item.time}</p>
            <p>Dil: ${
              item.language === 'RU' ? 'Rus' : 
              item.language === 'AZ' ? 'Aze' : 
              item.language === 'EN' ? 'Eng' : 
              ''
            }</p>
            <p>Kinoteatr: ${item.theatreTitle}</p>
            <p>${item.hallTitle}</p>
            <p>Müddət: 0${(item.movie.duration/60).toFixed()}:${item.movie.duration%60}:00</p>
          </div>
        </div>`

}

function showQiymet(id) {
  const item = dataBiletDetails[0]
  biletQiymet.innerHTML = `
            <p class="">
              ${item.price.map(elem => 
                elem.discounts.map(el => 
                  el.discountType === 'FAMILY' 
                    ? `Ailə: ${el.discountValue} AZN` 
                    : el.discountType === 'ADULT'
                      ? `Böyük: ${el.discountValue} AZN`
                      : el.discountType === 'DOUBLE'
                        ? `İkili: ${el.discountValue} AZN`
                        : ''
                ).join(' ')
              )}
            </p>`
          }
          
          
// umumiQiy.innerHTML = `<p>Ümumi: ${biletQiymet.innerText} AZN</p>`