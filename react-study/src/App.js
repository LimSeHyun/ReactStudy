import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css'
import Counter from './Counter';
import InputUpdate from './InputUpdate';
import Array from './Array';


class App extends Component {
    constructor(props){
		super(props);
		this.state = {
            num : 0,
            member : [{
                name : '김떡볶이',
                phoneNum : '010-떡볶이는-사랑이다'
            }]
		}
	}

	plusNum = () =>{
		this.setState({
			num : this.state.num + 1,
		})
    }
    
    InputUpdate = (data) => {
        this.setState({
            member :  this.state.member.concat(data)
        })        
        console.log(data)
    }

    componentDidUpdate(){
        console.log(this.state.member)
    }

    render() {
        const memberList = this.state.member.map((data)=>{
            return <Array memberList = {data} key={data.phoneNum}></Array>
        })
        return (
            <div>
                <button onClick={this.plusNum}>asd</button>
                <Counter name={"1번 계산기 "}/>
                <Counter name={"2번 계산기 "}/>
                <InputUpdate onSubmit={this.InputUpdate}></InputUpdate>
                {memberList}
            </div>
        )
    }
}


export default App;
