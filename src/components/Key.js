import '../App.css';
import {playNote} from './Keyboard';

function Key(props) {
    return(
        <div className="key" onClick={(e)=>
        {
            console.log("Event target: " + e.target.className)
            playNote(props.note)
        }}>
        
        </div>
    )
}

export default Key;