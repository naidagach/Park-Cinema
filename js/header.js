const flags = document.querySelectorAll('#flags')
const kinoteatrlar = document.getElementById('kinoteatrlar')
const diller = document.getElementById('diller')
const optionKino = document.getElementById('optionKino')
const optionDil = document.getElementById('optionDil')
const menu = document.getElementById('menu')
const menubar = document.getElementById('menubar')

function handleFlags() {
  flags.forEach(el => {
    el.classList.toggle('opacity-0');
    el.classList.toggle('scale-95');
    el.classList.toggle('pointer-events-none')
   })
}

//headerde deyil sadece hem detailde hemde indexde ishlesin deye bura yaziram

function handleOption(id) {
  if(id === 'kinoteatrlar') {
    kinoteatrlar.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
    optionKino.classList.add('border-red', 'bg-[#343434]');

    diller.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    optionDil.classList.remove('border-red', 'bg-[#343434]');

    document.querySelector('#optionKino .fa-angle-down').classList.add('rotate-180');
    document.querySelector('#optionDil .fa-angle-down').classList.remove('rotate-180');

  } else if(id === 'diller') {
    diller.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
    optionDil.classList.add('border-red', 'bg-[#343434]');

    kinoteatrlar.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    optionKino.classList.remove('border-red', 'bg-[#343434]');

    document.querySelector('#optionDil .fa-angle-down').classList.add('rotate-180');
    document.querySelector('#optionKino .fa-angle-down').classList.remove('rotate-180');
  }
  document.onclick = closeDropdownOutside
}

function closeDropdownOutside(e) {
  if (!optionKino.contains(e.target) && !kinoteatrlar.contains(e.target) &&
      !optionDil.contains(e.target) && !diller.contains(e.target)) {

        kinoteatrlar.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
        diller.classList.add('opacity-0', 'scale-95', 'pointer-events-none');

        optionKino.classList.remove('border-red', 'bg-[#343434]');
        optionDil.classList.remove('border-red', 'bg-[#343434]');

        document.querySelector('#optionKino .fa-angle-down').classList.remove('rotate-180');
        document.querySelector('#optionDil .fa-angle-down').classList.remove('rotate-180');
  } else {
        document.onclick = closeDropdownOutside
  }
}

function openMenu() {
  menu.classList.toggle('translate-y-full');
  menu.classList.toggle('translate-y-0');
  menu.classList.toggle('opacity-0');
  menu.classList.toggle('opacity-100');

  menubar.classList.toggle('hidden');
  menubar.classList.toggle('opacity-100');

  document.body.classList.toggle('overflow-hidden');
}