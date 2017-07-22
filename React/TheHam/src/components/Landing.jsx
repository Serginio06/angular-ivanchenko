import React,{Component} from 'react';
// import './../css/landing.css';
import Landing_menu from './Landing_menu.jsx'
import Landing_img from './Landing_img.jsx'
import Landing_features from './Landing_features.jsx'

class Landing extends Component {

    render(){
        return(
            <div className="landing">
                <Landing_menu/>
                <Landing_img/>
                <Landing_features/>
            </div>
        )
    }
}

export default Landing;