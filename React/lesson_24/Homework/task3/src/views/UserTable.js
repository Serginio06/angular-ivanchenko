import React, {Component} from 'react';
import {Link} from 'react-router'
// import './style/App.css';


class UserTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataClassName:'closeUp',
            msgClassName:'alert alert-info openUp',
            msg:'please, wait... getting data'
        }
    }

    // componentDidMount() {
    //     var recievedMessage = this.props.location.state.message
    // }

    render() {


        return (

            <div className="panel panel-success">


                <div className="panel-heading"><h3>Users table</h3></div>
                <div className="panel-body">
                    <div className={this.state.msgClassName}>{this.state.msg}</div>

                    <div className={this.state.dataClassName}>
                    <table className='table'>
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
                                 <td> <Link to={"/tableView/"+item.id}>{index + 1}</Link></td>
                                <td><Link to={"/tableView/"+item.id}>{item.first_name} </Link></td>
                                <td>{item.last_name}</td>
                                <td>{item.gender}</td>

                            </tr>

                        )}
                        </tbody>
                    </table>
                    </div>

                    <br/>
                    <div className="btn-group">
                        <button className="btn btn-default"><Link to="/">Go back</Link></button>
                    </div>
                </div>
            </div>



        )
            ;
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

export default UserTable;


