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

    componentWillMount() {
        let textColor = this.getRandomColor();

        this.style = {color: textColor}
    }


    getRandomColor() {
        var h = Math.floor (Math.random () * (
            255 - 1
            ) + 1);
        var s = Math.floor (Math.random () * (
                100 - 1
                ) + 1) + '%';
        var l = '50%';
        this.randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';



        return this.randomColor;
    }

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
                                        <li className="list-group-item" style={this.style} key={index}>{index + 1}.
                                            <span
                                                className="listLabel">Name:</span> {item.name}. <span
                                                className="listLabel">Gender:</span> {item.gender}</li>
                                } else {
                                    if (arr.length >= +itemQuantity) {
                                        if (index + 1 <= +itemQuantity) {
                                            element =
                                                <li className="list-group-item" style={this.style}
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

    componentDidUpdate() {
        // console.log('component will receive props!');
        // console.log('props.listItemQuantityInitial after update', this.props.listItemQuantityInitial);
        console.log ('did update');
        let textColor = this.getRandomColor();

        this.style = {color: textColor}
    };


    //
    // shouldComponentUpdate () {
    //     // console.log("should Component Update");
    //     // console.log('props.listItemQuantityInitial after update', this.props.listItemQuantityInitial);
    //
    //     return true;
    // };


}

export default UserList;
