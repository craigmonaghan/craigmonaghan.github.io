// this is chatgeepeetee. this is purely for a joke.
const targetDate = new Date("2025-08-12T23:59:59");

    function updateCountdown() {
      const now = new Date();
      const timeDiff = targetDate - now;

      if (timeDiff <= 0) {
        document.getElementById("countdown").innerHTML = "It's time!";
        clearInterval(timer);
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);

      document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown(); // initial call
    const timer = setInterval(updateCountdown, 1000); // update every second