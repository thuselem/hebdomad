var audio = require('./audio.js')

$(document).foundation()


// ---------- init instrument ----------------
var notes

$(document).ready(function() {
    notes = [0,203.91,386.31,590.22,701.96,905.87,1088.27,1200]
    $('#voice-one-pitch').attr("value","0")
    $('#voice-two-pitch').attr("value","203")
    $('#voice-three-pitch').attr("value","386")
    $('#voice-four-pitch').attr("value","590")
    $('#voice-five-pitch').attr("value","701")
    $('#voice-six-pitch').attr("value","905")
    $('#voice-seven-pitch').attr("value","1088")
    $('#voice-eight-pitch').attr("value","1200")
})


// ---------- controls panel events ----------------
$('#controls').on('input moved.zf.slider', function() {
    audio.setMixGain($("#gain").val() / 50)
    audio.setAttack($("#attack").val() / 1000)
    audio.setDecay($("#decay").val() / 1000)
    audio.setSustain($("#sustain").val() / 100)
    audio.setRelease($("#release").val() / 1000)
})

$('#sine').on('click', function() {
    audio.setWaveform(this.id)
})

$('#triangle').on('click', function() {
    audio.setWaveform(this.id)
})

$('#square').on('click', function() {
    audio.setWaveform(this.id)
})

$('#sawtooth').on('click', function() {
    audio.setWaveform(this.id)
})

/*
// Gain input event changes level from 0 to 1 
$('#gain').on('input',function(){
    audio.setMixGain($("#gain").val() / 50)
})

$('#attack').on('input',function(){
    audio.setAttack($("#attack").val() / 1000)
})

$('#decay').on('input',function(){
    audio.setDecay($("#decay").val() / 1000)
})

$('#sustain').on('input',function(){
    audio.setSustain($("#sustain").val() / 100)
})

$('#release').on('input',function(){
    audio.setRelease($("#release").val() / 1000)
})
*/


// ---------- keypress events ------------
// keydown starts a note, keyup stops a note
// heldKeys keeps track of which keys are currently held
// keycodes: a = 66, s = 83, d = 68, f = 70,
//           j = 74, k = 75, l = 76, 
//           ; = 59 (firefox) and 186 (chrome)

var heldKeys = []

$(document).keydown(function(e) {
    // check if key is currently pressed
    if (heldKeys[e.which]) {
        return
    }
    
    switch (e.which) {
        case 65:
            $('#voice-one').css('background-color','#059a91')
            var cents = notes[0]
            audio.startVoice(1,cents)
            break
        case 83:
            $('#voice-two').css('background-color','#059a91')
            var cents = notes[1]
            audio.startVoice(2,cents)
            break
        case 68:
            $('#voice-three').css('background-color','#059a91')
            var cents = notes[2]
            audio.startVoice(3,cents)
            break
        case 70:
            $('#voice-four').css('background-color','#059a91')
            var cents = notes[3]
            audio.startVoice(4,cents)
            break
        case 74:
            $('#voice-five').css('background-color','#059a91')
            var cents = notes[4]
            audio.startVoice(5,cents)
            break
        case 75:
            $('#voice-six').css('background-color','#059a91')
            var cents = notes[5]
            audio.startVoice(6,cents)
            break
        case 76:
            $('#voice-seven').css('background-color','#059a91')
            var cents = notes[6]
            audio.startVoice(7,cents)
            break
        case 59:
        case 186:
            $('#voice-eight').css('background-color','#059a91')
            var cents = notes[7]
            audio.startVoice(8,cents)
            break
    }
    heldKeys[e.which] = true
});

$(document).keyup(function(e) {
    switch (e.which) {
        case 65:
            $('#voice-one').css('background-color','#243640')
            audio.stopVoice(1)
            break
        case 83:
            $('#voice-two').css('background-color','#243640')
            audio.stopVoice(2)
            break
        case 68:
            $('#voice-three').css('background-color','#243640')
            audio.stopVoice(3)
            break
        case 70:
            $('#voice-four').css('background-color','#243640')
            audio.stopVoice(4)
            break
        case 74:
            $('#voice-five').css('background-color','#243640')
            audio.stopVoice(5)
            break
        case 75:
            $('#voice-six').css('background-color','#243640')
            audio.stopVoice(6)
            break
        case 76:
            $('#voice-seven').css('background-color','#243640')
            audio.stopVoice(7)
            break
        case 59:
        case 186:
            $('#voice-eight').css('background-color','#243640')
            audio.stopVoice(8)
            break
    }
    heldKeys[e.which] = false
});


// ---------- click events ------------
// note starts on mousedown, then holds til mouseup
$('.key').mousedown(function() {
    $(this).css('background-color','#059a91')
    switch(this.id) {
        case "voice-one":
            var cents = notes[0]
            audio.startVoice(1,cents)
            break
        case "voice-two":
            var cents = notes[1]
            audio.startVoice(2,cents)
            break
        case "voice-three":
            var cents = notes[2]
            audio.startVoice(3,cents)
            break
        case "voice-four":
            var cents = notes[3]
            audio.startVoice(4,cents)
            break
        case "voice-five":
            var cents = notes[4]
            audio.startVoice(5,cents)
            break
        case "voice-six":
            var cents = notes[5]
            audio.startVoice(6,cents)
            break
        case "voice-seven":
            var cents = notes[6]
            audio.startVoice(7,cents)
            break
        case "voice-eight":
            var cents = notes[7]
            audio.startVoice(8,cents)
            break
    }
})

$('.key').mouseup(function() {
    $(this).css('background-color','#243640')
    switch(this.id) {
        case "voice-one":
            audio.stopVoice(1)
            break
        case "voice-two":
            audio.stopVoice(2)
            break
        case "voice-three":
            audio.stopVoice(3)
            break
        case "voice-four":
            audio.stopVoice(4)
            break
        case "voice-five":
            audio.stopVoice(5)
            break
        case "voice-six":
            audio.stopVoice(6)
            break
        case "voice-seven":
            audio.stopVoice(7)
            break
        case "voice-eight":
            audio.stopVoice(8)
            break
    }
})

// ---------- retune events ------------
$('.tuning-selection').on('click', function() {
    switch(this.id) {
        case "5-4-3-2-lydian":
            retune([0,203.91,386.3137,590.2237,701.955,905.865,1088.2687,1200])
            break;
        case "6-5-3-2-dorian":
            retune([0,203.91,315.6413,519.5513,701.955,905.865,1017.5963,1200])
            break;
        case "7-6-3-2-trivalent":
            retune([0,203.91,266.8709,470.7809,701.955,905.865,968.8259,1200])
            break;
        case "11-9-3-2-arabic":
            retune([0,203.91,347.4079,551.3179,701.955,905.865,1048.3629,1200])
            break;
        case "13-11-3-2-dorian":
            retune([0,203.91,289.2097,493.1197,701.955,905.865,991.1647,1200])
            break;
        case "15-13-3-2-trivalent":
            retune([0,203.91,247.7411,451.6511,701.955,905.865,949.6961,1200])
            break;
        case "12-edo-major":
            retune([0,200,400,500,700,900,1100,1200])
            break;
        case "12-edo-minor":
            retune([0,200,300,500,700,800,1000,1200])
            break;
        case "12-edo-harmonic-minor":
            retune([0,200,300,500,700,800,1100,1200])
            break;
        case "7-edo":
            retune([0,171.429,342.857,514.286,685.714,857.143,1028.571,1200])
            break;
        default:
            break;
    }
})

function retune(centsArray) {
    //  retune
    for (i = 0; i < 8; i++) {
        notes[i] = centsArray[i]
    }

    // *** these won't update when a value has been manually added ***
    // update UI
    $('#voice-one-pitch').attr('value',Math.round(centsArray[0]))
    $('#voice-two-pitch').attr('value',Math.round(centsArray[1]))
    $('#voice-three-pitch').attr('value',Math.round(centsArray[2]))
    $('#voice-four-pitch').attr('value',Math.round(centsArray[3]))
    $('#voice-five-pitch').attr('value',Math.round(centsArray[4]))
    $('#voice-six-pitch').attr('value',Math.round(centsArray[5]))
    $('#voice-seven-pitch').attr('value',Math.round(centsArray[6]))
    $('#voice-eight-pitch').attr('value',Math.round(centsArray[7]))
}


// retune notes on custom tuning entry 
$("#btnHidden").on('click', function() {
    notes[0] = $('#voice-one-pitch').val()
    notes[1] = $('#voice-two-pitch').val()
    notes[2] = $('#voice-three-pitch').val()
    notes[3] = $('#voice-four-pitch').val()
    notes[4] = $('#voice-five-pitch').val()
    notes[5] = $('#voice-six-pitch').val()
    notes[6] = $('#voice-seven-pitch').val()
    notes[7] = $('#voice-eight-pitch').val()

    // blur event that fires on any input:text enter
    $("input:text").blur()
})
