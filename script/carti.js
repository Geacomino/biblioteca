fetch('carti.json')
  .then(response => response.json())
  .then(carti => {
    const container = document.getElementById('carti-container');

    carti.forEach(carte => {
      const card = document.createElement('div');
      card.classList.add('card');

      // Creează imaginea
      const img = document.createElement('img');
      img.src = carte.imagine;
      img.alt = carte.titlu;
      card.appendChild(img);

      // Creează titlu și autor
      const info = document.createElement('div');
      info.classList.add('card-info');
      info.innerHTML = `<h3>${carte.titlu}</h3><p>${carte.autor}</p>`;
      card.appendChild(info);

      // Creează butonul de solicitare
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


 
