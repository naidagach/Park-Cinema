const BASE_URL = 'https://parkcinema-data-eta.vercel.app/landing'   
const BASE_URL_BILET = 'https://parkcinema-data-eta.vercel.app/detail'   


async function useAllMovies() {
        const res = await fetch(BASE_URL)
        return await res.json()
}
async function useDetailMovies(id) {
        const res = await fetch(`${BASE_URL}/${id}`)
        return await res.json()
}

async function useBiletMovies() {
        const res = await fetch(BASE_URL_BILET)
        return await res.json()
}
async function useBiletDetails(id) {
        const res = await fetch(`${BASE_URL_BILET}/${id}`)
        return await res.json()
}
