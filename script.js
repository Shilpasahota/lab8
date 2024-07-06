// Function to fetch a random cat image from the API
async function fetchCatImage() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const imageData = await response.json();
        displayCatImage(imageData[0].url);
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

// Function to display the fetched cat image on the webpage
function displayCatImage(imageUrl) {
    const catImageElement = document.getElementById('catImage');
    catImageElement.src = imageUrl;
}