import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

//class Answer represents numbers.
//User can match the numbers to the number of randomly generated balls
class Answer extends React.Component {
    render() {
        return (
            <div>
                <span className="btn-style">1</span>
                <span className="btn-style">2</span>
                <span className="btn-style">3</span>
                <span className="btn-style">4</span>
            </div>
        );
    }
}

//class Soccer_ball represents the randomly generated soccer balls
class SoccerBall extends React.Component {
    render() {
        return (
            <div>
                   <span style={{padding: '10px'}}>
                        <i className="fa fa-futbol-o fa-2x" aria-hidden="true"></i>
                        </span>
                <span style={{padding: '10px'}}>
                        <i className="fa fa-futbol-o fa-2x" aria-hidden="true"></i>
                        </span>
                <span style={{padding: '10px'}}>
                        <i className="fa fa-futbol-o fa-2x" aria-hidden="true"></i>
                        </span>
                <span style={{padding: '10px'}}>
                        <i className="fa fa-futbol-o fa-2x" aria-hidden="true"></i>
                        </span>
            </div>
        );
    }
}

//class CheckAnswer represents the equality of the answer with the generated balls.
class CheckAnswer extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary">=</button>
            </div>
        );
    }
}

//class SelectedAnswer represents the selected answer for the balls.
class SelectedAnswer extends React.Component {
    render() {
        return (
            <div>
                <span className="btn-style">1</span>
                <span className="btn-style">3</span>
            </div>
        );
    }
}

//Game component represents main component of game
class Game extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Soccer Game</h1>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-5">
                        <SoccerBall/>
                    </div>
                    <div className="col-md-2">
                        <CheckAnswer/>
                    </div>
                    <div className="col-md-5">
                        <SelectedAnswer/>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-12">
                        <Answer/>
                    </div>
                </div>

            </div>
        );
    }
}

//App class to render all other class components
class App extends React.Component {
    render() {
        return (
            <Game/>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
