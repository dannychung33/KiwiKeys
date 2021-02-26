import '../App.css';
import {playNote} from './Keyboard';
import {useState} from 'react';
import {sampler} from './Keyboard';

function Key(props) {
    let [color, setColor] = useState('#fffff0');

    return(
        <div className="key" 
        style={{backgroundColor: color}} 
        onMouseDown={(e)=>
        {
            console.log("Event target: " + e.target.className)
            setColor('#ADD8E6');
            playNote(props.note);   
            setTimeout(()=>{
                setColor('#fffff0');
            }, 300)
        }}
        onMouseUp={()=>{
            sampler.releaseAll();
        }}
        >
        
        </div>
    )
}

export default Key;