import React, {Component} from 'react';
import './style/App.css';
import {connect} from 'react-redux';
import UserList from './views/UserList'
import {asyncGetTasks} from './actions/async';

class App extends Component {

    onShowUsersBtn() {
        this.props.onShowUsers ();
    }


    // onUploadUsersBtn() {
    //     this.props.onUploadUser ();
    // }

    // inputChangeHandler(e){
    //     this.props.onShowUsers(e.key);
    // }

    componentWillMount(){
        this.props.onGetTasks();
    }

    render() {
        let showUserList;
        // console.log('this.props.usersStore= ', this.props.usersStore);
        if (this.props.usersStore) {
            showUserList = <div className="well"><UserList users={this.props.usersStore}/></div>
        }


        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 25. Redux app to show users array from store
                    </div>
                    <div className="panel-body">


                        <button className="btn btn-primary" onClick={this.onShowUsersBtn.bind (this)}>Show users store</button>
                        {/*<button className="btn btn-primary" onClick={this.onUploadUsersBtn.bind (this)}>Upload users store</button>*/}

                        {/*<div className="well">*/}
                            {showUserList}
                        {/*</div>*/}
                        {/*<h1>{this.props.usersStore}</h1>*/}
                    </div>
                </div>
            </div>
        );
    }
}

// export default App;
export default connect (
    users => (
    {
        usersStore: users
    }
    ),
    dispatch => (
    {
        onShowUsers: ()=> {
            dispatch ({type: "SHOW-USERS"})
        },
        onGetTasks:()=>{
            dispatch(asyncGetTasks())
        }
        // onUploadUser:()=>{
        //     dispatch ({type:"UPLOAD-USERS"})
        // }
    }
    )
) (App);
