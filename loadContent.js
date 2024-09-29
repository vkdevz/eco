// Function to load content into specified element by id
function loadContent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error('Error loading content:', error));
}

// Load header and footer
document.addEventListener('DOMContentLoaded', function () {
    loadContent('header', 'header.html');
    loadContent('footer', 'footer.html');
});
