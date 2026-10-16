
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close navigation after clicking a link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Demo order buttons
document.querySelectorAll(".order-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const foodName = button.dataset.name;

    alert(
      `You selected ${foodName}!\n` +
      "This is a demo. Online ordering is not connected yet."
    );
  });
});

// Automatically update the footer year
document.getElementById("year").textContent =
  new Date().getFullYear();
