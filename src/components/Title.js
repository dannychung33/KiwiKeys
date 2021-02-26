import '../App.css'
import Power from './Power'
import { GiKiwiFruit } from "react-icons/gi";

const Title = () => {
    return(
    <h3 className="title"
        style={{color:"yellowgreen"}}>
        Kiwi 
        <Power />
        Keys
        <GiKiwiFruit/>
    </h3>
    )
}

export default Title