import React from 'react';
import './App.css';
import generator from './helpers/generator';

class App extends React.Component {
  // console.log(typeof path);
  constructor(props) {
    super(props);
    const initState = {
      ...generator(),
      gameEnd: false,
      gameResult: null
    };
    this.initState = initState;
    this.state = { ...this.initState };
  }

  componentDidMount() {}

  onClickDoinGame = op => e => {
    if (this.state.gameEnd) return;
    e.preventDefault();
    this.setState(prevState => {
      const currentResult = op.func(prevState.currentResult);
      const moves = prevState.moves - 1;
      const gameEnd = moves === 0;
      const gameResult = currentResult === prevState.goal;
      if (gameResult && moves === 0) {
        return {
          ...generator(),
          gameEnd: false,
          gameResult: null
        };
      } else {
        return {
          currentResult,
          moves,
          gameEnd,
          gameResult
        };
      }
    });
  };

  onClickReset = e => {
    e.preventDefault();
    this.setState(this.initState);
  };

  render() {
    const { operators, currentResult, moves, goal } = this.state;
    return (
      <div className="container">
        <div className="caculator">
          <div className="screen-container">
            <div className="head--screen">
              <div className="levels">Level: 4</div>
              <div className="player">ttmh</div>
            </div>
            <div className="onscreen">
              <div className="info-game">
                <div className="info-status" />
                <div className="info-label">
                  <div className="info-value moves">Moves: {moves}</div>
                </div>
                <div className="info-label">
                  <div className="info-value goal">Goal: {goal} </div>
                </div>
              </div>
              <div className="result">
                <div className="rs-background">88888888</div>
                <div className="rs-top flash">{currentResult}</div>
              </div>
            </div>
            <div className="bottom--screen" />
          </div>
          <div className="buttons">
            {operators.map((item, index) => (
              <button
                key={index.toString()}
                className={`button number${index}`}
                onClick={this.onClickDoinGame(item)}
              >
                {item.label}
              </button>
            ))}
            {/* <button className="button">-3</button>
            <button className="button">+2</button>
            <button className="button">/3</button>
            <button className="button">x3</button>
            <button className="button">-3</button> 
            <button className="button-none" /> */}
            <button
              className="button button--secondary button--clear"
              onClick={this.onClickReset}
            >
              clr
            </button>
            <button className="button button--secondary button--hint">
              <i className="help-icon">
                <svg width="35" height="46" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <title>background</title>
                    <rect
                      fill="none"
                      id="canvas_background"
                      height="52"
                      width="37"
                      y="-1"
                      x="-1"
                    />
                  </g>
                  <g>
                    <title>Layer 1</title>
                    <path
                      fill="#ffffff"
                      strokeWidth="0"
                      stroke="#000"
                      id="svg_2"
                      d="m17.50647,0.77427c-8.91945,0 -16.05501,7.13556 -16.05501,16.05501c0,1.96228 0.35678,3.74617 0.89194,5.35167l4.45973,8.91945c0.53517,0.71355 1.07033,1.42711 1.78389,1.78388c0,0 0,0 0,0l0,1.78389c0,1.07034 0.71355,1.78389 1.78389,1.78389l0,1.78389c0,1.07034 0.71355,1.78389 1.78389,1.78389l0,1.78389c0,1.07034 0.71355,1.78389 1.78389,1.78389l7.13556,0c1.07033,0 1.78389,-0.71355 1.78389,-1.78389l0,-1.78389c1.07033,0 1.78389,-0.71355 1.78389,-1.78389l0,-1.78389c1.07033,0 1.78388,-0.71355 1.78388,-1.78389l0,-1.78389c0,0 0,0 0,-0.17838c0.71356,-0.17839 1.42712,-0.89195 1.78389,-1.6055l4.45973,-8.91945c0.53517,-1.6055 0.89194,-3.38939 0.89194,-5.35167c0,-8.91945 -7.13556,-16.05501 -16.055,-16.05501zm3.56778,41.02946l-7.13556,0l0,-1.78389l7.13556,0l0,1.78389zm1.78389,-3.56778l-1.78389,0l-7.13556,0l-1.78389,0l0,-1.78389l10.70334,0l0,1.78389zm1.78389,-3.56778l-1.78389,0l-10.70334,0l-1.78389,0l0,-1.78389l14.27112,0l0,1.78389zm4.10294,-12.48722l-3.56778,7.13556l-15.34145,0l-3.56778,-7.13556c-0.89194,-1.6055 -1.24872,-3.38939 -1.24872,-5.35167c0,-6.95717 5.53006,-12.48723 12.48723,-12.48723s12.48722,5.53006 12.48722,12.48723c0,1.96228 -0.35677,3.74617 -1.24872,5.35167z"
                    />
                    <path id="svg_3" d="m17,9l1,0l-1,0z" />
                  </g>
                </svg>
              </i>
            </button>
            <button className="button button--secondary button--setting">
              <i className="help-icon">
                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                  <title />
                  <desc />

                  <g>
                    <title>background</title>
                    <rect
                      fill="none"
                      id="canvas_background"
                      height="52"
                      width="52"
                      y="-1"
                      x="-1"
                    />
                  </g>
                  <g>
                    <title>Layer 1</title>
                    <path
                      id="editor-setting-gear-glyph"
                      fill="#ffffff"
                      d="m19.3078,8.8992l0,-6.64648c0,-1.26242 1.017,-2.26961 2.27151,-2.26961l6.81676,0c1.26341,0 2.27153,1.01614 2.27153,2.26961l0,6.65568c0.57169,0.20259 1.12937,0.43481 1.67116,0.69484l4.70857,-4.70819c0.89272,-0.89264 2.3241,-0.88578 3.21118,0.00123l4.82019,4.81975c0.89336,0.89331 0.88761,2.32459 0.00121,3.21094l-4.71777,4.71737c0.25716,0.5389 0.48683,1.09344 0.68722,1.66181l6.67311,0c1.26252,0 2.26982,1.01691 2.26982,2.27132l0,6.81618c0,1.2633 -1.01625,2.27133 -2.26982,2.27133l-6.68231,0c-0.20041,0.56544 -0.42981,1.11716 -0.68645,1.65339l4.7262,4.7258c0.89274,0.89264 0.88585,2.3239 -0.00121,3.21091l-4.82019,4.81978c-0.89335,0.89328 -2.32478,0.88753 -3.21118,0.0012l-4.7262,-4.72579c-0.53627,0.25661 -1.08804,0.48599 -1.65353,0.68639l0,6.68174c0,1.26242 -1.017,2.26962 -2.27153,2.26962l-6.81676,0c-1.26342,0 -2.27151,-1.01616 -2.27151,-2.26962l0,-6.67254c-0.56842,-0.20037 -1.123,-0.43003 -1.66196,-0.68717l-4.71776,4.71737c-0.89275,0.89267 -2.32413,0.88578 -3.21121,-0.0012l-4.82017,-4.81978c-0.89338,-0.89328 -0.88763,-2.32459 -0.00123,-3.21091l4.70859,-4.70817c-0.26005,-0.54175 -0.49229,-1.09938 -0.6949,-1.67102l-6.65625,0c-1.26252,0 -2.2698,-1.01691 -2.2698,-2.27133l0,-6.81618c0,-1.26331 1.01623,-2.27132 2.2698,-2.27132l6.64705,0c0.20257,-0.57457 0.43508,-1.13501 0.69565,-1.67947l-4.70014,-4.69971c-0.89272,-0.89267 -0.88586,-2.32393 0.00123,-3.21094l4.82017,-4.81975c0.89338,-0.8933 2.32478,-0.88756 3.21121,-0.00123l4.70011,4.69974c0.5445,-0.26055 1.10499,-0.49304 1.67961,-0.69559l0,0zm17.02665,16.07333c0,-6.2733 -5.08596,-11.35883 -11.35979,-11.35883c-6.27383,0 -11.35979,5.08553 -11.35979,11.35883c0,6.2733 5.08596,11.35882 11.35979,11.35882c6.27383,0 11.35979,-5.08552 11.35979,-11.35882z"
                    />
                    <ellipse
                      stroke="null"
                      ry="11.577787"
                      rx="11.504738"
                      id="svg_4"
                      cy="24.848202"
                      cx="24.853909"
                      strokeOpacity="null"
                      strokeWidth="null"
                      fill="#e2bc1d"
                    />
                  </g>
                </svg>
              </i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
