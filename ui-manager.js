function UIManager(container, notifications, thumbnail, artist, title, genre) {
    // Display details about selected track
    this.displaySoundInformation = function(sound) {
        thumbnail.innerHTML = '<a href="' + sound.permalink_url + '">'
        + '<img src="' + sound.artwork_url + '" alt="View on SoundCloud"/>'
        + '</a>';
        artist.innerHTML = sound.user.username;
        title.innerHTML = sound.title;
        genre.innerHTML = sound.genre;
    }

    // Hide / Show player container and update button's text
    this.toggleControls = function(e) {
        if (container.style.display === "none") {
            container.style.display = "block";
            e.target.innerHTML = "&#9660;";
        }
        else {
            container.style.display = "none";
            e.target.innerHTML = "&#9650;";
        }
    }
}
