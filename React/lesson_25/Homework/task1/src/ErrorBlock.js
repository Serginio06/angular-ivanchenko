/**
 * Created by sergiiivanchenko on 04/07/2017.
 */

import React, {Component} from 'react';

class ErrorBlock extends Component {

    render() {
        return <div className="alert alert-danger" role="alert">{this.props.msg}</div>
    }
}

export default ErrorBlock;