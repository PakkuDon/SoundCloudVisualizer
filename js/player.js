function Player(audio, canvas) {
    var self = this;
    var history = [];
    var intervalID = null;

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

        // Add song to history
        // If song already in history, pop entry 
        // so it can be moved to the end
        for (var i = 0; i < history.length; i++) {
            if (history[i].id == sound.id) {
                history.splice(i, 1);
                break;
            }
        }
        history.push(sound);

        // Play track
        audio.setAttribute("src", streamUrl);
        audio.crossOrigin = "anonymous";
        audio.play();

        // Update UI if AudioContext available
        if (typeof analyser !== "undefined") {
            // Clear previous animation interval
            if (intervalID !== null) {
                clearInterval(intervalID);
            }

            intervalID = setInterval(function() {
                self.visualizer.draw();
            }, 20);
        }
    }

    this.getHistory = function() {
        return history;
    }
};
