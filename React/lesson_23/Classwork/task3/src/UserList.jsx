/**
 * Created by sergiiivanchenko on 03/07/2017.
 */

import React, {Component} from 'react';
// import './style/UserList.css'

class UserList extends Component {


    render() {



        return (
            <div className="panel panel-success">


                <div className="panel-heading"><h3>User list</h3></div>
                <div className="panel-body">
                    <ul className="list-group" style={{listStyle: 'none'}}>
                        {this.props.users.map ((item, index, arr)=> {
                                let element;
                            element =
                                <li className="list-group-item list-group-item-success" key={index}>{index + 1}.
                                    <span style={{fontWeight : 'bold', color:'red'}}>Name:</span> {item.first_name} {item.last_name}.
                                    <span style={{fontWeight : 'bold', color:'green'}}>Gender:</span> {item.gender}.
                                    <span style={{fontWeight : 'bold', color:'blue'}}>Email:</span> {item.email}
                                    </li>

                                return element;


                            }
                        )}
                    </ul>
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
