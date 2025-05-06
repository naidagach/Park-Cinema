const odenisContent = document.getElementById('odenisContent')
const dataOdenis = []
const id = new URLSearchParams(location.search).get('id')
const tickets = JSON.parse(localStorage.getItem('selTickets')) || []
console.log(tickets);
useOdenisDetails(id)
.then(info => {
  dataOdenis.length = 0
  dataOdenis.push(info)
  showOdenis(id)
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