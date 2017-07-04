/**
 * Created by sergiiivanchenko on 04/07/2017.
 */
import React from 'react';

var ReactMixin = {

    getInitialState:function () {
        return {count:0}
    },

    componentWillMount:function () {
        console.log('will mount');
    },

    incrementCount:function () {
        this.setState({count:this.state.count+1})
    }

};

var MixinsTest = React.createClass({

    render:function () {

        return (
            <div>
                <Button txt="this is the button" />
                <br/>
                <Label txt="this is the label" />
            </div>
        )
    }
});


var Button = React.createClass({

    mixins:[ReactMixin],

    render:function () {
        return (
            <button>{this.props.txt}</button>
        )
    }

});

var Label = React.createClass({

    mixins:[ReactMixin],

    render:function () {
        return (
            <label>{this.props.txt}</label>
        )
    }

});

export default MixinsTest;