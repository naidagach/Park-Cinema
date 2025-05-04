const content = document.getElementById('content')
const biletler = document.getElementById('biletler')
const id = new URLSearchParams(location.search).get('id')
dataDetail = []
dataBilet = []
const ageMap = {
  ZERO: 0,
  SIX: 6,
  TWELVE: 12,
  SIXTEEN: 16,
  EIGHTEEN: 18
};

useDetailMovies(id)
.then(info => {
  dataDetail.length = 0
  dataDetail.push(info)
  showDetail(id)
})


function showDetail(id) {
  const item = dataDetail[0]
  content.innerHTML = `<div class="container flex items-start flex-col gap-2 my-10 s:flex-row-reverse">
  <div class="w-full max-w-[800px] mx-auto rounded-xl overflow-hidden s:w-[50%]">
    <div class="relative w-full aspect-video">
      <iframe class="absolute top-0 left-0 w-full h-full" src="${item.youtubeUrl.replace('watch?v=', 'embed/')}"
        title="" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
  <div class="flex flex-col gap-2 my-2 s:w-[50%] s:gap-2 m:grid m:grid-cols-2 m:gap-8 m:items-center">
    <div class="hidden m:block overflow-hidden">
      <img class=" rounded-[30px]" src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${item.image}&w=640&q=75" alt="">
    </div>
    <div>
      <h1 class="text-[#D9DADB] text-xl font-semibold">${item.name}</h1>
      <p class="text-[#D9DADB] text-sm items-center gap-0.5 my-2">${item.genres.map(elem => elem.title)}</p>
      <p class="text-[#D9DADB] !text-[16px] font-semibold mb-1">Dil</p>
      <div class="flex gap-2 mb-2">
      ${ item.languages.map(elem => `<img class="w-[24px]" src="/img/${elem.toLowerCase()}-flag.svg" alt="" />`).join('')}
      </div>
      <p class="text-[#D9DADB] !text-[16px] font-semibold mb-1">Altyazı</p>
      <div class="flex gap-2">
      ${ item.languages.map(elem => `<img class="w-[24px]" src="/img/${elem.toLowerCase()}-flag.svg" alt="" />`).join('')}
      </div>
      <div class="my-1 flex flex-row s:flex-col s:justify-start justify-between max-s:items-center">
        <div class="w-[50%] flex flex-col gap-1">
          <div class="text-[#D9DADB] font-semibold flex gap-2">
            <p>Müddət: </p>
            <p>0${(item.duration/60).toFixed()}:${(item.duration%60)}:00</p>
          </div>
          <div class="text-[#D9DADB] font-semibold flex gap-2">
            <p>İl: </p>
            <p>${item.year}</p>
          </div>
          <div class="text-[#D9DADB] font-semibold flex  flex-wrap gap-2">
            <p>Ölkə: </p>
            <p class="m:whitespace-nowrap">${item.country}</p>
          </div>
          <div class="text-[#D9DADB] font-semibold m:whitespace-nowrap">
            <p>Rejissor: ${item.director}</p>
          </div>
        </div>
        <div class="w-[50%] flex flex-col gap-1">
          <div class="text-[#D9DADB] !text-[16px] font-semibold">
            <p>Aktyorlar: </p>
            <ul>
            ${
              item.actors.map(elem => `<li class="pl-2 whitespace-nowrap "> ${elem} </li>`).join("")
            }
            </ul>
          </div>
          <div class="text-[#D9DADB] !text-[16px] font-semibold flex flex-wrap gap-2">
            <p>Yaş Həddi: </p>
            <p>${ageMap[item.ageLimit]}+</p>
          </div>
          <div class="text-[#D9DADB] !text-[16px] font-semibold flex flex-wrap gap-2">
            <p class="whitespace-nowrap">Nümayiş Tarixi: </p>
            <p>${item.firstScreeningDate.slice(8, 10)}.${item.firstScreeningDate.slice(5, 7)}.${item.firstScreeningDate.slice(0, 4)}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-[#D9DADB] font-semibold my-3 m:col-span-2">
      <p>${item.description}</p>
    </div>
  </div>
</div>`
}


useBiletMovies()
.then(info => {
  dataBilet.length = 0
  dataBilet.push(...info)
  showBilets()
})

function showBilets() {
  biletler.innerHTML = ''
  dataBilet.map(item => {
    biletler.innerHTML += `
            <div class="text-white flex items-center justify-around border-b py-1">
              <p class="text-[14px] w-[10%]">${item.time}</p>
              <p class="text-[12px] xs:text-[14px] w-[20%]">${item.theatreTitle} | ${item.hallTitle}</p>
              <div class="flex gap-2 w-[10%] justify-start">
                <p class="text-[14px]">${item.type.slice(1)}</p>
                <img class="w-[24px]" src="/img/ru-flag.svg" alt="" />
              </div>
              <div class="flex flex-col items-center border border-white rounded-[10px] py-1 px-4">
                <p class="text-[12px]">
                ${ 
                  item.subtitle === 'RU' ? 'Rus' : 
                  item.subtitle === 'AZ' ? 'Aze' : 
                  item.subtitle === 'EN' ? 'Eng' : 
                  'No' 
                } 
                </p>
                <p class="text-[10px]">sub</p>
              </div>
              <button onclick="window.location.href = 'bilet.htm?id=${item.id}'" class="bg-[#86322a] w-[20%] px-4 py-2 xs:w-[100px] s:w-[160px] text-[12px] xs:text-[14px] text-[#b9b9b9] rounded-[20px] hover:bg-[#a81a1a] duration-150 hover:text-white">Bilet Al</button>
            </div>`
  })
}
