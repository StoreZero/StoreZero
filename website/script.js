document.addEventListener('DOMContentLoaded', function() {
  const detailsDiv = document.getElementById('details');
  const loadingDiv = document.getElementById('loading');
  const fetchButton = document.getElementById('fetchButton');

  fetchButton.addEventListener('click', () => {
    const appId = document.getElementById('appId').value;
    if (appId) {
      fetchData(appId);
    } else {
      detailsDiv.innerHTML = '<p>Por favor, insira um ID válido.</p>';
    }
  });

  async function fetchData(id) {
    detailsDiv.innerHTML = '';
    loadingDiv.style.display = 'block';

    try {
      const response = await fetch(`https://store-zero.vercel.app/api/apps${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      displayData(data);
    } catch (error) {
      console.error('Houve um problema com a requisição Fetch:', error);
      detailsDiv.innerHTML = '<p>Erro ao carregar os dados.</p>';
    } finally {
      loadingDiv.style.display = 'none';
    }
  }

  function displayData(data) {
    const featuresList = data.features.map(feature => `<li>${feature}</li>`).join('');
    const html = `
      <p><strong>Título:</strong> ${data.title}</p>
      <p><strong>Descrição:</strong> ${data.description}</p>
      <p><strong>Versão:</strong> ${data.version}</p>
      <p><strong>Autor:</strong> ${data.author}</p>
      <p><strong>Data de Lançamento:</strong> ${data.releaseDate}</p>
      <p><strong>Funcionalidades:</strong></p>
      <ul>${featuresList}</ul>
    `;
    detailsDiv.innerHTML = html;
  }
});
