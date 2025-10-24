document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".callback__reject");
  const openBtn = document.querySelector(".contactsButton");
  const acceptBtn = document.querySelector(".callback__accept");

  let funToggle = () => {
    const element = document.getElementById("modal");

    if (element.getAttribute("visible") == "visible")
      element.setAttribute("visible", "hidden");
    else element.setAttribute("visible", "visible");

    document.querySelector("body").classList.toggle("disable-scroll");
  };

  closeBtn.addEventListener("click", funToggle);
  openBtn.addEventListener("click", funToggle);
  acceptBtn.addEventListener("submit", funToggle);
});
