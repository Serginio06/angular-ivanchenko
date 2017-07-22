import React, {Component} from 'react';
// import './../css/app.css';
// import test from './../js/test'
import Landing from './Landing.jsx';
import Members from './Members.jsx';
import Info from './Info.jsx';
import HappyStories from './HappyStories.jsx';
import LatestBlog from './LatestBlog.jsx';
import JoinUs from './JoinUs.jsx';
import ContactUs from './ContactUs.jsx';
import Footer from './Footer.jsx';
import {connect} from 'react-redux';
// import {asyncGetTasks} from './actions/async';
import {Link} from 'react-router';

class App extends Component {


    render() {

        // test ();

        return (
            <div className="testbkg">
                {/*<div className="well well-lg">*/}
                <Landing/>
                <Members/>
                <Info/>
                <HappyStories/>
                <LatestBlog/>
                <JoinUs/>
                <ContactUs/>
                <Footer/>
            </div>
        );
    }
}

// export default App;
export default connect (
    stores => (
    {
        tasksStore: stores.todoStore,
        // aboutStore: stores.aboutStore
    }
    ),
    dispatch => (
    {
        onShowTask: ()=> {
            dispatch ({type: "SHOW-TASKS"})
        },
        // onAddTask: (task)=> {
        //     dispatch ({type: "ADD-TASK", task: task})
        // },
        // onDeleteTask: (id)=> {
        //     dispatch ({type: "DELETE-TASK", id: id})
        // },
        // onGetTasks:()=>{
        //     dispatch(asyncGetTasks())
        // }
    })

) (App);