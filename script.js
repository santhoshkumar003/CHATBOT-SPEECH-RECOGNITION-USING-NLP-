var speechButton = document.getElementById('speechButton');

speechButton.addEventListener('click', function() {
  startSpeechRecognition();
});

function startSpeechRecognition() {
  var recognition = new webkitSpeechRecognition() || SpeechRecognition();
  recognition.lang = 'en-US';

  recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    console.log('You said:', transcript);

    var url = 'https://www.google.co.in/search?q=' + encodeURIComponent(transcript);
    window.open(url, '_blank');
  };

  recognition.start();
}
