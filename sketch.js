//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();
var notes = [
  "C3",
  "C#3",
  "D3",
  "D#3",
  "E3",
  "F3",
  "F#3",
  "G3",
  "G#3",
  "A3",
  "A#3",
  "B3",
  "C4",
  "C#4",
  "D4",
  "D#4",
  "E4",
  "F4",
  "F#4",
  "G4",
  "G#4",
  "A4",
  "A#4",
  "B4",
  "C5",
  "C#5",
  "D5",
  "D#5",
  "E5",
  "F5",
  "F#5",
  "G5",
  "G#5",
  "A5",
  "A#5",
  "B5",
  "C6",
];

function setup() {
  createCanvas(500, 500);
  createCanvas(window.innerWidth, window.innerHeight);
  background(0, 0, 0);
  const piano = new Nexus.Piano("#instrument", {
    size: [1000, 300],
    mode: "button", // 'button', 'toggle', or 'impulse'
    lowNote: 24,
    highNote: 60,
  });
  piano.on("change", function (v) {
    console.log(v.note);
    synth.triggerAttackRelease(notes[v.note - 24], "8n");
  });
}

function draw() {}
