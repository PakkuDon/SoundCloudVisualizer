// Initialise components and register event handlers
window.onload = function(e) {
    // Get required elements and create Player instance
    var audioElement = document.getElementById("player");
    var canvas = document.getElementById("visualizer");
    var thumbnail = document.getElementById("thumbnail");
    var artist = document.getElementById("artist");
    var title = document.getElementById("title");

    var player = new Player(audioElement, canvas,
                            thumbnail, artist, title);

    // Load and play song on submit
    var form = document.getElementById("player-form");
    form.onsubmit = function(e) {
        e.preventDefault();
        var url = document.getElementById("track-url").value;
        player.play(url);
    }

    // Hide/show form
    var toggleFormBtn = document.getElementById("toggle-form-btn");
    toggleFormBtn.onclick = function(e) {
        var container = document.getElementById("collapsible-container");
        if (container.style.display === "none") {
            container.style.display = "block";
            toggleFormBtn.innerHTML = "&#9660;";
        }
        else {
            container.style.display = "none";
            toggleFormBtn.innerHTML = "&#9650;";
        }
    }
};
