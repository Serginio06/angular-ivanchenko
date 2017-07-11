import React, {Component} from 'react';
import {Link} from 'react-router'
// import './style/App.css';


class UserTable extends Component {


    // componentDidMount() {
    //     var recievedMessage = this.props.location.state.message
    // }

    render() {


        return (

            <div className="panel panel-success">


                <div className="panel-heading"><h3>Users table</h3></div>
                <div className="panel-body">
                    <p>this is table view </p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Gender</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.route.users.map ((item, index)=>

                            <tr key={index}>
                                <td> {index + 1}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.gender}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>


                    <br/>
                    <div className="btn-group">
                        <button className="btn btn-default"><Link to="/">Go back</Link></button>
                    </div>
                </div>
            </div>



        )
            ;
    }
}

export default UserTable;


