/**
 * Created by sergiiivanchenko on 03/07/2017.
 */

import React, {Component} from 'react';
import {Link} from 'react-router'
import './../style/UserList.css'

class UserList extends Component {

    // constructor(props){
    //     console.log('props.listItemQuantity=',props.listItemQuantity);
    //     super();
    //     this.state = {
    //         listItemQuantity:props.listItemQuantity
    //     }
    // }


    render() {
        

        
        // let itemQuantity = this.props.listItemQuantity;
        //
        // if (itemQuantity > this.props.users.length) {
        //     return (
        //
        //             <div className="alert alert-danger" role="alert">List has only {this.props.users.length} users.
        //                 Please enter correct value
        //             </div>
        //
        //     )
        // }


        return (
            <div className="panel panel-success">


                <div className="panel-heading"><h3>List of users</h3></div>
                <div className="panel-body">
                    {/*<p>User list </p>*/}

                    <ol className="list-group">
                        {this.props.route.users.map ((item, index, arr)=> {
                                let element;
                            element =
                                <li className="list-group-item list-group-item-success" key={index}>{index + 1}.
                                    <span
                                        className="listLabel">First name:</span> {item.first_name}. <span
                                        className="listLabel">Last name:</span> {item.last_name}</li>



                                return element;


                            }
                        )}
                    </ol>
                    <br/>
                    <div className="btn-group">
                        <button className="btn btn-default"><Link to="/">Go back</Link></button>
                    </div>
                </div>

            </div>
        );
    }


}

export default UserList;
