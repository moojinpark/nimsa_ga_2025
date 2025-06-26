document.addEventListener("DOMContentLoaded", () => {
  const countdown = document.getElementById("countdown");

  const eventDateUTC = Date.parse("2025-10-20T00:00:00Z"); // Oct 20, 2025 @ 00:00 UTC

  const updateCountdown = () => {
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
  };

  updateCountdown(); // Run immediately
  setInterval(updateCountdown, 1000); // Then every second
});
