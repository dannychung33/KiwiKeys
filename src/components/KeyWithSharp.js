import '../App.css';
import BlackKey from './BlackKey';
import {playNote} from './Keyboard';

function Key(props) {
    return(
        <div className="key-with-sharp" onClick={(e)=>{
            console.log("Event target: " + e.target.className);
            if(e.target.className !== 'black-key'){
                playNote(props.note);   
            }
        }}>
        <BlackKey sharp={props.sharp}/>
        </div>
    )
}

export default Key;