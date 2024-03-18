//create a synth and connect it to the main output (your speakers)
// const synth = new Tone.Synth().toDestination();
// synth.volume.value = -12;
var keyboardInput = false;
var isPlaying = false;
const KEYS = [
  "1",
  "!",
  "2",
  "@",
  "3",
  "4",
  "$",
  "5",
  "%",
  "6",
  "^",
  "7",
  "8",
  "•",
  "9",
  "(",
  "0",
  "q",
  "Q",
  "w",
  "W",
  "e",
  "E",
  "r",
  "t",
  "T",
  "y",
  "Y",
  "u",
  "i",
  "I",
  "o",
  "O",
  "p",
  "P",
  "a",
  "s",
  "S",
  "d",
  "D",
  "f",
  "g",
  "G",
  "h",
  "H",
  "j",
  "J",
  "k",
  "l",
  "L",
  "z",
  "Z",
  "x",
  "c",
  "C",
  "v",
  "V",
  "b",
  "B",
  "n",
  "m",
];

function preload() {
  players = new Array(61);
  players[0] = new Tone.Player(
    "piano-mp3-master/piano-mp3/C2.mp3"
  ).toDestination();
  players[1] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Db2.mp3"
  ).toDestination();
  players[2] = new Tone.Player(
    "piano-mp3-master/piano-mp3/D2.mp3"
  ).toDestination();
  players[3] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Eb2.mp3"
  ).toDestination();
  players[4] = new Tone.Player(
    "piano-mp3-master/piano-mp3/E2.mp3"
  ).toDestination();
  players[5] = new Tone.Player(
    "piano-mp3-master/piano-mp3/F2.mp3"
  ).toDestination();
  players[6] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Gb2.mp3"
  ).toDestination();
  players[7] = new Tone.Player(
    "piano-mp3-master/piano-mp3/G2.mp3"
  ).toDestination();
  players[8] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Ab2.mp3"
  ).toDestination();
  players[9] = new Tone.Player(
    "piano-mp3-master/piano-mp3/A2.mp3"
  ).toDestination();
  players[10] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Bb2.mp3"
  ).toDestination();
  players[11] = new Tone.Player(
    "piano-mp3-master/piano-mp3/B2.mp3"
  ).toDestination();

  players[12] = new Tone.Player(
    "piano-mp3-master/piano-mp3/C3.mp3"
  ).toDestination();
  players[13] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Db3.mp3"
  ).toDestination();
  players[14] = new Tone.Player(
    "piano-mp3-master/piano-mp3/D3.mp3"
  ).toDestination();
  players[15] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Eb3.mp3"
  ).toDestination();
  players[16] = new Tone.Player(
    "piano-mp3-master/piano-mp3/E3.mp3"
  ).toDestination();
  players[17] = new Tone.Player(
    "piano-mp3-master/piano-mp3/F3.mp3"
  ).toDestination();
  players[18] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Gb3.mp3"
  ).toDestination();
  players[19] = new Tone.Player(
    "piano-mp3-master/piano-mp3/G3.mp3"
  ).toDestination();
  players[20] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Ab3.mp3"
  ).toDestination();
  players[21] = new Tone.Player(
    "piano-mp3-master/piano-mp3/A3.mp3"
  ).toDestination();
  players[22] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Bb3.mp3"
  ).toDestination();
  players[23] = new Tone.Player(
    "piano-mp3-master/piano-mp3/B3.mp3"
  ).toDestination();

  players[24] = new Tone.Player(
    "piano-mp3-master/piano-mp3/C4.mp3"
  ).toDestination();
  players[25] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Db4.mp3"
  ).toDestination();
  players[26] = new Tone.Player(
    "piano-mp3-master/piano-mp3/D4.mp3"
  ).toDestination();
  players[27] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Eb4.mp3"
  ).toDestination();
  players[28] = new Tone.Player(
    "piano-mp3-master/piano-mp3/E4.mp3"
  ).toDestination();
  players[29] = new Tone.Player(
    "piano-mp3-master/piano-mp3/F4.mp3"
  ).toDestination();
  players[30] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Gb4.mp3"
  ).toDestination();
  players[31] = new Tone.Player(
    "piano-mp3-master/piano-mp3/G4.mp3"
  ).toDestination();
  players[32] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Ab4.mp3"
  ).toDestination();
  players[33] = new Tone.Player(
    "piano-mp3-master/piano-mp3/A4.mp3"
  ).toDestination();
  players[34] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Bb4.mp3"
  ).toDestination();
  players[35] = new Tone.Player(
    "piano-mp3-master/piano-mp3/B4.mp3"
  ).toDestination();

  players[36] = new Tone.Player(
    "piano-mp3-master/piano-mp3/C5.mp3"
  ).toDestination();
  players[37] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Db5.mp3"
  ).toDestination();
  players[38] = new Tone.Player(
    "piano-mp3-master/piano-mp3/D5.mp3"
  ).toDestination();
  players[39] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Eb5.mp3"
  ).toDestination();
  players[40] = new Tone.Player(
    "piano-mp3-master/piano-mp3/E5.mp3"
  ).toDestination();
  players[41] = new Tone.Player(
    "piano-mp3-master/piano-mp3/F5.mp3"
  ).toDestination();
  players[42] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Gb5.mp3"
  ).toDestination();
  players[43] = new Tone.Player(
    "piano-mp3-master/piano-mp3/G5.mp3"
  ).toDestination();
  players[44] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Ab5.mp3"
  ).toDestination();
  players[45] = new Tone.Player(
    "piano-mp3-master/piano-mp3/A5.mp3"
  ).toDestination();
  players[46] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Bb5.mp3"
  ).toDestination();
  players[47] = new Tone.Player(
    "piano-mp3-master/piano-mp3/B5.mp3"
  ).toDestination();

  players[48] = new Tone.Player(
    "piano-mp3-master/piano-mp3/C6.mp3"
  ).toDestination();
  players[49] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Db6.mp3"
  ).toDestination();
  players[50] = new Tone.Player(
    "piano-mp3-master/piano-mp3/D6.mp3"
  ).toDestination();
  players[51] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Eb6.mp3"
  ).toDestination();
  players[52] = new Tone.Player(
    "piano-mp3-master/piano-mp3/E6.mp3"
  ).toDestination();
  players[53] = new Tone.Player(
    "piano-mp3-master/piano-mp3/F6.mp3"
  ).toDestination();
  players[54] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Gb6.mp3"
  ).toDestination();
  players[55] = new Tone.Player(
    "piano-mp3-master/piano-mp3/G6.mp3"
  ).toDestination();
  players[56] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Ab6.mp3"
  ).toDestination();
  players[57] = new Tone.Player(
    "piano-mp3-master/piano-mp3/A6.mp3"
  ).toDestination();
  players[58] = new Tone.Player(
    "piano-mp3-master/piano-mp3/Bb6.mp3"
  ).toDestination();
  players[59] = new Tone.Player(
    "piano-mp3-master/piano-mp3/B6.mp3"
  ).toDestination();

  players[60] = new Tone.Player(
    "piano-mp3-master/piano-mp3/C7.mp3"
  ).toDestination();
}

function setup() {
  piano = new Nexus.Piano("#instrument", {
    size: [window.innerWidth * 0.99, window.innerHeight * 0.5],
    mode: "button", // 'button', 'toggle', or 'impulse'
    //piano key notes C2 to C7
    lowNote: 36,
    highNote: 96,
  });
  piano.colorize("accent", "gold");

  piano.on("change", function (v) {
    //only if key is pressed do we trigger a sound, not when it is released (prevents double-triggered notes)
    if (v.state == true) {
      players[v.note - 36].start();
      if (!keyboardInput && !isPlaying) {
        inputBox.value = inputBox.value + KEYS[v.note - 36];
      }
    }
  });

  playbutton = document.querySelector("button");
  playbutton.onclick = play;
  inputBox = document.querySelector("input");
}

function draw() {
  piano.resize(window.innerWidth * 0.99, max(window.innerHeight * 0.5, 250));
}

function keyPressed() {
  if (!isPlaying) {
    keyboardInput = true;
    try {
      piano.toggleIndex(KEYS.indexOf(key), true);
    } catch (e) {}
  }
}

document.addEventListener("keyup", (event) => {
  if (!isPlaying) {
    try {
      piano.toggleIndex(KEYS.indexOf(event.key), false);
    } catch (e) {}
    keyboardInput = false;
  }
});

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const play = async () => {
  isPlaying = true;
  playbutton.disabled = true;
  console.log(inputBox.value);
  for (const note in inputBox.value) {
    try {
      await sleep(300);
      forTimeOut(inputBox.value[note]);
    } catch (e) {}
  }
  playbutton.disabled = false;
  isPlaying = false;
};

function forTimeOut(note_) {
  try {
    piano.toggleIndex(KEYS.indexOf(note_), true);
    setTimeout(forTimeOutPartTwo, 300, note_);
  } catch (e) {}
}

function forTimeOutPartTwo(note_) {
  try {
    piano.toggleIndex(KEYS.indexOf(note_), false);
  } catch (e) {}
}
