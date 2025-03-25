function startCountdown(targetDate) {
  const timerItems = document.querySelectorAll('.time');

  function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      timerItems.forEach((item) => (item.textContent = '00'));
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timerItems[0].textContent = days.toString().padStart(2, '0');
    timerItems[1].textContent = hours.toString().padStart(2, '0');
    timerItems[2].textContent = minutes.toString().padStart(2, '0');
    timerItems[3].textContent = seconds.toString().padStart(2, '0');
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

const targetDate = new Date(2025, 5, 25, 10, 0, 0).getTime();
startCountdown(targetDate);
