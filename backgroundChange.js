const colors = ["red", "blue", "green", "yellow"];
var x;
let index = 0;
function backgroundChange() {
  // let index = 0;
  document.body.style.background = ` ${colors[index]}`;
  index++;
  x = setInterval(() => {
    if (index >= colors.length) {
      index = 0;
    }
    document.body.style.background = `${colors[index]}`;
    index++;
  }, 2000);
}
function stop() {
  clearInterval(x);
  index = 0;
}

function start() {
  stop();

  backgroundChange(colors);
}

function pause() {
  clearInterval(x);
}
