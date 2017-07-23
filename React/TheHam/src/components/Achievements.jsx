import React, {Component} from 'react';
import Achievements_features from './Achievements_features.jsx'
import {achievementsArr} from './../../static/data/achievementsArr'
// import {handleScroll} from './../js/scrollHandler'

class Achievements extends Component {




    render() {


        return (
            <div className="achievements" id="achievements">
                <Achievements_features featuresImgArr={achievementsArr} />
            </div>
        )
    }


}

export default Achievements;