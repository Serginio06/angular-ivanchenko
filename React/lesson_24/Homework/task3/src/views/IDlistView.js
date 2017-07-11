/**
 * Created by sergiiivanchenko on 07/07/2017.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';

class IDlistView extends Component {

    render() {


        return (
            <div className="well">
                {/*<label className="alert alert-success">this is IDlistView with ID: {this.props.params.userID}</label>*/}

                <div className="panel panel-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6"><h4><span className="label label-primary">ID:</span></h4>
                            </div>
                            <div className="col-sm-6">
                                <h4>{this.props.route.users[this.props.params.userID].id}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6"><h4><span className="label label-primary">First name:</span></h4>
                            </div>
                            <div className="col-sm-6">
                                <h4>{this.props.route.users[this.props.params.userID].first_name}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6"><h4><span className="label label-primary">Last name:</span></h4>
                            </div>
                            <div className="col-sm-6">
                                <h4>{this.props.route.users[this.props.params.userID].last_name}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6"><h4><span className="label label-primary">E-mail:</span></h4>
                            </div>
                            <div className="col-sm-6">
                                <h4>{this.props.route.users[this.props.params.userID].email}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6"><h4><span className="label label-primary">Gender:</span></h4>
                            </div>
                            <div className="col-sm-6">
                                <h4>{this.props.route.users[this.props.params.userID].gender}</h4>
                            </div>
                        </div>

                    </div>
                </div>


                <br/>
                <div className="btn-group">
                    <button className="btn btn-default"><Link to="/listView">Go back</Link></button>
                </div>
                <br/>

            </div>
        )
    }

}

export default IDlistView;
