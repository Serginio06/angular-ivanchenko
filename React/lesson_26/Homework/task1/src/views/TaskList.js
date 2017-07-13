/**
 * Created by sergiiivanchenko on 03/07/2017.
 */

import React, {Component} from 'react';

class UserList extends Component {

    constructor(props) {
        super (props);
        this.state = {
            dataClassName: 'openUp',
            msgClassName: 'alert alert-info closeUp',
            msg: 'please, wait... getting data',
        }
    }

    deleteTask(id) {
        // console.log ('delete task');
        this.props.onDelete (id);
    }

    addTask() {
        if (  this.taskDescription.value && this.taskStatus.value ) {
            let obj = {
                id: Date.now ().toString ().slice (-4),
                task: this.taskDescription.value,
                status: this.taskStatus.value
            };

            this.props.onAdd(obj);
            this.taskDescription.value ='';
            this.taskStatus.value = ''
        }
    }


    render() {

        return (
            <div className="panel panel-success">

                <div className="panel-heading"><h3>List of users</h3></div>
                <div className="panel-body">
                    {/*<p>User list </p>*/}
                    <div className={this.state.msgClassName}>{this.state.msg}</div>
                    <ol className={this.state.dataClassName}>
                        {this.props.users.map ((item, index, arr)=> {
                                let element;
                                element =
                                    <li className="list-group-item list-group-item-success" key={index}>
                                        <span className="label label-danger addMargin"
                                              style={{cursor: 'pointer'}}
                                              onClick={this.deleteTask.bind (this, index)}>Delete</span>
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
                        <h3>Add new task</h3>
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
                            <button className="btn btn-success" onClick={this.addTask.bind(this)}>Add task</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }



}

export default UserList;
