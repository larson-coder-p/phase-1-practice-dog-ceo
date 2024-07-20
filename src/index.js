console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const imageUrl = 'https://example.com/images'; // Replace with your image URL

    // Fetch images from the URL
    fetch(imageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Assuming `data` is an array of image URLs
            data.forEach(imageUrl => {
                // Create an img element
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = 'Image';

                // Append the img element to the container
                imageContainer.appendChild(img);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
