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
   const bodyClickHandler = (e) => {
    if ([...flags].some(el => el.contains(e.target))) return;

    flags.forEach(el => {
      el.classList.add('opacity-0');
      el.classList.add('scale-95');
      el.classList.add('pointer-events-none');
    });
    document.body.removeEventListener('click', bodyClickHandler);
  };
}

//headerde deyil sadece hem pages sehifelerde hemde indexde ishlesin deye bura yaziram

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
  document.body.classList.add('overflow-hidden');
  document.body.classList.add('pr-[10px]');

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
        document.body.classList.remove('overflow-hidden');
        document.body.classList.remove('pr-[10px]');

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
  document.body.classList.toggle('pr-[10px]');
}