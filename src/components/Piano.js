import Title from "./Title";
import Keyboard from "./Keyboard";
import VolumeSlider from "./VolumeSlider";
import Drumpad from "./Drumpad";
import '../App.css';
// is this where we get the pressed key?
function Piano(){
    return( 
    <div className="piano">
        <Title />
        <Drumpad/>
        <VolumeSlider/>
        <Keyboard/>

    </div>
    )
}

export default Piano;