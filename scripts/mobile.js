document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.mobilenav_button');
    const content = document.querySelector('.mobilenav_content');

    button.addEventListener('click', function(event) {
        event.stopPropagation();
        content.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        const targetElement = event.target;
        const isInsideMobileNav = content.contains(targetElement);

        if (!isInsideMobileNav) {
            content.classList.remove('open');
        }
    });
});
