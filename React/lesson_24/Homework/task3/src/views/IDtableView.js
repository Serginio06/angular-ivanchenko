/**
 * Created by sergiiivanchenko on 07/07/2017.
 */

import React,{Component} from 'react';
import { Link } from 'react-router';

class IDtableView extends Component{

    render(){
        let user = this.props.route.users.filter((item)=>{
            return +item.id === +this.props.params.userID;
        });

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
                            <td>{user[0].id}</td>
                            <td>{user[0].first_name}</td>
                            <td>{user[0].last_name}</td>
                            <td>{user[0].gender}</td>
                            <td>{user[0].email}</td>


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