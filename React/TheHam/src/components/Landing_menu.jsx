import React, {Component} from 'react';
import {menuIconClick} from './../js/menuHandler'
import logoImg from './../../static/images/Logo.png';
var Scroll    = require('react-scroll');

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Landing_menu extends Component {
    constructor(props){
        super(props);
        this.state={
            setActiveClass:'activeMenu',
            logoImg:{backgroundImage:`url(${logoImg})`}
        }
    }

    // menuIconClick() {
    //     console.log ('click on menu item');
    // }

    handleSetActive(e){
        console.log('e= ', e);
        console.log('arguments= ', arguments);
        // e.target.style.className = 'activeMenu';
    }

    handleSetInactive(e){
        console.log(e);
        // e.target.style.className = '';
    }



    render() {
        
        // console.log('menuIconClick=', menuIconClick);
        return (
            <div className="header__title">
                <div className="header__logo" style={this.state.logoImg}></div>
                <div className="header__menu" id="header__menu">
                    <ul>
                        <li className="uppercase"><a onClick={this.scrollToTop.bind(this)} href="#" id="firstMenuItem">Home</a></li>
                        <li className="uppercase"><Link activeClass="activeMenuItm" to="services" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-60} isDynamic={true}>Services</Link></li>
                        <li className="uppercase"><Link activeClass="activeMenuItm" to="about" spy={true} smooth={'easeOutQuart'} duration={1500} offset={-60} isDynamic={true}>About</Link></li>
                        <li className="uppercase"><Link activeClass="activeMenuItm" to="portfolio" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-60} isDynamic={true}>Work</Link></li>
                        <li className="uppercase"><Link activeClass="activeMenuItm" to="achievements" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-60} isDynamic={true}>Testimonial</Link></li>
                        <li className="uppercase"><Link activeClass="activeMenuItm" to="feedback" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-60} isDynamic={true}>Blog</Link></li>
                        <li className="uppercase"><Link activeClass="activeMenuItm" to="members" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-60} isDynamic={true}>Team</Link></li>
                        <li className="uppercase"><Link activeClass="activeMenuItm" to="contacts" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-60} isDynamic={true}>Contact</Link></li>
                        <hr/>
                    </ul>
                    <a href="javascript:void(0);" id="header__menu--icon"
                       onClick={menuIconClick.bind(this)}>&#9776;</a>
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
        scroll.scrollToTop();
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
}

export default Landing_menu;