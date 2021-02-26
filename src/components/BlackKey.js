
import {playNote} from './Keyboard';
import {useState} from 'react';
import {sampler} from './Keyboard';

function BlackKey(props){
    let [color, setColor] = useState('#000000');
    return(
        <div 
        className="black-key" 
        style={{backgroundColor: color}}
        onMouseDown={()=>{
            playNote(props.sharp)
            setColor('#ADD8E6');  
            setTimeout(()=>{
                setColor('#000000');
            }, 300)
        }}
        onMouseUp={() =>{
            sampler.releaseAll();
        }}
        >
            
        </div>
    )
}

export default BlackKey;