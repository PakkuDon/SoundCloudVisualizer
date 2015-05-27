var clientID = "4db236383438b2ebbe8e4f151e1c1b59";
SC.initialize({
    client_id: clientID
});

function Player(audio, canvas) {
    this.play =  function(trackUrl) {
        // Retrieve stream URL associated with given track
        SC.get("/resolve", { url : trackUrl }, function(sound) {
            var streamUrl = sound.stream_url + "?client_id=" + clientID;

            // Play track
            audio.setAttribute("src", streamUrl);
            audio.crossOrigin = "anonymous";
            audio.play();

            // Set up audio context and analyser
            var streamData = new Uint8Array(128);
            var audioCtx = new (window.AudioContext || window.webkitAudioContext);
            var analyser = audioCtx.createAnalyser();
            var source = audioCtx.createMediaElementSource(player);
            source.connect(analyser);
            analyser.connect(audioCtx.destination);

            // Set up graphics context
            var graphics = canvas.getContext("2d");
            graphics.strokeStyle = "#69C";

            // Calculate values used when drawing values
            var width = canvas.width;
            var height = canvas.height;
            var gridWidth = width / streamData.length;
            var gridHeight = height / 256;

            setInterval(function() {
                analyser.getByteFrequencyData(streamData);
                graphics.clearRect(0, 0, width, height);

                for (var i = 0; i < streamData.length; i++) {
                    var value = streamData[i];
                    graphics.beginPath();
                    graphics.moveTo(i * gridWidth, height - gridHeight * value);
                    graphics.lineTo((i + 1) * gridWidth, height - gridHeight * value);
                    graphics.stroke();
                    graphics.closePath();
                }
            }, 20);
        });
    }
};