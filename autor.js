function getAutorDinURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('nume');
}

fetch('carti.json')
  .then(response => response.json())
  .then(carti => {
    const autor = getAutorDinURL();
    const container = document.getElementById('carti-autor');
    const titlu = document.getElementById('titlu-autor');

    if (!autor) {
      container.innerHTML = "<p>Autorul nu este specificat în URL.</p>";
      return;
    }

    const cartiAutor = carti.filter(carte =>
      carte.autor && carte.autor.toLowerCase() === autor.toLowerCase()
    );

    titlu.textContent = `Cărți scrise de: ${autor}`;

    if (cartiAutor.length === 0) {
      container.innerHTML = "<p>Nu am găsit nicio carte pentru acest autor.</p>";
      return;
    }

    cartiAutor.forEach(carte => {
      const card = document.createElement('div');
      card.classList.add('card');

      const img = document.createElement('img');
      img.src = carte.imagine;
      img.alt = carte.titlu;
      card.appendChild(img);

      const info = document.createElement('div');
      info.classList.add('card-info');
      info.innerHTML = `<h3>${carte.titlu}</h3><p>${carte.autor}</p>`;
      card.appendChild(info);

      const btn = document.createElement('a');
      btn.classList.add('solicita-btn');
      btn.href = `index.html?autor=${encodeURIComponent(carte.autor)}&titlu=${encodeURIComponent(carte.titlu)}#solicitare`;
      btn.textContent = 'Solicită cartea';
      card.appendChild(btn);

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Eroare la citirea JSON-ului:", err);
  });
