/**
 * Created by sergiiivanchenko on 03/07/2017.
 */

import React, {Component} from 'react';

class UserList extends Component {

    constructor(props) {
        super (props);
        this.state = {
            dataClassName: 'closeUp',
            msgClassName: 'alert alert-info openUp',
            msg: 'please, wait... getting data',
        }
    }

    deleteTask(id) {
        this.props.onDelete (id);
    }

    addTask() {
        if (this.taskDescription.value && this.taskStatus.value) {
            let obj = {
                id: Date.now ().toString ().slice (-4),
                task: this.taskDescription.value,
                status: this.taskStatus.value
            };

            this.props.onAdd (obj);
            this.taskDescription.value = '';
            this.taskStatus.value = ''
        }
    }


    render() {

        return (
            <div className="panel panel-success">

                <div className="panel-heading"><h3>List of tasks</h3></div>
                <div className="panel-body">
                    {/*<p>User list </p>*/}
                    <div className={this.state.msgClassName}>{this.state.msg}</div>
                    <ol className={this.state.dataClassName}>
                        {this.props.users.map ((item, index, arr)=> {
                                let element;
                                element =
                                    <li className="list-group-item list-group-item-success" key={index}>
                                        <span className="listLabel">Id: </span>{item.id}.
                                        <span className="listLabel">Task: </span> {item.task}.
                                        <span className="listLabel">Status: </span> {item.status}
                                    </li>
                                return element;
                            }
                        )}
                    </ol>
                    <br/>

                </div>

            </div>
        );
    }

    componentWillReceiveProps() {


        if (this.props.users) {
            setTimeout (()=> {
                this.setState ({msgClassName: 'alert alert-info closeUp'});
                // console.log('change style');
                // this.msgClassName= 'alert alert-info closeUp';
            }, 300);

            setTimeout (()=> {
                this.setState ({dataClassName: 'openUp'});
                // this.dataClassName = 'openUp';
            }, 1000);
        }
    }

}

export default UserList;
