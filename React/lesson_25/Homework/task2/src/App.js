import React, {Component} from 'react';
import './style/App.css';
import appStore from './stores/appStore';
import * as AppActions from './actions/AppActions';
import ErrorBlock from './ErrorBlock'
import TaskSearch from './TaskSearch';


class App extends Component {


    deleteTask(id) {
        AppActions.deleteTask (id);

    }

    addTask() {


        if (this.taskName.value && this.taskStatus.value) {
            AppActions.addTask (this.taskName.value, this.taskStatus.value);
            this.taskName.value = '';
            this.taskStatus.value = '';
            this.cleanError ();
        } else {
            this.noValuesError ();
        }

    }

    noValuesError() {
        this.setState ({errMsg: 'Please enter task description and status'});
    };

    noItemsInListError() {
        this.setState ({errMsg: 'There is no item. Please check search request.'});
    };

    cleanError() {
        this.setState ({errMsg: ''});
    };


    componentWillMount() {

        this.setState ({tasks: appStore.getAllTasks ()});

        appStore.on ('TASK-LIST-CHANGED', ()=> {

            if (appStore.getAllTasks ().length) {
                this.cleanError ();
                this.setState ({tasks: appStore.getAllTasks ()});
            } else {
                this.noItemsInListError ();
                this.setState ({tasks: appStore.getAllTasks ()});
            }
        })
    }

    render() {
        let msgBlock;

        if (this.state.errMsg) {
            msgBlock = <ErrorBlock msg={this.state.errMsg}/>;
        }
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 25. Todo app with search
                    </div>
                    <div className="panel-body">

                        <TaskSearch />


                        {this.state.tasks.map ((item, index)=> {
                                let element;
                                element =
                                    <div key={item.id}>
                                        <div className="row">
                                            <div className="col-sm-1">{item.id}</div>
                                            <div className="col-sm-6">{item.task}</div>
                                            <div className="col-sm-3">{item.status}</div>
                                            <div className="col-sm-2"><span className="label label-danger"
                                                                            style={{cursor: 'pointer'}}
                                                                            onClick={this.deleteTask.bind (this, index)}>Delete</span>
                                            </div>
                                        </div>
                                        <br/>
                                    </div>
                                return element;
                            }
                        )}
                        <br/>
                        <div className="panel panel-info well">
                            <h4>Add new task</h4>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon">Description</span>
                                            <input type="text" className="form-control" placeholder="Buy some meal"
                                                   ref={(input)=>this.taskName = input}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon">Status</span>
                                            <input type="text" className="form-control" placeholder="in progress"
                                                   ref={(input)=>this.taskStatus = input}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="btn-group">
                                <button className="btn btn-primary btn-sm" onClick={this.addTask.bind (this)}>Add
                                </button>
                            </div>
                        </div>
                        {msgBlock}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
