var arrow = document.getElementById("arrow");
var lp = document.getElementById("lightpost");

function nextEscapeRoomPage() {
  const fade = document.getElementById("screenFade");

  // play the steps sound during fade
  const stepsSound = new Audio("Audio/steps.mp3"); // make sure the path is correct
  stepsSound.play();

  // fade the screen to black
  fade.style.opacity = "1";

  // after fade completes + extra delay → go to next page
  setTimeout(() => {
    window.location.href = "https://4mjpjs.csb.app/";
  }, 5000); // adjust to match fade duration
}

function showModal() {
  const modal = document.getElementById("imagemodal");
  const thought = document.getElementById("thoughtText");
  const modalSound = document.getElementById("modalSound");

  modal.style.display = "flex";

  if (modalSound) {
    modalSound.currentTime = 0; // resets sound
    modalSound.play().catch((err) => console.log("Sound play blocked:", err));
  }

  // fade-in modal background
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);

  // --- DELAY BEFORE THOUGHT APPEARS ---
  setTimeout(() => {
    thought.style.opacity = "1"; // fade-in thought
  }, 800); // delay in milliseconds (0.8 seconds)

  // --- AUTO DISAPPEAR AFTER 3 SECONDS ---
  setTimeout(() => {
    thought.style.opacity = "0"; // fade-out thought
  }, 3800); // 800ms delay + 3000ms visible
}

function closeModal() {
  const modal = document.getElementById("imagemodal");
  const thought = document.getElementById("thoughtText");

  // fade out immediately if click close
  modal.classList.remove("show");
  thought.style.opacity = "0";

  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  if (!music) {
    console.log("No element with id='bgMusic' found");
    return;
  }

  music.volume = 0.6; // adjust volume (0 to 1)

  // Start music on first user interaction
  const startMusic = () => {
    music
      .play()
      .then(() => {
        console.log("Background music playing");
      })
      .catch((err) => {
        console.log("Play failed:", err);
      });

    // Only need this once
    document.removeEventListener("click", startMusic);
    document.removeEventListener("keydown", startMusic);
  };

  document.addEventListener("click", startMusic);
  document.addEventListener("keydown", startMusic);
});
