fetch('carti.json')
  .then(response => response.json())
  .then(carti => {
    const lista = document.getElementById('lista-autori');

    // extrage autorii unici
    const autoriUnici = [...new Set(carti.map(carte => carte.autor))].sort((a, b) =>
  a.localeCompare(b)
);

    autoriUnici.forEach(autor => {
      const li = document.createElement('li');
      const autorEncoded = encodeURIComponent(autor);
      li.innerHTML = `<a href="autor.html?nume=${autorEncoded}">${autor}</a>`;
      lista.appendChild(li);
    });
  })
  .catch(err => {
    console.error("Eroare la citirea JSON-ului:", err);
  });
