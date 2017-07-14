import React, {Component} from 'react';
import './style/App.css';
import {connect} from 'react-redux';
import TaskList from './views/TaskList'
// import TaskTable from './views/TaskTable'
import {asyncGetTasks} from './actions/async';
import {Link} from 'react-router';

class App extends Component {

    constructor() {
        super ();
        this.state = {
            displayTypeText: 'table',
            displayElement: ''
        }
    }

    toggleDisplayType() {

        if (this.state.displayTypeText === 'table') {
            this.setState ({displayTypeText: 'list'});
        } else {
            this.setState ({displayTypeText: 'table'});
        }
    }

    deleteTask(id) {
        this.props.onDeleteTask (id);
    }

    addTask(task) {
        this.props.onAddTask (task)
    }

    componentWillMount(){
        this.props.onGetTasks();
    }


    render() {
        let displayUsers;
        displayUsers = <div className="well"><TaskList users={this.props.tasksStore} onDelete={this.deleteTask.bind(this)} onAdd={this.addTask.bind(this)} /></div>




        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 25. Redux app to show ToDo array with possibility to edit it
                    </div>
                    <div className="panel-body">

                        {/*<button className="btn btn-primary" onClick={this.toggleDisplayType.bind (this)}>*/}
                            {/*Show {this.state.displayTypeText}</button>*/}
                        {/*<button className="btn btn-primary" onClick={this.props.onGetTasks}>get tasks</button>*/}

                        <div className="form-group">
                            <div className="btn-group">
                        <Link to="/edit"><button className="btn btn-info btn-sm"> Edit todo list</button></Link>
                        <Link to="/about"><button className="btn btn-danger btn-sm">About</button></Link>
                            </div>
                        </div>



                        {displayUsers}
                    </div>
                </div>
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
        // onShowTask: ()=> {
        //     dispatch ({type: "SHOW-TASKS"})
        // },
        // onAddTask: (task)=> {
        //     dispatch ({type: "ADD-TASK", task: task})
        // },
        // onDeleteTask: (id)=> {
        //     dispatch ({type: "DELETE-TASK", id: id})
        // },
        onGetTasks:()=>{
            dispatch(asyncGetTasks())
        }
    })

) (App);
