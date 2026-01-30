const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

// Press "/" to focus search
document.addEventListener("keydown", e => {
  if (e.key === "/") {
    e.preventDefault();
    search.focus();
  }
});
