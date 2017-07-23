import React, {Component} from 'react';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <p className="footer-text">Copyright 2015 <span>heHam</span> | All Right Reserved </p>
                <div className="landing-bkg-right">
                    <button type="button" className="footer-btnUp" aria-label="Left Align">
                        <span className="glyphicon glyphicon-menu-up" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Footer;