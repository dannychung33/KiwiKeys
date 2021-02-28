import * as Tone from 'tone';
import {useState} from 'react';
import {sampler} from './Keyboard';

var synth = new Tone.Synth().toMaster();

const songNotesMelody = [
    {"time": 0, "note": "E5", "duration": "16n"},
    {"time": 0.16, "note": "D#5", "duration": "16n"},
    {"time": 0.32, "note": "E5", "duration": "16n"},
    {"time": 0.48, "note": "D#5", "duration": "16n"},
    {"time": 0.64, "note": "E5", "duration": "16n"},
    {"time": 0.8, "note": "B4", "duration": "16n"},
    {"time": 0.96, "note": "D5", "duration": "16n"},
    {"time": 1.12, "note": "C5", "duration": "16n"},
    {"time": 1.28, "note": "A4", "duration": "8n"},

    {"time": 1.28, "note": "A3", "duration": "16n"},
    {"time": 1.44, "note": "E3", "duration": "16n"},
    {"time": 1.6, "note": "A4", "duration": "16n"},

    {"time": 1.76, "note": "C4", "duration": "16n"},
    {"time": 1.92, "note": "E4", "duration": "16n"},
    {"time": 2.08, "note": "A4", "duration": "16n"},
    {"time": 2.24, "note": "B4", "duration": "8n"},

    {"time": 2.24, "note": "E2", "duration": "16n"},
    {"time": 2.4, "note": "E3", "duration": "16n"},
    {"time": 2.56, "note": "G#3", "duration": "16n"},

    {"time": 2.72, "note": "E4", "duration": "16n"},
    {"time": 2.88, "note": "G#4", "duration": "16n"},
    {"time": 3.04, "note": "B4", "duration": "16n"},
    {"time": 3.20, "note": "C5", "duration": "8n"},

    {"time": 3.20, "note": "A2", "duration": "16n"},
    {"time": 3.36, "note": "E3", "duration": "16n"},
    {"time": 3.52, "note": "A3", "duration": "16n"},

    {"time": 3.68, "note": "E4", "duration": "16n"},
    {"time": 3.84, "note": "E5", "duration": "16n"},
    {"time": 4, "note": "D#5", "duration": "16n"},
    {"time": 4.16, "note": "E5", "duration": "16n"},
    {"time": 4.32, "note": "D#5", "duration": "16n"},
    {"time": 4.48, "note": "E5", "duration": "16n"},
    {"time": 4.64, "note": "B4", "duration": "16n"},
    {"time": 4.82, "note": "D5", "duration": "16n"},
    {"time": 4.96, "note": "C5", "duration": "16n"},
    {"time": 5.12, "note": "A4", "duration": "8n"},

    {"time": 5.12, "note": "A3", "duration": "16n"},
    {"time": 5.28, "note": "E3", "duration": "16n"},
    {"time": 5.44, "note": "A4", "duration": "16n"},

    {"time": 5.6, "note": "C4", "duration": "16n"},
    {"time": 5.76, "note": "E4", "duration": "16n"},
    {"time": 5.92, "note": "A4", "duration": "16n"},
    {"time": 6.08, "note": "B4", "duration": "8n"},

    {"time": 6.08, "note": "E2", "duration": "16n"},
    {"time": 6.16, "note": "E3", "duration": "16n"},
    {"time": 6.32, "note": "G#3", "duration": "16n"},

    {"time": 6.48, "note": "B3", "duration": "16n"},
    {"time": 6.72, "note": "C5", "duration": "16n"},
    {"time": 6.88, "note": "B4", "duration": "16n"},
    {"time": 7.04, "note": "A4", "duration": "4n"},
    
    
    
    

   
    // ['E5','8n'],
    //['D#5', '16n'],['E5','16n'],
    // ['D#5','16n'],['E5','16n'],['B4','16n'],['D5','16n'],['C5','16n'],
    // ['A4','16n'], ['C4','4n'], ['E4','16n'], ['A4','16n'], ['B4','16n'],
    // ['E4','4n'],['G#4','16n'],['B4','16n'],['C5','16n']
];

const songNotesHarmony = [
    
    //['A3', '0n'], ['A3','1n'], 
    // ['E3','16n'], ['A4','16n'], 
    // ['E2','4n'], ['E3', '16n'], ['G3', '16n']
]

function playSong(notes, harmony){
    let now = Tone.now();
    let offset = 0;
    for(let i = 0; i < notes.length; i++){
        sampler.triggerAttackRelease(notes[i][0], notes[i][1], now+offset);
        if (i < harmony.length)
        {
            sampler.triggerAttackRelease(harmony[i][0], harmony[i][1], now+offset);
        }
        if((i+1) === notes.length){
            break;
        }
        if(notes[i+1][1] === '1n'){
            offset += 3.2;
        }
        if(notes[i+1][1] === '2n'){
            offset += 1.6;
        }
        if(notes[i+1][1] === '4n'){
            offset += 0.8;
        }
        if(notes[i+1][1] === '8n'){
            offset += 0.4;
        }
        if(notes[i+1][1] === '16n'){
            offset += 0.2;
        }
 
  
    }
    

}

function playMusic(){
    var part = new Tone.Part(function(time, note){
        //the notes given as the second element in the array
        //will be passed in as the second argument
        console.log(note);
        synth.triggerAttackRelease(note.note, note.duration, time);
    }, songNotesMelody).start(0);

    Tone.Transport.start();
}


function PlayButton(){
    const [isLoaded, setIsLoaded] = useState(false);
    Tone.loaded().then(() => {
        setIsLoaded(true);
    })
    return(
        <button disabled={!isLoaded} onClick={()=>playMusic()}>
            Play song
        </button>
    )
}
export default PlayButton;
