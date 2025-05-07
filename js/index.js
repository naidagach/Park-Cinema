const movies = document.getElementById('movies')
const data = []
const ageMap = {
  ZERO: 0,
  SIX: 6,
  TWELVE: 12,
  SIXTEEN: 16,
  EIGHTEEN: 18
};

useAllMovies()
.then(info => {
  data.length = 0
  data.push(...info)
  showMovies()
})
.finally(() => {
  document.getElementById('anim').classList.add('hidden')
})

function showMovies() {
  movies.innerHTML = ''
  data
  .slice(0, 12)
  .map(item => {
    movies.innerHTML += `
              <div onclick="window.location = '../pages/detail.htm?id=${item.id}'" class="rounded-[18px] overflow-hidden relative w-[100%] xs:w-[48%] s:w-[30%] m:w-[23%]">
                <img class="hover:scale-105 duration-300" src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${item.image}&w=640&q=75" alt="movie" />
                <div class="absolute bottom-0 left-0 w-full h-[500px] z-10 pointer-events-none" style="background: linear-gradient(to top, rgba(0, 0, 0, 0.957), transparent);"></div>
                
                <div class="absolute bottom-0 right-0 left-0 z-[99] m-4 w-[90%]">
                  <p class="text-[22px] text-white font-semibold mb-2">${item.name}</p>
                  <p class="text-[14px] text-[#d9dadb] ">${item.firstScreeningDate.slice(8, 10)}.${item.firstScreeningDate.slice(5, 7)}.${item.year}</p>
                  <div class="flex justify-between items-center w-full">
                    <p class="text-[#d9dadb]">${ageMap[item.ageLimit]}+</p>
                    <div class="flex items-center">
                    ${ item.languages.map(elem => `<img class="w-[24px] pr-1" src="/img/${elem.toLowerCase()}-flag.svg" alt="" />`).join('')}
                    </div>
                  </div>
                </div>
            </div>`
  })
}