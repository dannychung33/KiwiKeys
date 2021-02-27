import '../App.css';


export let volume = "0";

function updateVolume(vol){
  volume = vol;
}

function VolumeSlider(){

    return(
        <div>
        <span className="volume_label">Volume: </span>
        <input
          className="volume_slider"
          type="range"
          min="-30"
          max="30"
          step="1"
          defaultValue="0"
          onChange={(e) => {updateVolume(e.target.value)}}
          list="volumes"
          name="volume"
        />
        <datalist id="volumes">
          <option value="0.0" label="Mute"></option>
          <option value="1.0" label="100%"></option>
        </datalist>
      </div>
    )
}

export default VolumeSlider;