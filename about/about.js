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

// Add a click and touch event listener to each about-designer-number
designerNumbers.forEach(function (designerNumber) {
    function handleEvent(e) {
        // Prevent the window click/touch event from firing
        e.stopPropagation();

        // Get the corresponding about-designer-thumbnail
        var thumbnail = this.parentNode.parentNode.querySelector('.about-designer-thumbnail');

        // Center the thumbnail
        thumbnail.style.position = 'fixed';
        thumbnail.style.top = '50%';
        thumbnail.style.left = '50%';
        thumbnail.style.transform = 'translate(-50%, -50%)';
        thumbnail.style.zIndex = '1000';
    }

    designerNumber.addEventListener('click', handleEvent);
    designerNumber.addEventListener('touchend', handleEvent);
});

// Add a click and touch event listener to the window to hide the image
function hideImage() {
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
}

window.addEventListener('click', hideImage);
window.addEventListener('touchend', hideImage);