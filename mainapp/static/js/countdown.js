document.addEventListener("DOMContentLoaded", function () {
  const countdown = document.getElementById("countdown");
  if (!countdown) return;

  // Set your event date here (UTC)
  // Example: 2025-06-01T12:00:00Z => Date.UTC(2025, 5, 1, 12, 0, 0)
  const eventDateUTC = new Date(Date.UTC(2025, 5, 1, 12, 0, 0)).getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDateUTC - now;

    if (distance < 0) {
      countdown.innerHTML = "🎉 The event has started!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `⏳ Event starts in: <strong>${days}</strong> days <strong>${hours}</strong> hours <strong>${minutes}</strong> minutes <strong>${seconds}</strong> seconds`;
  }

  updateCountdown(); // Run immediately
  setInterval(updateCountdown, 1000); // Then every second
});
