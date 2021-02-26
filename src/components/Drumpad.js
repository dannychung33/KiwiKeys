// npm i tone
import * as Tone from 'tone'
//  npm install --save react-tilt
import Tilt from 'react-tilt'
import kiwi from './kiwi.svg'
import './drumpad.css';

const Synth = new Tone.MembraneSynth();  
const isPingPongOff = false
const pingPong = new Tone.PingPongDelay("4n", 0.4).toDestination();

function playSynth() {
    if (isPingPongOff) {
        Synth.triggerAttackRelease('F#2', '8n');
    } else {
        Synth.triggerAttackRelease('F#2', '8n').connect(pingPong)
    }
}

function playKiwi() {
    const player = new Tone.Player("https://tippi-fifestarr.github.io/Present/ipsum-navajobeat(0).wav").toDestination();
    
    Tone.loaded().then(() => {
	player.start();
    
});
}

const Drumpad = () => {
    return (
        <div className="drumPad">
            <Tilt options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa1"> 
                <img onClick={playKiwi} style={{paddingTop: '10px'}} alt="sliced kiwi cartoon" src={kiwi}/>
            </div>
            </Tilt>
            <Tilt options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa1"> 
                <img onClick={playSynth} style={{paddingTop: '10px'}} alt="sliced kiwi cartoon" src={kiwi}/>
            </div>
            </Tilt>
        </div>
        
    )
}

export default Drumpad;