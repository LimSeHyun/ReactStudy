import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css'
import Counter from './Counter';


class App extends Component {
    constructor(props){
		super(props);
		this.state = {
			num : 0,

		}
	}

	plusNum = () =>{
		this.setState({
			num : this.state.num + 1,
		})
	}

    render() {
        return (
            <div>
                <button onClick={this.plusNum}>asd</button>
                <Counter name={"1번 계산기 "}/>
                <Counter name={"2번 계산기 "}/>
            </div>
        )
    }
}


export default App;
