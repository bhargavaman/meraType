const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = "hi-IN";

recognition.onstart = () => {
  //Do something when the recorder starts to listen
};

recognition.onresult = event => {
  const currentText = event.resultIndex;

  const transcript = event.results[currentText][0].transcript;
  content.textContent = transcript;
  btn.classList.remove("is-loading");
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
  btn.classList.add("is-loading");
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  speech.lang = "hi-IN";

  window.speechSynthesis.speak(speech);
}
