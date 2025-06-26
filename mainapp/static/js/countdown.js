document.addEventListener("DOMContentLoaded", () => {
  const countdown = document.getElementById("countdown");

  // Set your event date and time in UTC (24-hour format)
  const eventDateUTC = new Date(Date.UTC(2025, 9, 20, 0, 0, 0)); 
  // Month is zero-based: 9 = October

  const updateCountdown = () => {
    const now = new Date(); // Local time
    const nowUTC = new Date(now.toUTCString()); // Convert to UTC
    const distance = eventDateUTC - nowUTC;

    if (distance < 0) {
      countdown.innerHTML = "The event has started!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  setInterval(updateCountdown, 1000);
  updateCountdown();
});
