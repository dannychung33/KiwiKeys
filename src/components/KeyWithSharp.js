import '../App.css';
import BlackKey from './BlackKey';
import {playNote} from './Keyboard';

function Key(props) {
    return(
        <div className="key" onClick={()=>{
            playNote(props.note)
            console.log("Sharp: " + props.sharp);
        }}>
        <BlackKey note={props.sharp}/>
        </div>
    )
}

export default Key;