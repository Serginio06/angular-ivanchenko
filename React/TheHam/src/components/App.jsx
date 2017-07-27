import React, {Component} from 'react';
import Landing from './Landing.jsx';
import Members from './Members.jsx';
import Achievements from './Achievements.jsx';
import News from './News.jsx';
import About from './About.jsx';
import OurServices from './OurServices.jsx';
import Portfolio from './Portfolio.jsx';
import Feedback from './Feedback.jsx';
import ContactUs from './ContactUs.jsx';
import Footer from './Footer.jsx';


class App extends Component {


    render() {

        return (
            <div className="app">

                <Landing/>
                <OurServices/>
                <About/>
                <Portfolio/>
                <Members/>
                <Achievements/>
                <News/>
                <div className="news-details">{this.props.children}</div>
                <Feedback/>
                <ContactUs/>
                <Footer/>

            </div>
        );
    }

}

export default App;