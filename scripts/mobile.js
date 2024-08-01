document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.mobilenav_button');
    const content = document.querySelector('.mobilenav_content');
    const closeButton = document.getElementById('mobile-close');

    button.addEventListener('click', function(event) {
        event.stopPropagation();
        content.classList.toggle('open');
        
    });

    closeButton.addEventListener('click', function(event) {
        event.stopPropagation();
        content.classList.remove('open');

    });



     /*

    document.addEventListener('click', function(event) {
        const targetElement = event.target;
        const isInsideMobileNav = content.contains(targetElement);

        if (!isInsideMobileNav && !targetElement.classList.contains('mobilenav_button')) {
            content.classList.remove('open');
        }
    }); */

    document.addEventListener('click', function(event) {
        const targetElement = event.target;
        const isInsideMobileNav = content.contains(targetElement);
        const isNavBarClicked = targetElement.id === 'topnav';
    
        if (!isInsideMobileNav && !isNavBarClicked) {
            content.classList.remove('open');
        }
    });

    const mobilenavButton = document.getElementById('mobilenav_button');
    const dropdownMenu = document.querySelector('.navbar-collapse');

    mobilenavButton.addEventListener('click', function() {
        dropdownMenu.classList.remove('show');
});


});


function closeImage() {
    const imageContainer = document.getElementById('largeImageContainer');
    imageContainer.style.display = 'none';
  }
