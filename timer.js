const refs = {
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
  timerFace: document.getElementById("timer-1"),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  setInt = setInterval(() => {
    const nowDate = Date.now();
    const time = this.targetDate - nowDate;
    this.updateClockface(time);
    this.timeNewYear(time);
  }, 1000);

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
    // C.P.refs.clockface.textContent = '${days}:${hours}:${mins}:${secs}';
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
  timeNewYear(time) {
    if (time < 0) {
      clearInterval(this.setInt);
      refs.timerFace.textContent = "Happy new year";//????
    }
  }
};
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 1, 2021"),
});
  
  
  
  
  //вариант ребят
  /* class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
    this.days = document.querySelector(
      `${this.selector} span[data-value="days"]`
    );
    this.hours = document.querySelector(
      `${this.selector} span[data-value="hours"]`
    );
    this.mins = document.querySelector(
      `${this.selector} span[data-value="mins"]`
    );
    this.secs = document.querySelector(
      `${this.selector} span[data-value="secs"]`
    );
    this.start();
  }

  timerUpdate(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");

    const secs = Math.floor((time % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }

  start() {
    setInterval(() => {
      const delta = this.targetDate - Date.now();
      this.timerUpdate(delta);
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 25, 2021"),
});*/



