
import {playNote} from './Keyboard';
import {useState} from 'react';

function BlackKey(props){
    let [color, setColor] = useState('#000000');
    return(
        <div 
        className="black-key" 
        style={{backgroundColor: color}}
        onClick={()=>{
            playNote(props.sharp)
            setColor('#ADD8E6');  
            setTimeout(()=>{
                setColor('#000000');
            }, 300)
        }}>
            
        </div>
    )
}

export default BlackKey;