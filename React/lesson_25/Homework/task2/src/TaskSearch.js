/**
 * Created by sergiiivanchenko on 12/07/2017.
 */

import React, {Component} from 'react';
import * as AppActions from './actions/AppActions';
// import appStore from './stores/appStore';


class TaskSearch extends Component {

    cleanSearchQuery() {
        this.searchTaskQuery.value='';
        AppActions.cleanSerchQuery ();

    }

    sendSearchQuery() {
        if ( this.searchTaskQuery.value ) {
            AppActions.serchQuery (this.searchTaskQuery.value)
        }

    }


    render() {

        return (
            <div className="well">
                <h4>Search task</h4>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon">Search for</span>
                        <input type="text" className="form-control" placeholder="meal"
                               required
                               ref={(input)=>this.searchTaskQuery = input}
                        />
                    </div>
                </div>
                <div className="btn-group">
                    <button className="btn btn-primary" onClick={this.sendSearchQuery.bind (this)}>Search</button>
                    <button className="btn btn-success" onClick={this.cleanSearchQuery.bind (this)}>Clean</button>
                </div>
            </div>
        )
    }

}

export default TaskSearch;