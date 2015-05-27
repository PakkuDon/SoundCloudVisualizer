var clientID = "4db236383438b2ebbe8e4f151e1c1b59";
SC.initialize({
    client_id: clientID
});

function Player(audio) {
    this.play =  function(trackUrl) {
        SC.get("/resolve", { url : trackUrl }, function(sound) {
            var streamUrl = sound.stream_url + "?client_id=" + clientID;

            audio.setAttribute("src", streamUrl);
            audio.crossOrigin = "anonymous";
            audio.play();
        });
    }
};