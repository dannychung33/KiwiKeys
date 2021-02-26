import '../App.css';
import * as Tone from 'tone';
import {sampler} from './Keyboard';

function playNote(note){
    console.log(note);
    Tone.loaded().then(() => {
        sampler.triggerAttackRelease(note);
        
    });
    
}

function Key(props) {
    return(
        <div className="key" onClick={()=>playNote(props.note)}>

        </div>
    )
}

export default Key;