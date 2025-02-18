import React, { Component } from 'react'

export default class Counter extends Component {
    
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

	minusNum = () =>{
		this.setState({
			num : this.state.num - 1,
		})
	}
	
	componentDidUpdate(){
		console.log("업데이트햇다")
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log("should i update?")
		
		return this.props.name !== nextProps.name;
	}
    
    render() {
        return (
            <div>
                <h3>{this.props.name}카운터</h3>
				<div>
					값 : {this.state.num}
				</div>
				<button onClick={this.plusNum}>+</button>
				<button onClick={this.minusNum}>-</button>
            </div>
        )
    }
}
