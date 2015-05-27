// Register event handlers
window.onload = function(e) {
    var audioElement = document.getElementById("player");
    var player = new Player(audioElement);
    var form = document.getElementById("player-form");
    form.onsubmit = function(e) {
        e.preventDefault();
        var url = document.getElementById("track-url").value;
        player.play(url);
    }
};