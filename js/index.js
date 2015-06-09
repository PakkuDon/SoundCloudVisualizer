// Initialise components and register event handlers
window.onload = function(e) {
    // Get elements required by components
    var audioElement = document.getElementById("player");
    var canvas = document.getElementById("visualizer");
    var container = document.getElementById("collapsible-container");
    var notifications = document.getElementById("notifications");
    var thumbnail = document.getElementById("thumbnail");
    var artist = document.getElementById("artist");
    var title = document.getElementById("title");
    var genre = document.getElementById("genre");
    var recentlyPlayed = document.getElementById("last-played");

    var uiManager = new UIManager(container, notifications, recentlyPlayed, thumbnail, artist, title, genre);
    var player = new Player(audioElement, canvas, uiManager);

    // Populate visualizations list
    var dropdown = document.getElementById("visualizer-dropdown");
    var visualizations = player.visualizer.strategies;
    for (var key in visualizations) {
        var option = document.createElement("option");
        option.value = key;
        option.innerHTML = visualizations[key].name;
        dropdown.appendChild(option);
    }

    // Set visualizer when option changes
    dropdown.onchange = function(e) {
        var optionValue = dropdown.options[dropdown.selectedIndex].value;
        player.visualizer.setStrategy(optionValue);
    }

    // Load and play song on submit
    var form = document.getElementById("player-form");
    form.onsubmit = function(e) {
        e.preventDefault();
        var url = document.getElementById("track-url").value;
        player.play(url);
    }

    // Hide/show audio player
    var toggleFormBtn = document.getElementById("toggle-form-btn");
    toggleFormBtn.onclick = function(e) {
        uiManager.toggleControls(e);
    }

    // Bind events to dynamically created elements
    document.addEventListener("click", function(e) {
        var source = e.target;
        // Play selected track from sidebar
        if (source.className.indexOf("track") >= 0) {
            // Retrieve associated song's SoundCloud url
            if (source.className !== "track") {
                source = source.parentElement;
            }
            var trackURL = source.getElementsByClassName("track-url")[0].innerHTML;

            player.play(trackURL);
        }

        // Remove parent element if delete button pressed
        else if (source.className === "delete-button") {
            var targetElement = source.parentElement;
            targetElement.parentElement.removeChild(targetElement);
        }
    });
};
