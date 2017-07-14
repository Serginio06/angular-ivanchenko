/**
 * Created by sergiiivanchenko on 14/07/2017.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class About extends Component {

    onMouseOverStar(id, e) {
        
        if (this.starElArr.length > 5) {
            this.starElArr.splice (0, 5);
        }


        this.starElArr.forEach ((item, index)=> {
            if (index <= id.index) {
                item.className = 'glyphicon glyphicon-star';
            } else {
                item.className = 'glyphicon glyphicon-star-empty';
            }
        })
    }

    onMouseLeaveStar(id, e) {

        if (this.starElArr.length > 5) {
            this.starElArr.splice (0, 5);
        }
        this.starElArr.forEach ((item, index)=> {
            item.className = 'glyphicon glyphicon-star-empty';
        });
    }

    rateApp(id) {
        this.isRated = true;

        while (this.starElArr.length > 0) {
            this.starElArr.pop ();
        }
        this.props.rateApp (id);
    }

    componentWillMount() {
        this.starElArr = [];
        this.starElArr.length = 0;
    }

    getAVGRate() {
        let rateAVG;

        rateAVG = Math.round (this.props.aboutStore.reduce ((curr, prev)=> {
                    return curr + prev;
                }) / this.props.aboutStore.length * 100) / 100
        return rateAVG;
    }


    render() {

        let starArr = ['1', '2', '3', '4', '5'];
        let rateAVG = this.getAVGRate ();
        this.starElArr = [];
        this.starElArr.length = 0;

        return (

            <div className="panel panel-success container">
                <div className="panel-heading"><h3>About</h3></div>
                <div className="panel-body">

                    <div className="well">

                        <h4>Please, rate web site</h4>

                        {starArr.map ((item, index)=>
                            <h3 key={index}><span className="glyphicon glyphicon-star-empty" style={{cursor: 'pointer'}}
                                                  onMouseOver={this.onMouseOverStar.bind (this, {index})}
                                                  onMouseLeave={this.onMouseLeaveStar.bind (this, {index})}
                                                  ref={(input)=>this.starElArr.push (input) }
                                                  onClick={this.rateApp.bind (this, index + 1)}
                            ></span></h3>
                        )}

                        <div className="panel panel-danger"
                             style={{textAlign: 'center', backgroundColor: 'lightyellow'}}>
                            <h3>Current rating is: {rateAVG}</h3>
                        </div>

                    </div>


                    <div className="form-group">
                        <div className="btn-group">
                            <Link to="/">
                                <button className="btn btn-info btn-sm">Back</button>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default connect (
    stores => (
    {
        aboutStore: stores.aboutStore
    }
    ),
    dispatch => (
    {
        rateApp: (rate)=> {
            dispatch ({
                type: "ADD-NEW-RATE",
                payload: rate
            })
        }
    }
    )
) (About);