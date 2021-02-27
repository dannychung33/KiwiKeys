
import Key from "./Key";
import KeyWithSharp from "./KeyWithSharp";

import * as Tone from 'tone';
import {volume} from './VolumeSlider';

export const sampler = new Tone.Sampler({
    urls: {
        A0: "A0.mp3",
        C1: "C1.mp3",
        "D#1": "Ds1.mp3",
        "F#1": "Fs1.mp3",
        A1: "A1.mp3",
        C2: "C2.mp3",
        "D#2": "Ds2.mp3",
        "F#2": "Fs2.mp3",
        A2: "A2.mp3",
        C3: "C3.mp3",
        "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
        A3: "A3.mp3",
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
        C5: "C5.mp3",
        "D#5": "Ds5.mp3",
        "F#5": "Fs5.mp3",
        A5: "A5.mp3",
        C6: "C6.mp3",
        "D#6": "Ds6.mp3",
        "F#6": "Fs6.mp3",
        A6: "A6.mp3",
        C7: "C7.mp3",
        "D#7": "Ds7.mp3",
        "F#7": "Fs7.mp3",
        A7: "A7.mp3",
        C8: "C8.mp3"
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/"
})

export function playNote(note){
    console.log(note);

    Tone.loaded().then(() => {
        sampler.triggerAttack(note);
        console.log("Sampler vol: " + volume);
        // eslint-disable-next-line
        if(volume == -30){
            sampler.volume.value = -100;
        }
        else{
            sampler.volume.value = volume;
        }
        sampler.toDestination();
    });
    
}

function Keyboard(){
    return(
        <div className="flex-container">
            <KeyWithSharp note='C2' sharp='C#2'/>
            <KeyWithSharp note='D2' sharp='D#2'/>
            <Key note='E2'/>
            <KeyWithSharp note='F2'sharp='F#2'/>
            <KeyWithSharp note='G2' sharp='G#2'/>
            <KeyWithSharp note='A2' sharp='A#2'/>
            <Key note='B2'/>

            <KeyWithSharp note='C3' sharp='C#3'/>
            <KeyWithSharp note='D3' sharp='D#3'/>
            <Key note='E3'/>
            <KeyWithSharp note='F3'sharp='F#3'/>
            <KeyWithSharp note='G3' sharp='G#3'/>
            <KeyWithSharp note='A3' sharp='A#3'/>
            <Key note='B3'/>

            <KeyWithSharp note='C4' sharp='C#4'/>
            <KeyWithSharp note='D4' sharp='D#4'/>
            <Key note='E4'/>
            <KeyWithSharp note='F4'sharp='F#4'/>
            <KeyWithSharp note='G4' sharp='G#4'/>
            <KeyWithSharp note='A4' sharp='A#4'/>
            <Key note='B4'/>

            <KeyWithSharp note='C5' sharp='C#5'/>
            <KeyWithSharp note='D5' sharp='D#5'/>
            <Key note='E5'/>
            <KeyWithSharp note='F5'sharp='F#5'/>
            <KeyWithSharp note='G5' sharp='G#5'/>
            <KeyWithSharp note='A5' sharp='A#5'/>
            <Key note='B5'/>

            <KeyWithSharp note='C6' sharp='C#6'/>
            <KeyWithSharp note='D6' sharp='D#6'/>
            <Key note='E6'/>
            <KeyWithSharp note='F6'sharp='F#6'/>
            <KeyWithSharp note='G6' sharp='G#6'/>
            <KeyWithSharp note='A6' sharp='A#6'/>
            <Key note='B6'/>

            <Key note='B7'/>
        </div>
    )
}

export default Keyboard;