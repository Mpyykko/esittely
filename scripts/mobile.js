document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.mobilenav_button');
    const content = document.querySelector('.mobilenav_content');

    button.addEventListener('click', function() {
        content.classList.toggle('open');
    });
});