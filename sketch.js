//create a synth and connect it to the main output (your speakers)
// const synth = new Tone.Synth().toDestination();
// synth.volume.value = -12;

function preload() {
  players = new Array(61);
  players[0] = new Tone.Player(
    "https://github.com/Tonejs/audio/blob/master/salamander/C2.mp3"
  ).toDestination();
  players[1] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Db2.aiff"
  ).toDestination();
  players[2] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.D2.aiff"
  ).toDestination();
  players[3] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Eb2.aiff"
  ).toDestination();
  players[4] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.E2.aiff"
  ).toDestination();
  players[5] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.F2.aiff"
  ).toDestination();
  players[6] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Gb2.aiff"
  ).toDestination();
  players[7] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.G2.aiff"
  ).toDestination();
  players[8] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Ab2.aiff"
  ).toDestination();
  players[9] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.A2.aiff"
  ).toDestination();
  players[10] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Bb2.aiff"
  ).toDestination();
  players[11] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.B2.aiff"
  ).toDestination();

  players[12] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.C3.aiff"
  ).toDestination();
  players[13] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Db3.aiff"
  ).toDestination();
  players[14] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.D3.aiff"
  ).toDestination();
  players[15] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Eb3.aiff"
  ).toDestination();
  players[16] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.E3.aiff"
  ).toDestination();
  players[17] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.F3.aiff"
  ).toDestination();
  players[18] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Gb3.aiff"
  ).toDestination();
  players[19] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.G3.aiff"
  ).toDestination();
  players[20] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Ab3.aiff"
  ).toDestination();
  players[21] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.A3.aiff"
  ).toDestination();
  players[22] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Bb3.aiff"
  ).toDestination();
  players[23] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.B3.aiff"
  ).toDestination();

  players[24] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.C4.aiff"
  ).toDestination();
  players[25] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Db4.aiff"
  ).toDestination();
  players[26] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.D4.aiff"
  ).toDestination();
  players[27] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Eb4.aiff"
  ).toDestination();
  players[28] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.E4.aiff"
  ).toDestination();
  players[29] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.F4.aiff"
  ).toDestination();
  players[30] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Gb4.aiff"
  ).toDestination();
  players[31] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.G4.aiff"
  ).toDestination();
  players[32] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Ab4.aiff"
  ).toDestination();
  players[33] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.A4.aiff"
  ).toDestination();
  players[34] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Bb4.aiff"
  ).toDestination();
  players[35] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.B4.aiff"
  ).toDestination();

  players[36] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.C5.aiff"
  ).toDestination();
  players[37] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Db5.aiff"
  ).toDestination();
  players[38] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.D5.aiff"
  ).toDestination();
  players[39] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Eb5.aiff"
  ).toDestination();
  players[40] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.E5.aiff"
  ).toDestination();
  players[41] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.F5.aiff"
  ).toDestination();
  players[42] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Gb5.aiff"
  ).toDestination();
  players[43] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.G5.aiff"
  ).toDestination();
  players[44] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Ab5.aiff"
  ).toDestination();
  players[45] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.A5.aiff"
  ).toDestination();
  players[46] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Bb5.aiff"
  ).toDestination();
  players[47] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.B5.aiff"
  ).toDestination();

  players[48] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.C6.aiff"
  ).toDestination();
  players[49] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Db6.aiff"
  ).toDestination();
  players[50] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.D6.aiff"
  ).toDestination();
  players[51] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Eb6.aiff"
  ).toDestination();
  players[52] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.E6.aiff"
  ).toDestination();
  players[53] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.F6.aiff"
  ).toDestination();
  players[54] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Gb6.aiff"
  ).toDestination();
  players[55] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.G6.aiff"
  ).toDestination();
  players[56] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Ab6.aiff"
  ).toDestination();
  players[57] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.A6.aiff"
  ).toDestination();
  players[58] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.Bb6.aiff"
  ).toDestination();
  players[59] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.B6.aiff"
  ).toDestination();

  players[60] = new Tone.Player(
    "UnivIowaPianoSamples/Piano.mf.C7.aiff"
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

  piano.on("change", function (v) {
    //only if key is pressed do we trigger a sound, not when it is released (prevents double-triggered notes)
    if (v.state == true) {
      // Tone.loaded().then(() => {
      // Tone.start(players[v.note - 36]);
      players[0].start();
      console.log(players[0]);
      // });
      // let player = new Tone.Player(players[v.note - 36]).toDestination();
      // player.start();
      // synth.triggerAttackRelease(Nexus.mtof(v.note), "8n");
    }
  });
}

function draw() {
  piano.resize(window.innerWidth * 0.99, max(window.innerHeight * 0.5, 250));
}
