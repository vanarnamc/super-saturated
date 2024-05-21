// Detect if photos should appear above or below
function checkThumbnailPosition(e) {
    const container = document.querySelector('.container');
    if (e.clientY > window.innerHeight / 2) {
        container.dataset.thumbnail = "above";
    } else {
        container.dataset.thumbnail = "below";
    }
}
window.addEventListener('mousemove', checkThumbnailPosition);

// Get all the about-designer-number elements
var designerNumbers = document.querySelectorAll('.about-designer-number');

// Add a click event listener to each about-designer-number
designerNumbers.forEach(function (designerNumber) {
    designerNumber.addEventListener('click', function (e) {
        // Prevent the window click event from firing
        e.stopPropagation();

        // Get the corresponding about-designer-thumbnail
        var thumbnail = this.parentNode.parentNode.querySelector('.about-designer-thumbnail');

        // Center the thumbnail
        thumbnail.style.position = 'fixed';
        thumbnail.style.top = '50%';
        thumbnail.style.left = '50%';
        thumbnail.style.transform = 'translate(-50%, -50%)';
        thumbnail.style.zIndex = '1000';
    });
});

// Add a click event listener to the window to hide the image
window.addEventListener('click', function () {
    // Get all the about-designer-thumbnail elements
    var thumbnails = document.querySelectorAll('.about-designer-thumbnail');

    // Reset the style of each thumbnail
    thumbnails.forEach(function (thumbnail) {
        thumbnail.style.position = '';
        thumbnail.style.top = '';
        thumbnail.style.left = '';
        thumbnail.style.transform = '';
        thumbnail.style.zIndex = '';
    });
});