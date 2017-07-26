import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class AboutCharts extends Component {

    constructor() {
        super ();
        this.state = {
            showCharts: false,
            chartElementColors: []
        }
    }


    showCharts() {
        this.chartElements = this.props.charts.map ((item, index)=>
            <div className="about--outer-chart" key={index} ref={(divOutEl)=> this.chartOuterElem[index] = divOutEl}>

            </div>
        );


    }

    showChartsColors() {



        this.props.charts.map((item,index)=>{
            // let elem;
            this.chartColors[item.id] = <div className={"about--chart-value-"+item.id}
            ><span className="chartTextSpan">{item.title}</span></div>

        });


        this.setState ({chartElementColors: this.chartColors});


    }

    handleScroll(elementId) {

        let element = document.getElementById (elementId);
        let ElelementTop = element.getBoundingClientRect ().top;
        let windowHeight = window.innerHeight;
        let status = '';

        status = ElelementTop <= windowHeight;

        if (status !== this.previouseStatus) {

            if (status === true) {
                // this.startCounter ();
                this.showChartsColors();
                this.previouseStatus = status;
            } else {
                // this.stopCounter ();
                // this.resetCounter ();
                this.setState ({chartElementColors: []});
                this.previouseStatus = status;
            }
        }

    }


    componentWillMount() {
        this.chartElements = '';
        this.chartOuterElem = [];
        // this.showCharts();

    }

    render() {


        this.chartTitles = ['interface', 'design', 'wordpress', 'html', 'app'];

        return (
            <div className="about--charts" id="about-charts">
                {/*{this.chartElements}*/}
                {this.props.charts.map ((item, index)=>
                    <div className="about--outer-chart" key={index}
                         ref={(divOutEl)=> this.chartOuterElem[index] = divOutEl}>
                        <ReactCSSTransitionGroup
                            transitionName={"transition-"+item.id}
                            transitionEnterTimeout={3000}
                            transitionLeaveTimeout={100}
                        >
                            {this.state.chartElementColors[item.id]}
                        </ReactCSSTransitionGroup>
                    </div>
                )}
                {/*<button className="btn btn-primary" onClick={this.showChartsColors.bind (this)}>show charts</button>*/}
            </div>
        )
    }


    componentDidMount() {
        this.chartElem = [];
        this.chartOuterElem = [];
        this.chartColors=[];
        this.previouseStatus = false;
        window.addEventListener('scroll', this.handleScroll.bind(this, 'about-charts'));
    }


    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll.bind(this, 'about-charts'));
    }

}


export default AboutCharts;