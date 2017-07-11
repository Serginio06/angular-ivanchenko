/**
 * Created by sergiiivanchenko on 03/07/2017.
 */

import React, {Component} from 'react';
import {Link} from 'react-router'
import './../style/UserList.css'

class UserList extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataClassName:'closeUp',
            msgClassName:'alert alert-info openUp',
            msg:'please, wait... getting data'
        }
    }


    // componentWillMount(){
    //
    //     // this.className = ' list-group closeUp';
    //     this.className = 'closeUp';
    //
    // }

    render() {


        return (
            <div className="panel panel-success">


                <div className="panel-heading"><h3>List of users</h3></div>
                <div className="panel-body">
                    {/*<p>User list </p>*/}
                    <div className={this.state.msgClassName}>{this.state.msg}</div>
                    <ol className={this.state.dataClassName}>
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

    componentDidMount(){

        setTimeout(()=>{
            this.setState({msgClassName:'alert alert-info closeUp'});
        },1000);


        setTimeout(()=>{
            this.setState({dataClassName:'openUp'});
        },2000);


    }


}

export default UserList;
