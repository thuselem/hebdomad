$(document).foundation()

context = new AudioContext()

// declare globals
var voiceOne, voiceTwo,
    voices = [],
    volume = context.createGain()

// initialize volume
volume.gain.value = 0.1

function initVoice(voice, freq) {
    voice.type = 'sawtooth'
    voice.frequency.value = freq
    voice.connect(volume)
    volume.connect(context.destination)
}

function startVoiceOne() {
    voiceOne = context.createOscillator()
    initVoice(voiceOne,440)
    voiceOne.start(0)          
}

function stopVoiceOne() {
    voiceOne.stop()
}

function startVoiceTwo() {
    voiceTwo = context.createOscillator()
    initVoice(voiceTwo,880)
    voiceTwo.start(0)          
}

function stopVoiceTwo() {
    voiceTwo.stop()
}

// Gain input event changes level from 0 to 1 
$('#gain').on('input',function(e){
    gain = $("#gain").val()
    volume.gain.value = gain
});

// ---------- click events ------------
$('#voice-one').mousedown(function() {
    startVoiceOne();
});

$('#voice-one').mouseup(function() {
    stopVoiceOne();
});

$('#voice-two').mousedown(function() {
    startVoiceTwo();
});

$('#voice-two').mouseup(function() {
    stopVoiceTwo();
});

// ---------- keypress events ------------
// keydown starts notes, keyup stops note
// voices keeps track of which keys are currently held
// keycodes: a = 66, s = 83, d = 68, f = 70
//           j = 74, k = 75, l = 76, ; = 59
$(document).keydown(function(e) {
    // check if key is currently pressed
    if (voices[e.which]) {
        return
    }

    switch (e.which) {
        case 65:
            startVoiceOne()
            break
        case 83:
            startVoiceTwo()
            break
        case 68:
            break
        case 70:
            break
        case 74:
            break
        case 75:
            break
        case 76:
            break
        case 59:
            break
    }
    voices[e.which] = true
});

$(document).keyup(function(e) {
    switch (e.which) {
        case 65:
            stopVoiceOne()
            break
        case 83:
            stopVoiceTwo()
            break
        case 68:
            break
        case 70:
            break
        case 74:
            break
        case 75:
            break
        case 76:
            break
        case 59:
            break
    }
    voices[e.which] = false
});
