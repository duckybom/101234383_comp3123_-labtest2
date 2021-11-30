import './App.css';
import { Component } from 'react'
import axios from 'axios'

const API_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '2047fa82377ad23daf12748de7ca485b';
const ICON_URL = 'https://openweathermap.org/img/wn/';


export default class Weather_app extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            info: []
        }
    }
    componentDidMount() {
        axios.get(`${API_URL}/weather?q=Toronto&appid=${API_KEY}`)
        .then(res => {
            const box = [res.data]
            this.setState({info : box})
        })
    }
    
    render(){
        const str = new Date();
        return(
            <>
            {
                this.state.info.map(m=>(
                    <>
                    <h1>The weather app</h1>
                    <div className="info-box">
                        <p className="city" >{m.name}</p>
                        <p className="temp" >{m.main.temp} ˚F</p>
                        <img className="temp" src={`${ICON_URL}${m.weather[0].icon}.png`}></img>
                        <p className="status" >{m.weather[0].main}</p>
                        <p className="status-des">{m.weather[0].description}</p>
                        <p className="high-low"><b>High:</b> {m.main.temp_max} ˚F | <b>Low:</b> {m.main.temp_min} ˚F</p>
                        <p className="coord"><b>Latitude :</b> {m.coord.lat}</p>
                        <p className="coord"><b>Longitude :</b> {m.coord.lon}</p>
                        <p>{str.toString()}</p>
                    </div>
                    </>
                ))
            }
            </>
        )
    }
}