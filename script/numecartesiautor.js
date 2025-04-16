document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const autor = params.get('autor');
  const titlu = params.get('titlu');

  if (autor && titlu) {
    const inputAutor = document.querySelector('#solicitare input[name="autor"]');
    if (inputAutor) {
      inputAutor.value = `${autor} - ${titlu}`;
    }

    // Scroll automat la formular
    const formSection = document.querySelector('#solicitare');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

