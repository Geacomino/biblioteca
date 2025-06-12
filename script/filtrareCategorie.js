function getCategorieDinURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('cat'); // ex: beletristica
}

fetch('carti.json')
  .then(response => response.json())
  .then(carti => {
    const container = document.getElementById('carti-container');
    const categorieDorită = getCategorieDinURL();

    if (!categorieDorită) {
      container.innerHTML = "<p>Nu a fost selectată nicio categorie.</p>";
      return;
    }

    const cartiFiltrate = carti.filter(carte => 
      carte.categorie && carte.categorie.toLowerCase() === categorieDorită.toLowerCase()
    );

    if (cartiFiltrate.length === 0) {
      container.innerHTML = `<p>Nu am găsit cărți pentru categoria: <strong>${categorieDorită}</strong></p>`;
      return;
    }

    cartiFiltrate.forEach(carte => {
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
      const autorEncoded = encodeURIComponent(carte.autor);
      const titluEncoded = encodeURIComponent(carte.titlu);
      btn.href = `index.html?autor=${autorEncoded}&titlu=${titluEncoded}#solicitare`;
      btn.textContent = 'Solicită cartea';
      card.appendChild(btn);

      container.appendChild(card);
    });
  });
