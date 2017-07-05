import React, {Component} from 'react';
import './style/App.css';
import PictureBlock from './PictureBlock'
import image from './images/image.jpg';

class App extends Component {
    constructor(props) {
        super (props);
        this.state = {
            imgBlock: ''
        }
    }


    getPictureAsync(){

        let imgDownload = new Promise ((resolve, reject)=> {

            setTimeout (()=> {
                resolve (true);
            }, 2000)
        });

        imgDownload.then (result=> {
            this.setState ({imgBlock: <PictureBlock imgPath={image}/>});
        });
    }



    render() {

        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 22. Get async picture with promise</div>
                    <div className="panel-body">

                        {this.state.imgBlock}

                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getPictureAsync();
    };

}

export default App;
