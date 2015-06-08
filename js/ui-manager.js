function UIManager(container, notifications, recentlyPlayed, thumbnail, artist, title, genre) {
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

    // Adds a message to the designated notifications container
    this.showNotification = function(header, message) {
        var notification = document.createElement("div");
        notification.className = "message";

        var headerElement = document.createElement("div");
        headerElement.innerHTML = header;
        var messageElement = document.createElement("div");
        messageElement.innerHTML = message;

        notification.appendChild(headerElement);
        notification.appendChild(messageElement);
        notifications.appendChild(notification);
    }

    // Adds song to list of recently played tracks
    this.addToHistory = function(sound) {
        var trackElement = document.createElement("div");
        var artist = document.createElement("div");
        var title = document.createElement("div");
        var genre = document.createElement("div");
        var trackUrl = document.createElement("div");

        // Set attributes of containing elements
        trackElement.className = "track";
        artist.className = "track-artist";
        title.className = "track-title";
        genre.className = "track-genre";
        trackUrl.className = "track-url";

        // Set values of sub-elements
        artist.innerHTML = sound.user.username;
        title.innerHTML = sound.title;
        genre.innerHTML = sound.genre;
        trackUrl.innerHTML = sound.permalink_url;

        // Add entry to document
        trackElement.appendChild(artist);
        trackElement.appendChild(title);
        trackElement.appendChild(genre);
        trackElement.appendChild(trackUrl);
        recentlyPlayed.appendChild(trackElement);
    }
}
