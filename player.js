var clientID = "4db236383438b2ebbe8e4f151e1c1b59";
SC.initialize({
    client_id: clientID
});

function Player(audio, canvas, thumbnail, artist, title) {
    var self = this;

    // Set up audio context and analyser
    var audioCtx = new (window.AudioContext || window.webkitAudioContext);
    var analyser = audioCtx.createAnalyser();
    var source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    // Set up visualizer
    var graphics = canvas.getContext("2d");
    self.visualizer = new Visualizer(graphics, analyser);

    this.play =  function(trackUrl) {
        // Retrieve stream URL associated with given track
        SC.get("/resolve", { url : trackUrl }, function(sound) {
            var streamUrl = sound.stream_url + "?client_id=" + clientID;

            // Display track details
            thumbnail.innerHTML = '<img src="' + sound.artwork_url + '"/>';
            artist.innerHTML = sound.user.username;
            title.innerHTML = sound.title;

            // Play track
            audio.setAttribute("src", streamUrl);
            audio.crossOrigin = "anonymous";
            audio.play();

            // Update UI as song plays
            setInterval(function() {
                self.visualizer.draw();
            }, 20);
        });
    }
};
