
import Key from "./Key";
import KeyWithSharp from "./KeyWithSharp";
function Keyboard(){
    return(
        <div className="flex-container">
            <KeyWithSharp note='C3' sharp='C#3'/>
            <KeyWithSharp note='D3' sharp='D#3'/>
            <KeyWithSharp note='F3' sharp='F#3'/>
            <Key/>
            <KeyWithSharp note='A3' sharp='A#3'/>
            <KeyWithSharp note='B3' sharp='B#3'/>
            <Key/>
            <Key/>
        </div>
    )
}

export default Keyboard;