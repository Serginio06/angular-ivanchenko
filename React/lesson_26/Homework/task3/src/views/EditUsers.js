/**
 * Created by sergiiivanchenko on 14/07/2017.
 */

import React, {Component} from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux';
import {asyncGetTasksNow} from './../actions/async';

class EditUsers extends Component {

    constructor(props) {
        super (props);
        this.state = {
            dataClassName: 'openUp',
            msgClassName: 'alert alert-info closeUp',
            msg: 'please, wait... getting data',
            toggleMsg: 'Add'
        }
    }

    deleteTask(id) {
        this.props.onDeleteTask (id);
    }

    addTask() {

        if (this.state.toggleMsg === "Add") {

            if (this.taskDescription.value && this.taskStatus.value) {
                let obj = {
                    id: Date.now ().toString ().slice (-4),
                    task: this.taskDescription.value,
                    status: this.taskStatus.value
                };

                this.props.onAddTask (obj);
                this.taskDescription.value = '';
                this.taskStatus.value = '';

            }
        } else {

            let obj = {
                task: this.taskDescription.value,
                status: this.taskStatus.value
            };

            this.props.onEditTask (obj, this.editTaskIndex);
            this.taskDescription.value = '';
            this.taskStatus.value = '';
            this.editTaskIndex = '';
            this.setState ({toggleMsg: 'Add'});
        }
    }


    editTask(index) {
        this.setState ({toggleMsg: 'Edit'});
        this.editTaskIndex = index;

        this.taskDescription.value = this.props.tasksStore[index].task;
        this.taskStatus.value = this.props.tasksStore[index].status;
    }

    componentWillMount() {
        this.props.onGetTasks ();
    }


    render() {

        return (
            <div className="panel panel-success">

                <div className="panel-heading"><h3>List of tasks</h3></div>
                <div className="panel-body">
                    <div className="form-group">
                        <div className="btn-group">
                            <Link to="/">
                                <button className="btn btn-info btn-sm">Back</button>
                            </Link>
                        </div>
                    </div>
                    <ol className={this.state.dataClassName}>
                        {this.props.tasksStore.map ((item, index, arr)=> {
                                let element;
                                element =
                                    <li className="list-group-item list-group-item-success" key={index}>
                                        <span className="label label-danger addMargin"
                                              style={{cursor: 'pointer'}}
                                              onClick={this.deleteTask.bind (this, index)}>Delete</span>
                                        <span className="label label-info addMargin"
                                              style={{cursor: 'pointer'}}
                                              onClick={this.editTask.bind (this, index)}>Edit</span>
                                        <span className="listLabel">Id: </span>{item.id}.
                                        <span className="listLabel">Task: </span> {item.task}.
                                        <span className="listLabel">Status: </span> {item.status}
                                    </li>
                                return element;
                            }
                        )}
                    </ol>
                    <br/>
                    <div className="panel panel-default well">
                        <h3>{this.state.toggleMsg} task</h3>
                        <div className="form-group">
                            <div className="input-group">
                                <label htmlFor="taskDescriptoin">Task descriptoin</label>
                                <input id="taskDescriptoin" type="text" className="form-control"
                                       placeholder="Learn React" ref={(input)=>this.taskDescription = input}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <label htmlFor="taskStatus">Task status</label>
                                <input id="taskStatus" type="text" className="form-control" placeholder="In progress"
                                       ref={(input)=>this.taskStatus = input}/>
                            </div>
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-success"
                                    onClick={this.addTask.bind (this)}>{this.state.toggleMsg} task
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

// export default EditUsers;

export default connect (
    stores => (
    {
        tasksStore: stores.todoStore,
    }
    ),
    dispatch => (
    {
        onShowTask: ()=> {
            dispatch ({type: "SHOW-TASKS"})
        },
        onAddTask: (task)=> {
            dispatch ({type: "ADD-TASK", task: task})
        },
        onEditTask: (task, index)=> {
            dispatch ({type: "EDIT-TASK", task: task, index: index})
        },
        onDeleteTask: (id)=> {
            dispatch ({type: "DELETE-TASK", id: id})
        },
        onGetTasks: ()=> {
            dispatch (asyncGetTasksNow ())
        }
    }
    )
) (EditUsers);