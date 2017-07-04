/**
 * Created by sergiiivanchenko on 03/07/2017.
 */

import React, {Component} from 'react';
import './style/UserList.css'

class UserList extends Component {

    // constructor(props){
    //     console.log('props.listItemQuantity=',props.listItemQuantity);
    //     super();
    //     this.state = {
    //         listItemQuantity:props.listItemQuantity
    //     }
    // }


    render() {
        let itemQuantity = this.props.listItemQuantity;

        if (itemQuantity > this.props.users.length) {
            return (

                    <div className="alert alert-danger" role="alert">List has only {this.props.users.length} users.
                        Please enter correct value
                    </div>

            )
        }


        return (
            <div className="panel panel-success">


                <div className="panel-heading"><h3>User list</h3></div>
                <div className="panel-body">
                    <ol className="list-group">
                        {this.props.users.map ((item, index, arr)=> {
                                let element;


                                if (!+itemQuantity) {
                                    element =
                                        <li className="list-group-item list-group-item-success" key={index}>{index + 1}.
                                            <span
                                                className="listLabel">Name:</span> {item.name}. <span
                                                className="listLabel">Gender:</span> {item.gender}</li>
                                } else {
                                    if (arr.length >= +itemQuantity) {
                                        if (index + 1 <= +itemQuantity) {
                                            element =
                                                <li className="list-group-item list-group-item-success"
                                                    key={index}>{index + 1}.
                                                    <span className="listLabel">Name:</span> {item.name}. <span
                                                        className="listLabel">Gender:</span> {item.gender}</li>
                                        } else {

                                            element = '';
                                        }

                                    } else {

                                        element = '';
                                    }
                                }


                                return element;


                            }
                        )}
                    </ol>
                </div>

            </div>
        );
    }

    // componentWillReceiveProps() {
    //     // console.log('component will receive props!');
    //     // console.log('props.listItemQuantityInitial after update', this.props.listItemQuantityInitial);
    //     this.setState({listItemQuantity:this.props.listItemQuantity});
    // };
    //
    // shouldComponentUpdate () {
    //     // console.log("should Component Update");
    //     // console.log('props.listItemQuantityInitial after update', this.props.listItemQuantityInitial);
    //
    //     return true;
    // };


}

export default UserList;
