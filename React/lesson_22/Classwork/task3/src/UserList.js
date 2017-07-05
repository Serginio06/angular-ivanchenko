/**
 * Created by sergiiivanchenko on 03/07/2017.
 */

import React, {Component} from 'react';
import './style/UserList.css'

class UserList extends Component {


    render() {

        return (
            <div className="panel panel-success">


                <div className="panel-heading"><h3>Props object properties of UserList Component</h3></div>
                <div className="panel-body">

                    <ol className="list-group">

                        {Object.getOwnPropertyNames (this.props).map ((item, index)=> {
                                let element;


                                element = <li className="list-group-item" key={index}>{index + 1}.
                                    <span
                                        className="listLabel"> Property name:</span> {item}.
                                </li>;

                                return element
                            }
                        )}

                    </ol>
                </div>

            </div>
        );
    }

}

export default UserList;
