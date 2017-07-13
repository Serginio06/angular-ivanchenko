/**
 * Created by sergiiivanchenko on 03/07/2017.
 */

import React, {Component} from 'react';
// import {Link} from 'react-router'
// import './../style/UserList.css'

class UserList extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataClassName:'openUp',
            msgClassName:'alert alert-info closeUp',
            msg:'please, wait... getting data',
            // users:[{"id":1,"first_name":"Carlos","last_name":"Hughes","email":"chughes0@stumbleupon.com","gender":"Male"}]
        }
    }


    // componentWillMount(){
    //
    //     // this.className = ' list-group closeUp';
    //     this.className = 'closeUp';
    //
    // }

    render() {

        // this.users = [{"id":1,"first_name":"Carlos","last_name":"Hughes","email":"chughes0@stumbleupon.com","gender":"Male"}]
        // console.log('usrlist this.props.users= ', this.props.users);
        
        

// console.log('Listview this.props.children', this.props.children);
        return (
            <div className="panel panel-success">


                <div className="panel-heading"><h3>List of users</h3></div>
                <div className="panel-body">
                    {/*<p>User list </p>*/}
                    <div className={this.state.msgClassName}>{this.state.msg}</div>
                    <ol className={this.state.dataClassName}>
                        {this.props.users.map ((item, index, arr)=> {
                                let element;
                                element =
                                    <li className="list-group-item list-group-item-success" key={index}> {index + 1}.
                                        <span
                                            className="listLabel">First name:</span> {item.first_name}. <span
                                            className="listLabel">Last name:</span> {item.last_name}</li>
                                return element;
                            }
                        )}
                    </ol>
                    <br/>
                    {/*<div className="btn-group">*/}
                        {/*<button className="btn btn-default">Go back1</button>*/}
                    {/*</div>*/}

                </div>

            </div>
        );
    }

    componentDidMount(){

        // setTimeout(()=>{
        //     this.setState({msgClassName:'alert alert-info closeUp'});
        // },1000);
        //
        //
        // setTimeout(()=>{
        //     this.setState({dataClassName:'openUp'});
        // },2000);


    }


}

export default UserList;

