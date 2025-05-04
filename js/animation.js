function handleAnimation(id) {
  document.body.innerHTML = `<img class=" h-[100vh] object-center" src="/img/animation.gif" alt="Загрузка..." />`
  setTimeout(() => {
    location.href = `/pages/detail.htm?id=${id}`
  }, 1000) 
}