function getImage() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setImage(data))
}
function setImage(photos) {
    const photoAlbum = document.getElementById('photo-album');
    for (const photo of photos) {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = `<img src="${photo.url}" style="width:200px; height=200px;">`;
        photoAlbum.appendChild(paragraph);
    }
}
getImage();