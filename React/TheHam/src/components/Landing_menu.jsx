import React, {Component} from 'react';
import {menuIconClick} from './../js/menuHandler'

class Landing_menu extends Component {

    // menuIconClick() {
    //     console.log ('click on menu item');
    // }



    render() {
        
        // console.log('menuIconClick=', menuIconClick);
        return (
            <div className="header__title">
                <div className="header__logo"></div>
                <div className="header__menu" id="header__menu">
                    <ul>
                        <li className="uppercase"><a href="#" id="firstMenuItem">Home</a></li>
                        <li className="uppercase"><a href="#">Services</a></li>
                        <li className="uppercase"><a href="#">Portfolio</a></li>
                        <li className="uppercase"><a href="#">About</a></li>
                        <li className="uppercase"><a href="#">News</a></li>
                        <li className="uppercase"><a href="#">Contact</a></li>
                        <hr/>
                    </ul>
                    <a href="javascript:void(0);" id="header__menu--icon"
                       onClick={menuIconClick.bind(this)}>&#9776;</a>
                </div>
            </div>
        )
    }
}

export default Landing_menu;