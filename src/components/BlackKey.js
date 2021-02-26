
import {playNote} from './Keyboard';

function BlackKey(props){
    return(
        <div className="black-key" onClick={()=>playNote(props.sharp)}></div>
    )
}

export default BlackKey;