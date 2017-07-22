import React, {Component} from 'react';
import Features_item from './Features_item.jsx'
// import {connect} from 'react-redux';
import {asyncGetInitUsers, asyncSearch} from './actions/async'

class Landing_features extends Component {

    render() {
        const featuresImgPathArr = ['./images/feature1.png','./images/feature2.png','./images/feature3.png','./images/feature4.png'];

        return (
            <div className="landing-features">
                <Features_item featuresImgPathArr={featuresImgPathArr}/>
            </div>
        )
    }
}

export default Landing_features;