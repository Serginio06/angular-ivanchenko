import React, {Component} from 'react';
import ContactUsMap from './ContactUsMap.jsx'
var initialCenter = { lng: 30.521135, lat: 50.441819 };

class ContactUs extends Component {

    leaveMsg() {
        console.log ('leaveMsg');
    }

    // getMap(){
    //     var map;
    //
    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: {lat: -34.397, lng: 150.644},
    //         zoom: 8
    //     });
    //
    //
    //     // function initMap() {
    //     //     map = new google.maps.Map(document.getElementById('map'), {
    //     //         center: {lat: -34.397, lng: 150.644},
    //     //         zoom: 8
    //     //     });
    //     // }
    // }


    render() {
        return (
            <div className="contact-us">
                <div className="contact--leave-msg--form">
                    <div className="contact-map" id="map">

                        <ContactUsMap initialCenter={initialCenter} />

                    </div>
                    <div className="contact--form">
                        <h2 className="black-text">Keep In Touch
                            <img src="./images/stripes.png" alt="" className="strips--img"/>
                        </h2>

                        <input className="contact-input-title" type="text" placeholder="Name"
                               ref={(input) => this.msgName = input}/>
                        <input className="contact-input-title" type="email" placeholder="Email"
                               ref={(input) => this.msgEmail = input}/>
                        <textarea className="contact-input-msg" type="text" placeholder="Message"
                                  ref={(input) => this.msgMsg = input}/>

                        <button className="green-btn uppercase" onClick={this.leaveMsg.bind (this)}>
                            Add comment
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default ContactUs;