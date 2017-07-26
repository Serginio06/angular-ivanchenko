import React from 'react';

const hellos = ['नमस्ते', 'Χαίρετε', '你好', 'ہیلو', 'Hello', 'Olà'];
const getRandomHello = ()=>{
    const randomInt = parseInt(Math.random() * 1000) % hellos.length;
    return hellos[randomInt];
};

/*
 *
 */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TransitionGroupComponents extends React.Component {
    constructor() {
        super();
        this.state = {
            messages:[{hello:'he',key:1},{hello:'hell',key:2},{hello:'Aloga',key:3}]
            // _.map(hellos, (hello, key) => ({hello, key}))
        };
    }
    removeMessage(message) {
        const currentMessage = this.state.messages;
        const newMessages = [];

        for (let i = 0; i < currentMessage.length; i += 1) {
            if(currentMessage[i].key !== message.key) {
                newMessages.push(currentMessage[i]);
            }
        }
        if(newMessages.length === 0){
            this.setState({
                messages:[{hello:'he',key:1},{hello:'hell',key:2},{hello:'Aloga',key:3}]
                // messages: _.map(hellos, (hello, key) => ({hello, key}))
            })
        }else{
            this.setState({
                messages: newMessages,
            });
        }

    }
    render() {
        return <div className='react-transition-group-wrapper'>
            <div>REACT CSS TRANSITION GROUP</div>
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={4700}
                transitionLeaveTimeout={4600}
            >
                {this.state.messages.map( message => <div
                    className="single-message"
                    key={message.key}
                    onClick = {()=>this.removeMessage(message)}
                >
                    {message.hello}
                </div>)}
            </ReactCSSTransitionGroup>
        </div>
    }
}

export default TransitionGroupComponents;

// ReactDOM.render(<TransitionGroupComponents/>, document.getElementById('root2'))