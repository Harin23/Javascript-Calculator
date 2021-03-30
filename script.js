class Pad extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container" id="buttons">
                <div className="row">
                    <div className="col-9 cols"><button className="btns" onClick={this.props.handleClick} id="clear">AC</button></div>
                    <div className="col cols"><button className="btns" onClick={this.props.handleClick} id="equals">=</button></div>
                </div>
                <div className="row">
                    <div className="col cols"><button className="btns" onClick={this.props.handleClick} id="seven">7</button></div>
                    <div className="col cols"><button className="btns" onClick={this.props.handleClick} id="eight">8</button></div>
                    <div className="col cols"><button className="btns" onClick={this.props.handleClick} id="nine">9</button></div>
                    <div className="col cols"><button className="btns" onClick={this.props.handleClick} id="subtract">-</button></div>
                </div>
                <div className="row">
                    <div className="col cols"><button className="btns" onClick={this.props.handleClick} id="four">4</button></div>
                    <div className="col cols"><button className="btns" onClick={this.props.handleClick} id="five">5</button></div>
                    <div className="col cols"><button className="btns" onClick={this.props.handleClick} id="six">6</button></div>
                    <div className="col cols"><button className="btns" onClick={this.props.handleClick} id="add">+</button></div>
                </div>
                <div className="row">
                    <div className="col cols"><button className="btns" onClick={this.props.handleClick} id="one">1</button></div>
                    <div className="col cols"><button className="btns" onClick={this.props.handleClick} id="two">2</button></div>
                    <div className="col cols"><button className="btns" onClick={this.props.handleClick} id="three">3</button></div>
                    <div className="col cols"><button className="btns" onClick={this.props.handleClick} id="multiply">*</button></div>
                </div>
                <div className="row">
                    <div className="col-6 cols"><button className="btns" onClick={this.props.handleClick} id="zero">0</button></div>
                    <div className="col cols"><button className="btns" onClick={this.props.handleClick} id="decimal">.</button></div>
                    <div className="col cols"><button className="btns" onClick={this.props.handleClick} id="divide">/</button></div>
                </div>
            </div>
        );
    }
}

const DEFUALT_STATE={
    display:"",
    current: "0",
    decimal: false,
    evaluated: false,
    clearCurr: true
};
const operator= ["+", "-", "*", "/"];

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ...DEFUALT_STATE
        };
        this.resetState = this.resetState.bind(this);
        this.display =this.display.bind(this);
        this.current = this.current.bind(this);
    }
    resetState(){
        this.setState({
            ...DEFUALT_STATE
        });
    }
    display(e){
        let input = e.target.innerText
        if(input=="AC"){
            this.resetState()
        }else if(input=="="){
            if(operator.indexOf(this.state.current)!=-1||eval(this.state.display)==undefined){
                let display=document.getElementById("full-display");
                display.classList.add("error")
                setTimeout(()=>{
                    display.classList.remove("error")
                },1000)
            }else{
                this.setState(state=>({
                    evaluated: true,
                    current: eval(state.display),
                    display: state.display + input + eval(state.display)
                }));
            }
 
        }else if(this.state.evaluated==true && operator.indexOf(input)!=-1){
            this.setState(state=>({
                ...DEFUALT_STATE,
                display: state.current + input,
                current: input
            }));
            // this.current(input);
        }else if(this.state.evaluated==true){
            this.resetState();
            this.current(input);
        }else{
            this.current(input);
        }
    }
    current(input){
        if(input=="."&&this.state.decimal==false){
            if(this.state.clearCurr==true){
                this.setState(state=>({
                    display: state.display+"0"+input,
                    current: "0"+input,
                    decimal: true,
                    clearCurr: false
                }));
            }else{
                this.setState(state=>({
                    display: state.display + input,
                    current: state.current + input,
                    decimal: true,
                    clearCurr: false
                }));
            }
        }else if(input!="."&&operator.indexOf(input)!=-1){
            this.setState(state=>({
                display: (state.display + input).replace(/([*+/]+[-]*){2,}/g, input),
                decimal: false,
                current: input,
                clearCurr: true
            }));
        }else if(input!="."){
            if(this.state.clearCurr==true){
                this.setState(state=>({
                    display: state.display + input,
                    current: input,
                    clearCurr: false
                }));
            }else{
                if(this.state.current.match(/^(0)+/g)==null||this.state.current.indexOf(".")!=-1){
                    this.setState(state=>({
                        display: state.display + input,
                        current: state.current + input
                    }));
                }else if(this.state.current.match(/^(0)+/g)!=null||input.match(/[1-9]/g)!=null){
                    this.setState(state=>({
                        display: state.display.slice(0,state.display.length-1)+input,
                        current: input
                    }));
                }else{
                    this.setState(state=>({
                        display: state.display.slice(0,state.display.length-1)+"0",
                        current: "0"
                    }));
                }
            }
        }
    }
    render(){
        return(
            <div>
                <div className="container" id="calculator">
                    <div className="container" id="full-display">
                        <div id="expression">{this.state.display}</div>
                        <div id="display">{this.state.current}</div>
                    </div>
                    <div className="container" id="pad"><Pad handleClick={this.display} /></div>
                </div>
                <div id="signed"><strong>-by harin</strong></div>
            </div>
        );
    };
}

ReactDOM.render(<App/>, document.getElementById("app"));