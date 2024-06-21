document.addEventListener('DOMContentLoaded', function() {
  const appListDiv = document.getElementById('appList');
  const loadingDiv = document.getElementById('loading');

  async function fetchData() {
    loadingDiv.style.display = 'block';

    try {
      const response = await fetch('https://api.example.com/apps');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      displayAppList(data);
    } catch (error) {
      console.error('Houve um problema com a requisição Fetch:', error);
      appListDiv.innerHTML = '<p>Erro ao carregar os dados.</p>';
    } finally {
      loadingDiv.style.display = 'none';
    }
  }

  function displayAppList(apps) {
    appListDiv.innerHTML = '';

    apps.forEach(app => {
      const appDiv = document.createElement('div');
      appDiv.classList.add('app');

      const nameElement = document.createElement('h2');
      nameElement.textContent = app.name;

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = app.description;

      const versionElement = document.createElement('p');
      versionElement.textContent = `Versão: ${app.version}`;

      const downloadLinkElement = document.createElement('p');
      const downloadLink = document.createElement('a');
      downloadLink.textContent = 'Download';
      downloadLink.href = app.downloadUrl;
      downloadLink.setAttribute('target', '_blank');
      downloadLinkElement.appendChild(downloadLink);

      appDiv.appendChild(nameElement);
      appDiv.appendChild(descriptionElement);
      appDiv.appendChild(versionElement);
      appDiv.appendChild(downloadLinkElement);

      appListDiv.appendChild(appDiv);
    });
  }

  fetchData();
});
