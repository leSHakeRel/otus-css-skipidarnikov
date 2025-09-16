document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.querySelector('.callback__reject');
    const openBtn = document.querySelector('.contactsButton');
    const acceptBtn = document.querySelector('.callback__accept');

    let funToggle = () => {
        const formElement = document.querySelector('.modal');
        formElement.classList.toggle('hidden');
    };

    console.log(closeBtn)

    closeBtn.addEventListener('click', funToggle);
    openBtn.addEventListener('click', funToggle);
    acceptBtn.addEventListener('click', funToggle);
});