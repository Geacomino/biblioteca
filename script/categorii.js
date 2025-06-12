fetch('carti.json')
  .then(res => res.json())
  .then(carti => {
    const categoriiUnice = [...new Set(carti.map(c => c.categorie))];
    const container = document.getElementById('categorii-container');

    categoriiUnice.forEach(categorie => {
      const sectiune = document.createElement('section');
      sectiune.innerHTML = `<h2>${categorie}</h2>`;
      const cartiFiltrate = carti.filter(c => c.categorie === categorie);
      const grid = document.createElement('div');
      grid.classList.add('carti-grid');

      cartiFiltrate.forEach(carte => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${carte.imagine}" alt="${carte.titlu}">
          <div class="card-info">
            <h3>${carte.titlu}</h3>
            <p>${carte.autor}</p>
            <a class="solicita-btn" href="index.html?autor=${encodeURIComponent(carte.autor)}&titlu=${encodeURIComponent(carte.titlu)}#solicitare">Solicită cartea</a>
          </div>
        `;
        grid.appendChild(card);
      });

      sectiune.appendChild(grid);
      container.appendChild(sectiune);
    });
  });
