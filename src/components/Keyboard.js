
import Key from "./Key";
import KeyWithSharp from "./KeyWithSharp";
function Keyboard(){
    return(
        <div className="flex-container">
            <KeyWithSharp/>
            <KeyWithSharp/>
            <KeyWithSharp/>
            <Key/>
            <KeyWithSharp/>
            <KeyWithSharp/>
            <Key/>
            <Key/>
        </div>
    )
}

export default Keyboard;