import '../App.css';
import {playNote} from './Keyboard';

function Key(props) {
    return(
        <div className="key" onClick={()=>playNote(props.note)}>

        </div>
    )
}

export default Key;