angular.module('scvServices').factory('audio', function() {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext);
    var analyser = null;
    
    return {
        getAnalyser: function() {
            if (audioCtx && analyser === null) {
                var audioElem = document.querySelector('audio');
                var source = audioCtx.createMediaElementSource(audioElem);
                analyser = audioCtx.createAnalyser();
                source.connect(analyser);
                analyser.connect(audioCtx.destination);
            }
            return analyser;
        }
    };
});