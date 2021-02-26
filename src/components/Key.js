import '../App.css';
import {playNote} from './Keyboard';
import {useState} from 'react';

function Key(props) {
    let [color, setColor] = useState('#fffff0');

    return(
        <div className="key" style={{backgroundColor: color}} onClick={(e)=>
        {
            console.log("Event target: " + e.target.className)
            setColor('#ADD8E6');
            playNote(props.note);   
            setTimeout(()=>{
                setColor('#fffff0');
            }, 300)
        }}>
        
        </div>
    )
}

export default Key;