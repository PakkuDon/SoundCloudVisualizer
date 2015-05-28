var clientID = "4db236383438b2ebbe8e4f151e1c1b59";
SC.initialize({
    client_id: clientID
});

function Player(audio, canvas, thumbnail, artist, title) {
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

            // Set up audio context and analyser
            var audioCtx = new (window.AudioContext || window.webkitAudioContext);
            var analyser = audioCtx.createAnalyser();
            var source = audioCtx.createMediaElementSource(player);
            source.connect(analyser);
            analyser.connect(audioCtx.destination);

            analyser.fftSize = 256;
            var bufferLength = analyser.frequencyBinCount;
            var streamData = new Uint8Array(bufferLength);

            // Set up graphics context
            var graphics = canvas.getContext("2d");
            graphics.strokeStyle = "#69C";

            // Set values used when drawing audio data
            var width = canvas.width;
            var height = canvas.height;
            var gridWidth = width / bufferLength;
            var gridHeight = 2;

            // Update UI as song plays
            setInterval(function() {
                analyser.getByteFrequencyData(streamData);
                graphics.clearRect(0, 0, width, height);

                for (var i = 0; i < bufferLength; i++) {
                    var value = streamData[i];
                    var barHeight = height - gridHeight * value;

                    graphics.beginPath();
                    graphics.moveTo(i * gridWidth, barHeight);
                    graphics.lineTo((i + 1) * gridWidth, barHeight);
                    graphics.stroke();
                    graphics.closePath();
                }
            }, 20);
        });
    }
};
