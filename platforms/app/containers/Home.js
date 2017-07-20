import React, { Component } from 'react'
import {connect} from 'react-redux'
// import { fetchServerStateIfNeeded } from '../actions/serverState'


class Home extends Component{
  constructor(){
    super()
  }

  

  render(){
    const {id="", username="", mobile="", email="", county="" } = this.props.serverConfig || {};

    return (
      <div>
        <h3>首页</h3>
        <div>ID：{id}</div>
        <div>名称：{username}</div>
        <div>手机：{mobile}</div>
        <div>邮箱：{email}</div>
        <div>居住地：{county}</div>
      </div>
    )
  }
}


export default Home
