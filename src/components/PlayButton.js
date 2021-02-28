import * as Tone from 'tone';
import {useState} from 'react';
import {sampler} from './Keyboard';

const songNotes = [
    ['E5','4n'],['D5', '16n'],['E5','16n'],
    ['D5','16n'],['E5','16n'],['B5','16n'],['D5','16n'],['C5','16n'],
    ['A5','8n']
];

function playSong(notes){
    let now = Tone.now();
    let offset = 0;
    for(let i = 0; i < notes.length; i++){
        sampler.triggerAttackRelease(notes[i][0], notes[i][1], now+offset);
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
function PlayButton(){
    const [isLoaded, setIsLoaded] = useState(false);
    Tone.loaded().then(() => {
        setIsLoaded(true);
    })
    return(
        <button disabled={!isLoaded} onClick={()=>playSong(songNotes)}>
            Play song
        </button>
    )
}
export default PlayButton;
