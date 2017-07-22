import React, {Component} from 'react';


class AboutCharts extends Component {

    render() {

        this.chartElem = [];

        return (
            <div className="about-charts">
                {this.props.charts.map ((item, index)=>
                    <div className="about--outer-chart" key={index}>
                        <div className="about--chart-value uppercase"
                             ref={(divEl)=> this.chartElem[index] = divEl}>{item.title}</div>
                    </div>
                )}

            </div>
        )
    }


    componentDidMount() {

        {this.props.charts.map((item,index)=>
        {
            this.chartElem[index].style.backgroundColor = this.props.charts[index].color;
            this.chartElem[index].style.width = this.props.charts[index].value + '%';
        })}

    }

}


export default AboutCharts;