class Pad extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container" id="buttons">
                <div className="row">
                    <div className="col cols-6 cols"><button className="btn btns" id="clear">AC</button></div>
                    <div className="col cols"><button className="btn btns" id="divide">=</button></div>
                    <div className="col cols"><button className="btn btns" id="multiply">pow</button></div>
                </div>
                <div className="row">
                    <div className="col cols"><button className="btn btns" id="1">7</button></div>
                    <div className="col cols"><button className="btn btns" id="1">8</button></div>
                    <div className="col cols"><button className="btn btns" id="1">9</button></div>
                    <div className="col cols"><button className="btn btns" id="1">-</button></div>
                </div>
                <div className="row">
                    <div className="col cols"><button className="btn btns" id="1">4</button></div>
                    <div className="col cols"><button className="btn btns" id="1">5</button></div>
                    <div className="col cols"><button className="btn btns" id="1">6</button></div>
                    <div className="col cols"><button className="btn btns" id="1">+</button></div>
                </div>
                <div className="row">
                    <div className="col cols"><button className="btn btns" id="1">1</button></div>
                    <div className="col cols"><button className="btn btns" id="1">2</button></div>
                    <div className="col cols"><button className="btn btns" id="1">3</button></div>
                    <div className="col cols"><button className="btn btns" id="1">*</button></div>
                </div>
                <div className="row">
                    <div className="col cols"><button className="btn btns" id="1">0</button></div>
                    <div className="col cols"><button className="btn btns" id="1">.</button></div>
                    <div className="col cols"><button className="btn btns" id="1">root</button></div>
                    <div className="col cols"><button className="btn btns" id="1">/</button></div>
                </div>
            </div>
        );
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="container" id="calculator">
                    <div className="container" id="display">0</div>
                    <div className="container" id="pad"><Pad/></div>
                </div>
                <div id="signed">-by harin</div>
            </div>
        );
    };
}

ReactDOM.render(<App/>, document.getElementById("app"));