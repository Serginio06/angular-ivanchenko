import React, {Component} from 'react';


class AboutHistory extends Component {

    render() {

        this.historyItems = [
            {
                "title": "Donec sodales sagittis "
            }, {
                "title": "Donec sodales sagittis "
            }, {
                "title": "Donec sodales sagittis "
            }, {
                "title": "Donec sodales sagittis "
            }, {
                "title": "Donec sodales sagittis "
            }, {
                "title": "Donec sodales sagittis "
            }, {
                "title": "Donec sodales sagittis "
            }, {
                "title": "Donec sodales sagittis "
            },
        ];

        return (
            <div className="about-history">
                <p className="about-history-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p><br/>
                <div className="about-history-points-left">
                    {this.historyItems.map ((item, index)=> {
                            if (index <= 3) {
                                let elem =
                                    <div className="about-history-point" key={index}>
                                    <i className="fa fa-check-circle about-history-check-circle" aria-hidden="true">
                                    </i>{item.title}
                                </div>

                                return elem
                            }

                            return false;
                        }
                    )}
                </div>
                <div className="about-history-points-left">
                    {this.historyItems.map ((item, index)=> {
                            if (index > 3 && index <=7) {
                                let elem =
                                    <div className="about-history-point" key={index}>
                                        <i className="fa fa-check-circle about-history-check-circle" aria-hidden="true">
                                        </i>{item.title}
                                    </div>

                                return elem
                            }

                            return false;
                        }
                    )}
                </div>

            </div>
        )
    }


}


export default AboutHistory;