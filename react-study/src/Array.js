import React, { Component } from 'react'

export default class Array extends Component {
    render() {
        return (
            <div className="box">
                <h4>{this.props.memberList.name}</h4>
                <p>{this.props.memberList.phoneNum}</p>
            </div>
        )
    }
}
