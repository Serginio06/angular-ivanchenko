import React, {Component} from 'react';
import ServicesTabs from './ServicesTabs.jsx'
import {services} from './../../static/data/services.js'

class OurServices extends Component {

    render() {

        return (
            <div className="services" id="services">
                <h2 className="black-text">Our services
                    <img src="./images/stripes.png" alt="" className="strips--img"/>
                </h2>

                <ServicesTabs services={services}/>
            </div>
        )
    }
}

export default OurServices;