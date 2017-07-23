import React, {Component} from 'react';

class Landing_img extends Component {

    render() {
        return (
            <div className="landing-bkg">

                <div className="landing-bkg-left">

                    <button type="button" className="landing-bkg-arrow-btn" aria-label="Left Align">
                        <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                    </button>
                </div>

                <div className="landing-bkg--text">
                    <h3 className="uppercase">The ham is <span className="green-text uppercase">a psd template</span></h3>
                    <h1 className="uppercase landing-bkg--text-h1">We are creative</h1>
                    <h4>Nam varius accumsan elementum aliquam</h4>
                    <div className="landing-bkg-buttons">
                        <button className="green-btn uppercase">explore now</button>
                        <button className="blue-btn uppercase">purchase now</button>
                    </div>
                </div>
                <div className="landing-bkg-right">
                    <button type="button" className="landing-bkg-arrow-btn active" aria-label="Left Align">
                    <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                </button>
                </div>
            </div>
        )
    }
}

export default Landing_img;