const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// CAMBIA este número por el WhatsApp del negocio.
// Usa código de país + número, solo dígitos. México: 52 + número.
// Ejemplo de formato: 521XXXXXXXXXX
const whatsappNumber = "5210000000000";
const whatsappMessage = "Hola, quiero consultar horarios y reservar una cita.";
const whatsappLink = document.querySelector("#whatsapp-link");

if (whatsappLink && whatsappNumber !== "5210000000000") {
  whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}
