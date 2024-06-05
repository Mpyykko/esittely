

const paivamaaraElement = document.getElementById('paivamaara');


function muotoilePaivamaara() {
  const nyt = new Date();
  const vuosi = nyt.getFullYear();
  const kuukausi = nyt.getMonth() + 1;
  const paiva = nyt.getDate();

  paivamaaraElement.textContent = `${paiva.toString().padStart(2, '0')}.${kuukausi.toString().padStart(2, '0')}.${vuosi.toString().padStart(2, '0')}`;

}

document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById('omakuva');
    const text = document.getElementById('tekstit');

    if (image && text) {
        setTimeout(() => {
            image.classList.add('visible');
            text.classList.add('visible');
        }, 100);
    }
});





muotoilePaivamaara();





