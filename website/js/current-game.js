document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('game-corner-container');
    const button = document.getElementById('game-corner-button');
    const panel = document.querySelector('.game-corner-panel');

    button.addEventListener('click', function() {
        container.classList.toggle('open');
    });

    // Close panel when clicking outside
    document.addEventListener('click', function(event) {
        if (!container.contains(event.target) && container.classList.contains('open')) {
            container.classList.remove('open');
        }
    });

    // Prevent panel from closing when interacting with content
    panel.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
