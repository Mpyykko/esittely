

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
    const texts = document.querySelectorAll('.tekstit');

    if (image) {
        setTimeout(() => {
            image.classList.add('visible');
        }, 100);
    }

    if (texts.length > 0) {
        setTimeout(() => {
            texts.forEach(text => text.classList.add('visible'));
        }, 200);
    }
});




const projectLinks = [
    { name: 'hedelma.html', description: 'Hedelmäpeli' },
    { name: 'possu.html', description: 'Sikanoppapeli' },
    { name: 'https://mpyykko.github.io/JS/clicker.html', description: 'Clicker-peli' }
];


let currentProjectIndex = 0;
let iframe = document.querySelector('.embed-responsive-item');
let projectInfo = document.getElementById('projekti-info');

function updateProject() {
    let currentProject = projectLinks[currentProjectIndex];
    iframe.setAttribute('src', currentProject.name);
    projectInfo.textContent = currentProject.description;
}

function showNext() {
    currentProjectIndex = (currentProjectIndex + 1) % projectLinks.length;
    updateProject();
}

function showPrevious() {
    currentProjectIndex = (currentProjectIndex - 1 + projectLinks.length) % projectLinks.length;
    updateProject();
}

document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const largeImageContainer = document.getElementById('largeImageContainer');
  const largeImage = document.getElementById('largeImage');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function(event) {
          event.preventDefault();
          const imageSrc = this.getAttribute('data-image');
          largeImage.setAttribute('src', imageSrc);
          largeImageContainer.classList.add('active');
      });
  });

  largeImageContainer.addEventListener('click', function(event) {
      if (event.target === largeImageContainer || event.target === largeImage) {
          largeImageContainer.classList.remove('active');
      }
  });

  document.addEventListener('click', function(event) {
      if (!largeImageContainer.contains(event.target) && !event.target.classList.contains('thumbnail')) {
          largeImageContainer.classList.remove('active');
      }
  });
});

  


muotoilePaivamaara();





