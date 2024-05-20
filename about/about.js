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