import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css'
import Counter from './Counter';


class App extends Component {

    render() {
        return (
            <div>
                <Counter name={"1번 계산기 "}/>
                <Counter name={"2번 계산기 "}/>
            </div>
        )
    }
}


export default App;
