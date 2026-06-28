// Torikul TV Premium

document.addEventListener("DOMContentLoaded", () => {

  const search = document.querySelector(".search");
  const cards = document.querySelectorAll(".card");

  search.addEventListener("keyup", () => {
    const value = search.value.toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();

      if (title.includes(value)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });

});
