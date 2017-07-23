import React, {Component} from 'react';
import Achievements_item from './Achievements_item.jsx'
// import {connect} from 'react-redux';
// import {asyncGetInitNews, asyncSearch} from './actions/async'

class Achievements_features extends Component {



    // handleScroll(elementId) {
    //
    //     let element = document.getElementById (elementId);
    //     let ElelementTop = element.getBoundingClientRect ().top;
    //     let windowHeight = window.innerHeight;
    //     let status = '';
    //
    //     status = ElelementTop <= windowHeight;
    //
    //     if (status !== this.previouseStatus) {
    //         console.log ('status changed');
    //
    //         if (status === true) {
    //             console.log ("element's just appeared");
    //             this.startCounter = true;
    //             this.previouseStatus = status;
    //         } else {
    //             console.log ("element's just DISappeared");
    //             this.startCounter = false;
    //             this.previouseStatus = status;
    //         }
    //     }
    //
    // }

    render() {
        // const featuresImgPathArr = ['./images/feature1.png','./images/feature2.png','./images/feature3.png','./images/feature4.png'];

        return (
            <div className="achievements-features" id="achievements-features">
                <Achievements_item featuresArr={this.props.featuresImgArr} startCounter={this.startCounter}/>
            </div>
        )
    }

    // componentDidMount() {
    //     this.previouseStatus = false;
    //     this.startCounter = false;
    //     // this.handleScroll ('achievements');
    //     window.addEventListener ('scroll', this.handleScroll.bind (this, 'achievements-features'));
    // }
    //
    // componentWillUnmount() {
    //     window.removeEventListener ('scroll', this.handleScroll.bind (this, 'achievements-features'));
    // }
}

export default Achievements_features;