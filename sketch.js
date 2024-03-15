//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

function setup() {
  piano = new Nexus.Piano("#instrument", {
    size: [window.innerWidth * 0.99, window.innerHeight * 0.5],
    mode: "button", // 'button', 'toggle', or 'impulse'
    //piano key notes C2 to C7
    lowNote: 36,
    highNote: 96,
  });
  piano.on("change", function (v) {
    console.log(v.note);
    synth.triggerAttackRelease(Nexus.mtof(v.note), "8n");
  });
}

function draw() {
  piano.resize(window.innerWidth * 0.99, window.innerHeight * 0.5);
}
