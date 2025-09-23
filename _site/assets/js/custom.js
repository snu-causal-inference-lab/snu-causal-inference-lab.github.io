document.addEventListener("DOMContentLoaded", function() {
  const researchPage = document.querySelector(".research-page");
  if (!researchPage) return;

  researchPage.querySelectorAll(".research-entry").forEach(function(card) {
    const abstract = card.querySelector(".abstract-text");
    const toggle = card.querySelector(".toggle-abstract");

    // initialize
    toggle.textContent = "▸ Read more";

    card.addEventListener("click", function(e) {
      // prevent double toggle if the user explicitly clicks links inside card
      if (e.target.tagName === "A") return;

      if (abstract.classList.contains("expanded")) {
        abstract.classList.remove("expanded");
        toggle.textContent = "▸ Read more";
      } else {
        abstract.classList.add("expanded");
        toggle.textContent = "▴ Collapse";
      }
    });
  });
});
