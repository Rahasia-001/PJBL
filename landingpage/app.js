document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById("searchInput");
  const box = document.getElementById("suggestions");

  function clearSuggestions() {
    box.innerHTML = "";
    box.style.display = "none";
  }

  function showSuggestions(items) {
    box.innerHTML = "";
    if (items.length === 0) {
      clearSuggestions();
      return;
    }
    box.style.display = "block";
    items.forEach(m => {
      const item = document.createElement("div");
      item.className = "suggestion-item";
      item.tabIndex = 0;
      item.textContent = m.title;

      item.addEventListener("click", () => {
        window.location.href = m.file;
      });

      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter") window.location.href = m.file;
      });

      box.appendChild(item);
    });
  }

  input.addEventListener("input", function () {
    const q = this.value.trim().toLowerCase();
    if (!q) {
      clearSuggestions();
      return;
    }

    const matches = articles
      .filter(a => a.title.toLowerCase().includes(q))
      .slice(0, 7); // batasi jumlah sugesti

    showSuggestions(matches);
  });

  // hilangkan suggestions saat klik di luar
  document.addEventListener("click", (e) => {
    if (!e.target.closest('.search-wrap')) clearSuggestions();
  });
});