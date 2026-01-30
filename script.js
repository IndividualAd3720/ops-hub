// =====================
// SEARCH FUNCTIONALITY
// =====================

const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const sections = document.querySelectorAll("section");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });

  // Hide section if all its cards are hidden
  sections.forEach(section => {
    const visibleCards = section.querySelectorAll(".card:not([style*='display: none'])");
    section.style.display = visibleCards.length ? "block" : "none";
  });
});

// =====================
// "/" SHORTCUT TO SEARCH
// =====================

document.addEventListener("keydown", e => {
  if (e.key === "/" && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }

  if (e.key === "Escape") {
    searchInput.value = "";
    searchInput.blur();

    cards.forEach(card => (card.style.display = "block"));
    sections.forEach(section => (section.style.display = "block"));
  }
});
