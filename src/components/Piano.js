
import Keyboard from "./Keyboard";
import VolumeSlider from "./VolumeSlider";
import Drumpad from "./Drumpad";
import '../App.css';

function Piano(){
    return( 
    <div className="piano">
        <h3 style={{color:"yellowgreen"}}>Kiwiano</h3>
        <Drumpad/>
        <VolumeSlider/>
        <Keyboard/>

    </div>
    )
}

export default Piano;