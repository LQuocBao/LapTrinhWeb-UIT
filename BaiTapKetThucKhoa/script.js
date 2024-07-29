const images = [
    { id: 1, title: 'Sunset', category: 'Nature', url: 'image/sunset.jpg' },
    { id: 2, title: 'Mountain', category: 'Nature', url: 'image/mountain.jpg' },
    { id: 3, title: 'City', category: 'Urban', url: 'image/city.jpg' },
    { id: 4, title: 'Forest', category: 'Nature', url: 'image/forest.jpg' },
    { id: 5, title: 'Building', category: 'Urban', url: 'image/building.jpg' },
];

window.onload = () => {
    displayImages(images);
};

function displayImages(imagesToDisplay) {
    const imageGallery = document.getElementById('imageGallery');
    imageGallery.innerHTML = '';
    imagesToDisplay.forEach(image => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        imageItem.innerHTML = `
            <img src="${image.url}" alt="${image.title}">
            <p>${image.title}</p>
        `;
        imageGallery.appendChild(imageItem);
    });
}

function filterImages() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filteredImages = images.filter(image => image.title.toLowerCase().includes(searchTerm));
    displayImages(filteredImages);
}

function filterByCategory(category) {
    const filteredImages = category === 'All' ? images : images.filter(image => image.category === category);
    displayImages(filteredImages);
}
