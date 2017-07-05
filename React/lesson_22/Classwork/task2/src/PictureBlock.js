/**
 * Created by sergiiivanchenko on 05/07/2017.
 */


import React, {Component} from 'react';

class PictureBlock extends Component {

    render() {
        return <img src={this.props.imgPath} alt=""/>
    }
}

export default PictureBlock;