function filterTeam(role) {
  const cards = document.querySelectorAll(".team-card");
  cards.forEach((card) => {
    if (role === "All" || card.getAttribute("data-role") === role) {
      card.parentElement.style.display = "flex";
    } else {
      card.parentElement.style.display = "none";
    }
  });
}

function viewCard(button) {
  const allCards = document.querySelectorAll(".card-wrapper");
  allCards.forEach((card) => {
    card.style.display = "none";
  });

  const currentCard = button.closest(".card-wrapper");
  currentCard.style.display = "flex";
}
