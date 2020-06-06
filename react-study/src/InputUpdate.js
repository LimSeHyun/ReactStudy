import React, { Component } from 'react'

export default class InputUpdate extends Component {

    constructor(props){
		super(props);
		this.state = {
			name : '',
            phoneNum : '',
		}
	}

    onChangeInput = (e) =>{
        this.setState({
            [e.target.name] : e.target.value,
        },()=>{
            console.log(this.state.name)
            console.log(this.state.phoneNum)
        })   
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        this.props.onSubmit(this.state)

        this.setState({
            name:'',
            phoneNum : '',
        })
    }


    render() {
        return (
            <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                <input name="name" type="text" value={this.state.name} placeholder="이름" onChange={(e)=>{this.onChangeInput(e)}}/>
                <input name="phoneNum" type="text" placeholder="전화번호" value={this.state.phoneNum}  onChange={(e)=>{this.onChangeInput(e)}}/>
                <input type="submit" value="등록"/>
            </form>
        )
    }
}


//매개변수를 사용할 경우 함수로 꼭 감싸고 사용!