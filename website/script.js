document.addEventListener('DOMContentLoaded', function() {
  const detailsDiv = document.getElementById('details');
  const loadingDiv = document.getElementById('loading');

  async function fetchData() {
    try {
      const response = await fetch('https://store-zero.vercel.app/api/apps');
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
    const html = `
      <p><strong>Título:</strong> ${data.title}</p>
      <p><strong>Descrição:</strong> ${data.description}</p>
    `;
    detailsDiv.innerHTML = html;
  }

  fetchData();
});
