import React, {Component} from 'react';
var Scroll    = require('react-scroll');

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Footer extends Component {

    render() {
        return (
            <div className="footer" id="footer">
                <p className="footer-text">Copyright 2015 <span>heHam</span> | All Right Reserved </p>
                <div className="landing-bkg-right">
                    <button type="button" className="footer-btnUp" aria-label="Left Align" onClick={this.scrollToTop.bind(this)}>
                        <span className="glyphicon glyphicon-menu-up" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        )
    }

    componentDidMount() {

        Events.scrollEvent.register('begin', function() {
            // console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function() {
            // console.log("end", arguments);
        });

        scrollSpy.update();

    }
    scrollToTop() {
        scroll.scrollToTop({
            duration: 1500,
            delay: 100,
            smooth: "easeInOutQuint",
        });
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
}

export default Footer;