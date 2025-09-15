document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.querySelector('#closeFormButton');
    closeBtn.addEventListener('click', () => {
        const formElement = document.querySelector('.form');
        formElement.classList.remove('active');
    });
});