import React, {Component} from 'react';
import imageUrl1 from './../../static/images/slider1.jpeg';
import imageUrl2 from './../../static/images/slider2.jpeg';
import imageUrl3 from './../../static/images/slider3.jpeg';
let imgUrls = [imageUrl1, imageUrl2, imageUrl3];


var Scroll = require ('react-scroll');

var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Landing_img extends Component {
    constructor(props) {
        super (props);
        this.state = {
            sliderUrl: {backgroundImage: `url(${imgUrls[0]})`},
            // currentSlideId:0
        }
    }

    changeSliderBtnStyle() {

        if (this.currentSlideId === 0) {
            this.leftSliderBtn.className = "landing-bkg-arrow-btn";
            this.rightSliderBtn.className = "landing-bkg-arrow-btn activeSide";
        } else if (this.currentSlideId === imgUrls.length - 1) {
            this.leftSliderBtn.className = "landing-bkg-arrow-btn activeSide";
            this.rightSliderBtn.className = "landing-bkg-arrow-btn";
        } else {
            this.leftSliderBtn.className = "landing-bkg-arrow-btn activeSide";
            this.rightSliderBtn.className = "landing-bkg-arrow-btn activeSide";
        }
    }

    sliderLeftArrowClick() {
        console.log ('clider left click');

        if (this.currentSlideId > 0) {
            this.currentSlideId--;
        }
        this.changeSliderBtnStyle ();
        this.setState ({sliderUrl: {backgroundImage: `url(${imgUrls[this.currentSlideId]})`}});
    }


    sliderRightArrowClick() {
        // console.log ('clider right click.');
        // console.log ('this.currentSlideId= ', this.currentSlideId);
        // console.log ('imgUrls.length= ', imgUrls.length);

        if (this.currentSlideId < imgUrls.length - 1) {
            // console.log ('increasing current slideId');
            this.currentSlideId++;
        } else {
            if (this.autoSlideChange) {
                this.currentSlideId = 0;
            }
        }

        this.changeSliderBtnStyle ();
        this.setState ({sliderUrl: {backgroundImage: `url(${imgUrls[this.currentSlideId]})`}});
    }

    startSliderChanging() {
        // console.log ('starrrrrting');
        if (!this.counter) {
            this.autoSlideChange = true;
            this.counter = setInterval (this.sliderRightArrowClick.bind (this), 3000);
        }

    }

    stopSliderChange() {
        // console.log ('stoppping');
        if (this.counter) {
            clearInterval (this.counter);
        }
        clearInterval(this.counter2);
        this.autoSlideChange = false;
        this.counter = 0;
        this.counter2 = 0;
    }

    stopAutoSlidesChange() {
        // console.log ('mouse over, stopping slide change for 5 sec');
        this.stopSliderChange ();
    }

    startAutoSlidesChangeWithDelay(){
        this.counter2 = setTimeout(this.startSliderChanging.bind(this),2000);
    }

    userSliderClick(side){
        //true - right btn clicked
        // false - left btn clicked
        this.autoSlideChange = false;
        this.stopSliderChange();
        side ? this.sliderRightArrowClick():this.sliderLeftArrowClick();
    }


    // componentWillMount(){
    //     this.leftArrowStyle = '';
    //     this.rightArrowStyle = '';
    // }


    render() {
        return (
            <div className="landing-bkg" style={this.state.sliderUrl}>

                <div className="landing-bkg-left">

                    <button type="button" className="landing-bkg-arrow-btn"
                            ref={(btn)=>this.leftSliderBtn = btn}
                            onClick={this.userSliderClick.bind (this,false)}
                            onMouseOver={this.stopAutoSlidesChange.bind (this)}
                            onMouseLeave={this.startAutoSlidesChangeWithDelay.bind(this)}
                            aria-label="Left Align">
                        <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                    </button>
                </div>

                <div className="landing-bkg--text" ref={(bkgImg)=> this.sliderImg = bkgImg}>
                    {/*<img src="./images/slider2.jpeg" alt="slider2" ref={(bkgImg)=> this.sliderImg = bkgImg}/>*/}
                    <h3 className="uppercase">The ham is <span className="green-text uppercase">a psd template</span>
                    </h3>
                    <h1 className="uppercase landing-bkg--text-h1">We are creative</h1>
                    <h4>Nam varius accumsan elementum aliquam</h4>
                    <div className="landing-bkg-buttons">
                        <Link activeClass="active" to="portfolio" spy={true} smooth={'easeOutCubic'} duration={1000}
                              offset={-60} isDynamic={true}>
                            <button className="green-btn-white-top uppercase">explore now</button>
                        </Link>
                        <Link activeClass="active" to="contacts" spy={true} smooth={'easeOutCubic'} duration={1000}
                              offset={-60} isDynamic={true}>
                            <button className="blue-btn uppercase">purchase now</button>
                        </Link>
                    </div>
                </div>
                <div className="landing-bkg-right">
                    <button type="button" className="landing-bkg-arrow-btn activeSide"
                            ref={(btn)=>this.rightSliderBtn = btn}
                            onClick={this.userSliderClick.bind (this,true)}
                            onMouseOver={this.stopAutoSlidesChange.bind (this)}
                            onMouseLeave={this.startAutoSlidesChangeWithDelay.bind(this)}
                            aria-label="Left Align">
                        <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.currentSlideId = 0;
        this.counter = 0;

        // let self = this;
        this.startSliderChanging ();
        this.setState ({sliderUrl: {backgroundImage: `url(${imgUrls[this.currentSlideId]})`}})
    }
}

export default Landing_img;