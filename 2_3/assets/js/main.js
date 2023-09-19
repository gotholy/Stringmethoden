function highlightWord() {
  // Das Wort, das gesucht werden soll
  const searchWord = document.getElementById("search-input").value;

  // Das Artikel-Element, in dem wir suchen möchten
  const article = document.querySelector("article");

  // Regulärer Ausdruck, um das gesuchte Wort global (überall) zu finden
  const regex = new RegExp(searchWord, "gi"); // "gi" = "g" finde alle wörter höre nicht nach dem ersten auf. "i" case-sensitive

  // Den Text des Artikels abrufen
  const articleText = article.innerText;

  // Das gesuchte Wort durch ein <span> mit der CSS-Klasse "highlight" ersetzen
  const highlightedText = articleText.replace(regex, (match) => {
    return `<span class="highlight">${match}</span>`;
  });

  // Den HTML-Inhalt des Artikels mit dem hervorgehobenen Text aktualisieren
  article.innerHTML = highlightedText;
}

// Den Event-Listener für den Such-Button hinzufügen
document
  .getElementById("search-button")
  .addEventListener("click", highlightWord);
