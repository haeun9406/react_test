import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wiz1 from "./photo/wiz1.jpeg"
import Wiz2 from "./photo/wiz2.jpeg"

class Testcomponent2 extends React.Component {

    render() {
        return (
            <div>
                <img className={"wiz"} src={Wiz2}/>
            </div>
        );
    }
}

class TestComponent extends React.Component {
    state = {
        showPopup: false
    }

    render() {
        return (
            <div>
               <button onClick={()=>this.setState({
                   showPopup: !this.state.showPopup
               })}>Wiz</button>
                {this.state.showPopup&&<div><img className={"wiz"} src={Wiz1} /></div>}

                <Testcomponent2 />
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <TestComponent />,
    document.getElementById('root')
);
