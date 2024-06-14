

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
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const mobileNav = document.getElementById('mobilenav_button');
    const topnav = document.getElementById('topnav');
    const closeButton = document.getElementById('mobile-close');

    
    

    let images = [];
    thumbnails.forEach(thumbnail => {
        images.push(thumbnail.getAttribute('data-image'));
    });

    let currentIndex = 0;

    function updateImage(index) {
        largeImage.src = images[index];
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function(event) {
            event.preventDefault();
            currentIndex = index;
            updateImage(currentIndex);
    
            largeImageContainer.style.display = 'block';
    
            
        });
    });

    prevBtn.addEventListener('click', function(event) {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateImage(currentIndex);
    });

    nextBtn.addEventListener('click', function(event) {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateImage(currentIndex);
    });

    mobileNav.addEventListener('click', function() {
        largeImageContainer.style.display = 'none';
          
    });
    
    topnav.addEventListener('click', function() {
        largeImageContainer.style.display = 'none';
   
    });

    largeImage.addEventListener('click', function() {
        largeImageContainer.style.display = 'none';
   
    });

    closeButton.addEventListener('click', function() {
        largeImageContainer.style.display = 'none';
   
    });
  

   
});

function copyRow(id) {
    let tdElement = document.getElementById(id);
    let clonedElement = tdElement.cloneNode(true);

    let buttons = clonedElement.getElementsByTagName('button');
    while (buttons.length > 0) {
      buttons[0].remove();
    }
    
   
    let textToCopy = clonedElement.textContent.trim();
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        showCopiedMessage();
      })
     
  }
  
  function showCopiedMessage() {
    let messageElement = document.createElement('div');
    messageElement.textContent = 'Kopioitu';
    messageElement.className = 'copied-message';
    document.body.appendChild(messageElement);
    
    setTimeout(() => {
      messageElement.remove();
    }, 2000);
  }




muotoilePaivamaara();





