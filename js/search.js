const openSearch = document.getElementById("openSearch");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

openSearch.addEventListener("click", () => {
  searchOverlay.style.display = "flex";
  searchInput.focus();
});

closeSearch.addEventListener("click", closeSearchBox);

// tap outside → close (մոբայլի համար 🔥)
searchOverlay.addEventListener("click", (e) => {
  if (e.target === searchOverlay) {
    closeSearchBox();
  }
});

// ESC → close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSearchBox();
  }
});

function closeSearchBox() {
  searchOverlay.style.display = "none";
  searchInput.value = "";
  clearHighlights();
}

/* SEARCH LOGIC */
searchInput.addEventListener("input", () => {
  clearHighlights();
  const text = searchInput.value.toLowerCase();
  if (!text) return;

  let firstMatch = null;

  document.querySelectorAll("body *").forEach(el => {
    if (
      el.children.length === 0 &&
      el.textContent.toLowerCase().includes(text)
    ) {
      el.innerHTML = el.textContent.replace(
        new RegExp(text, "gi"),
        match => `<span class="highlight">${match}</span>`
      );

      if (!firstMatch) {
        firstMatch = el;
      }
    }
  });

  // 👉 ավտոմատ տանում է առաջին հանդիպման վրա
  if (firstMatch) {
    setTimeout(() => {
      firstMatch.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 100);
  }
});

function clearHighlights() {
  document.querySelectorAll(".highlight").forEach(span => {
    span.replaceWith(span.textContent);
  });
}
openSearch.addEventListener("click", () => {
  searchOverlay.style.display = "flex";
  document.body.style.overflow = "hidden"; // 🔒 scroll off
  searchInput.focus();
});

function closeSearchBox() {
  searchOverlay.style.display = "none";
  document.body.style.overflow = ""; // 🔓 scroll on
  searchInput.value = "";
  clearHighlights();
}