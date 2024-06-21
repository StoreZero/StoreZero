document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const appId = urlParams.get('id'); // Obtém o ID do app da URL

    if (appId) {
        const apiUrl = `https://store-zero.vercel.app/api/apps?id=${appId}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(appData => {
                if (appData) {
                    document.getElementById('app-logo').src = appData.logo;
                    document.getElementById('app-name').innerText = appData.name;
                    document.getElementById('app-company').innerText = appData.company;
                    document.getElementById('app-in-app-purchases').innerText = appData.inAppPurchases;
                    document.getElementById('app-rating').innerText = `${appData.rating}★`;
                    document.getElementById('app-reviews').innerText = appData.reviews;
                    document.getElementById('app-description').innerText = appData.description;
                    document.getElementById('app-category').innerText = appData.category;
                    document.getElementById('app-data-sharing').innerText = appData.dataSharing;
                    document.getElementById('app-data-collection').innerText = appData.dataCollection;
                } else {
                    console.error('App data not found');
                }
            })
            .catch(error => console.error('Error fetching the app data:', error));
    } else {
        console.error('No app ID provided in the URL');
    }
});