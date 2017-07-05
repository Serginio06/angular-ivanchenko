/**
 * Created by sergiiivanchenko on 04/07/2017.
 */

import React, {Component} from 'react';
import './style/ErrorBlock.css'

class ErrorBlock extends Component {


    render() {

        return <span className={this.props.errStyle}  role="alert">{this.props.msg}</span>
    }
}

export default ErrorBlock;