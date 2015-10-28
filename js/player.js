function Player(audio, canvas) {
    var self = this;

    // Set up audio context and analyser
    var audioCtx = new (window.AudioContext || window.webkitAudioContext);
    if (audioCtx) {
        var analyser = audioCtx.createAnalyser();
        var source = audioCtx.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
    }
    // TODO: Display error message if user's browser does not support Web Audio API

    // Set up visualizer
    var graphics = canvas.getContext("2d");
    self.visualizer = new Visualizer(graphics, analyser);

    this.play =  function(sound) {
        var streamUrl = sound.stream_url + "?client_id=" + API.clientID;

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
    }
};
