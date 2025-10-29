const dropdownItems = document.getElementById("dropdown-items");
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {
  dropdownItems.classList.toggle("hide-menu");
});

dropdownItems.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
    dropdownItems.classList.add("hide-menu");
  } else if (e.target.tagName === "UL") {
    return;
  }
});

document.addEventListener("click", (e) => {
  if (!dropdownItems.contains(e.target) && !menuBtn.contains(e.target)) {
    dropdownItems.classList.add("hide-menu");
  }
});
