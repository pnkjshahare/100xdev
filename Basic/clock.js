const readline = require('readline');

function clearLine() {
  readline.cursorTo(process.stdout, 0);
  readline.clearLine(process.stdout, 0);
}

function displayTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  clearLine();
  process.stdout.write(timeString);
}

setInterval(displayTime, 1000);