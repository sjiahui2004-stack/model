// bron: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

const pauseButton = document.querySelector("#pauseVideos");
const playButton = document.querySelector("#playVideos");
const videos = document.querySelectorAll("video");

// bron: https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
pauseButton.addEventListener("click", () => {
  videos.forEach((video) => {
    video.pause();
  });
});

// bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play

playButton.addEventListener("click", () => {
  videos.forEach((video) => {
    video.play();
  });
});

// bronnen:

// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript
