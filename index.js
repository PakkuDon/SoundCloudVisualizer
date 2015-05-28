// Register event handlers
window.onload = function(e) {
    // Get required elements and create Player instance
    var audioElement = document.getElementById("player");
    var canvas = document.getElementById("visualizer");
    var thumbnail = document.getElementById("thumbnail");
    var artist = document.getElementById("artist");
    var title = document.getElementById("title");

    var player = new Player(audioElement, canvas,
                            thumbnail, artist, title);

    var form = document.getElementById("player-form");
    form.onsubmit = function(e) {
        e.preventDefault();
        var url = document.getElementById("track-url").value;
        player.play(url);
    }
};
