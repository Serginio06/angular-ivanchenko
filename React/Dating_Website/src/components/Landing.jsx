import React,{Component} from 'react';
// import './../css/landing.css';
import Landing_menu from './Landing_menu.jsx'
import Landing_img from './Landing_img.jsx'
import Landing_search from './Landing_search.jsx'

class Landing extends Component {

    render(){
        return(
            <div>
                <Landing_menu/>
                <Landing_img/>
                <Landing_search/>
            </div>
        )
    }
}

export default Landing;