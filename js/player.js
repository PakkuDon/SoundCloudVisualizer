var clientID = "4db236383438b2ebbe8e4f151e1c1b59";
SC.initialize({
    client_id: clientID
});

function Player(audio, canvas, uiManager) {
    var self = this;

    // Set up audio context and analyser
    var audioCtx = new (window.AudioContext || window.webkitAudioContext);
    if (audioCtx) {
        var analyser = audioCtx.createAnalyser();
        var source = audioCtx.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
    }
    // Display error message if user's browser does not support Web Audio API
    else {
        uiManager.showNotification("Visualizer disabled",
            "Your browser does not support the Web Audio API");
    }

    // Set up visualizer
    var graphics = canvas.getContext("2d");
    self.visualizer = new Visualizer(graphics, analyser);

    this.play =  function(trackUrl) {
        // Retrieve stream URL associated with given track
        SC.get("/resolve", { url : trackUrl }, function(sound) {
            var streamUrl = sound.stream_url + "?client_id=" + clientID;

            // Display track details
            uiManager.displaySoundInformation(sound);

            // Play track
            audio.setAttribute("src", streamUrl);
            audio.crossOrigin = "anonymous";
            audio.play();

            // Update UI if AudioContext available
            if (typeof analyser !== "undefined") {
                setInterval(function() {
                    self.visualizer.draw();
                }, 20);
            }
        });
    }
};
