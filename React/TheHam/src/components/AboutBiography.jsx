import React, {Component} from 'react';


class AboutBiography extends Component {

    render() {

        this.chartElem = [];

        return (
            <div className="about-biography">
                <p className="about-biography-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p><br/>
                <p className="about-biography-text">
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                    enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                </p>

            </div>
        )
    }


}


export default AboutBiography;