/**
 * Created by sergiiivanchenko on 07/07/2017.
 */

import React,{Component} from 'react';
import { Link } from 'react-router';

class IDtableView extends Component{

    render(){

        return (
            <div className="well">
                <table className='table'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Gender</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*{this.props.route.users.map ((item, index)=>*/}

                        <tr>
                            <td>{this.props.route.users[this.props.params.userID].id}</td>
                            <td>{this.props.route.users[this.props.params.userID].first_name}</td>
                            <td>{this.props.route.users[this.props.params.userID].last_name}</td>
                            <td>{this.props.route.users[this.props.params.userID].gender}</td>
                            <td>{this.props.route.users[this.props.params.userID].email}</td>


                        </tr>

                    {/*)}*/}
                    </tbody>
                </table>
                <br/>



                <div className="btn-group">
                    <button className="btn btn-default"><Link to="/tableView">Go back</Link></button>
                </div>
            </div>
        )
    }

}

export default IDtableView;