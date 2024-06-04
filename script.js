const minaLink = document.getElementById('mina');
const nakyma = document.getElementById('nakyma');
const minaNakymaDiv = document.getElementById('minaNakymaDiv');

minaLink.addEventListener('click', minaNakyma);

function minaNakyma() {
    minaNakymaDiv.style.display = 'block';
    console.log('Minä clicked!');
}


const tyoLink = document.getElementById('tyo');
tyoLink.addEventListener('click', tyoNakyma);

function tyoNakyma (){
   
    
    console.log('Työ clicked!');

}

const harrastuksetLink = document.getElementById('harrastukset');
harrastuksetLink.addEventListener('click', harrastuksetNakyma);

function harrastuksetNakyma (){
    nakyma.innerHTML = '';
    console.log('Harrastukset clicked!');

}

const yleistaLink = document.getElementById('yleista');
yleistaLink.addEventListener('click', yleistaNakyma);

function yleistaNakyma (){
    nakyma.innerHTML = '';
    console.log('Yleistä clicked!');

}


const projektiLink = document.getElementById('projekti');
projektiLink.addEventListener('click', projektiNakyma);

function projektiNakyma (){
    nakyma.innerHTML = '';
    console.log('Projekti clicked!');

}

const suunnitelmaLink = document.getElementById('suunnitelma');
suunnitelmaLink.addEventListener('click', suunnitelmaNakyma);

function suunnitelmaNakyma (){
    nakyma.innerHTML = '';
    console.log('Suunnitelma clicked!');
}

////////////////////////////////////////////////////////////////////


const paivamaaraElement = document.getElementById('paivamaara');


function muotoilePaivamaara() {
  const nyt = new Date();
  const vuosi = nyt.getFullYear();
  const kuukausi = nyt.getMonth() + 1;
  const paiva = nyt.getDate();

  paivamaaraElement.textContent = `${paiva.toString().padStart(2, '0')}.${kuukausi.toString().padStart(2, '0')}.${vuosi.toString().padStart(2, '0')}`;

}


muotoilePaivamaara();





