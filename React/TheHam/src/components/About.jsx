import React, {Component} from 'react';
import AboutTabs from './AboutTabs.jsx'


class About extends Component {

    constructor(props) {
        super (props);
        this.state = {
            imgSrc: './images/about3.jpeg'
        }
    }

    onTabClick(index) {
        console.log ('ABOUT onTablick. Index=', index);

        let n = +index + 1;
        let imgPath = './images/about' + n + '.jpeg';

        this.setState ({imgSrc: imgPath});
    }


    render() {

        let aboutTabs = [
            {
                "id": 1,
                "title": "our history"
            },
            {
                "id": 1,
                "title": "our biography"
            },
            {
                "id": 1,
                "title": "our skills"
            }
        ];


        return (
            <div className="about" id="about">
                <div className="about-content">
                    <img src={this.state.imgSrc} alt="about" className="about--img"/>
                    <div className="about--right-block" id="about--right-block">
                        <h2 className="white-text">About Our Company
                            <img src="./images/stripes.png" alt="" className="strips--img"/></h2>
                        <div className="about--charts">
                            <AboutTabs aboutTabs={aboutTabs} onTabClick={this.onTabClick.bind (this)}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }


}

export default About;