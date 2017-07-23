import React, {Component} from 'react';

class Achievements_item extends Component {

    constructor(props) {
        super (props);
        this.state = {
            seconds: 0,
        }
    }

    handleScroll(elementId) {

        let element = document.getElementById (elementId);
        let ElelementTop = element.getBoundingClientRect ().top;
        let windowHeight = window.innerHeight;
        let status = '';

        status = ElelementTop <= windowHeight;

        if (status !== this.previouseStatus) {

            if (status === true) {
                this.startCounter ();
                this.previouseStatus = status;
            } else {
                this.stopCounter ();
                this.resetCounter ();
                this.previouseStatus = status;
            }
        }

    }

    incrementCount() {

        this.setState ({seconds: this.state.seconds + 1});

        let previouseGeneratValues = this.generatValues;
        let valueGap = this.timeToGetOriginalValueFor/this.delayToIncrementCounter;
        let zeroValueIncrement = this.props.featuresArr[0].value/valueGap;

        if ( (this.props.featuresArr[0].value - this.generatValues[0]) <=  zeroValueIncrement  ) {
            this.generatValues = this.props.featuresArr.map((item)=>{return item.value});
            this.stopCounter();
        } else {
            this.generatValues = this.props.featuresArr.map ( (item, index, arr)=> {
                let sum;
                sum = Math.round(previouseGeneratValues[index] + item.value / valueGap);
                return sum
            });
        }

    };


    stopCounter() {
        this.setState ({seconds: this.state.seconds + 1});
        clearInterval (this.counter);
        this.counter = 0;
    };


    startCounter() {

        if (this.counter === 0) {
            this.counter = setInterval (this.incrementCount.bind (this), this.delayToIncrementCounter);
        }
    };


    resetCounter() {
        // console.log('self.counter= ',self.counter);
        if (this.counter || this.state.seconds > 0) {
            clearInterval (this.counter);
            this.generatValues = [0, 0, 0, 0];
            this.counter = 0;
            this.setState ({seconds: 0});
        }

    };

    getFontSize() {
        if (window.innerWidth <= 870) {
            this.fontSizeValue = {fontSize: '14px'};
            this.fontSizeTitle = {fontSize: '10px'};
        } else if (window.innerWidth > 870 && window.innerWidth <= 1000) {
            this.fontSizeValue = {fontSize: '16px'};
            this.fontSizeTitle = {fontSize: '11px'};
        } else if (window.innerWidth > 1000 && window.innerWidth <= 1200) {
            this.fontSizeValue = {fontSize: '18px'};
            this.fontSizeTitle = {fontSize: '12px'};
        } else if (window.innerWidth > 1200) {
            this.fontSizeValue = {fontSize: '20px'};
            this.fontSizeTitle = {fontSize: '14px'};
        }
    }

    componentWillMount() {
        this.getFontSize ();
        this.generatValues = [0, 0, 0, 0]
    }


    render() {

        return (
            <div>

                {this.props.featuresArr.map ((item, index)=> {
                        let titleClass = 'achievement-title2';
                        {/*console.log('index % 2=', (index % 2));*/}

                        if ((
                            index % 2
                            ) === 0) {
                            titleClass = "achievement-title green-text";
                        } else {
                            titleClass = "achievement-title black-text";
                        }

                        let elem = <div className="achievements-features-img-card" key={index}>
                            <img className="achievements-features-img" src={item.src} alt=""/>
                            <div className="achievement-value-title">
                                <span className="achievement-value"
                                      style={this.fontSizeValue}>{this.generatValues[index] || 0}</span>
                                <span className={titleClass} style={this.fontSizeTitle}>{item.title}</span>
                            </div>
                        </div>

                        return elem
                    }
                )}
            </div>
        );

    }


    componentDidMount() {
        this.delayToIncrementCounter = 50;
        this.timeToGetOriginalValueFor = 3000;
        this.getFontSize ();
        this.counter = 0;
        this.previouseStatus = false;

        window.addEventListener ('scroll', this.handleScroll.bind (this, 'achievements-features'));
    }

    componentWillUnmount() {
        window.removeEventListener ('scroll', this.handleScroll.bind (this, 'achievements-features'));
    }
}

export default Achievements_item;