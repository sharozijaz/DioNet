// // const contactMap = document.querySelector(".contact__map-container");
const mobileNav = document.querySelector(".navigation__mobile");
const mobile = document.querySelector(".navigation__link");
mobileNav.addEventListener("click", () => {
  mobile.classList.toggle("active");
});
const map = L.map("contact__map").setView([51.505, -0.09], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
