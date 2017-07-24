import React, {Component} from 'react';
// import {handleScroll} from './../js/scrollHandler'
// import './../css/app.css';
// import test from './../js/test'
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
import {connect} from 'react-redux';
// import {asyncGetTasks} from './actions/async';
import {Link} from 'react-router';

class App extends Component {


    render() {

        // test ();

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

                {/*<div>*/}
                    {/*<h3 className="black-text">test routes</h3>*/}
                    {/*<Link to="/details"><button className="btn btn-lg btn-success">News details</button></Link>*/}
                    {/*<div className="panel">{this.props.children}</div>*/}
                {/*</div>*/}
            </div>
        );
    }

    // componentDidMount(){
    //     // window.addEventListener('scroll', handleScroll.bind(this, 'about-charts'));
    // }
    //
    // componentWillUnmount(){
    //     window.removeEventListener('scroll', handleScroll.bind(this, 'about-charts'));
    // }
}

export default App;
// export default connect (
//     stores => (
//     {
//         tasksStore: stores.todoStore,
//         // aboutStore: stores.aboutStore
//     }
//     ),
//     dispatch => (
//     {
//         onShowTask: ()=> {
//             dispatch ({type: "SHOW-TASKS"})
//         },
//     })
//
// ) (App);