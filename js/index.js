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

    var uiManager = new UIManager(container, notifications, thumbnail, artist, title, genre);
    var player = new Player(audioElement, canvas, uiManager);

    // Display error message if user's browser does not support Web Audio API
    if (!(window.AudioContext || window.webkitAudioContext)) {
        uiManager.showNotification("Visualizer disabled", "Your browser does not support the Web Audio API");
    }

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

    // Hide/show form
    var toggleFormBtn = document.getElementById("toggle-form-btn");
    toggleFormBtn.onclick = function(e) {
        uiManager.toggleControls(e);
    }
};
