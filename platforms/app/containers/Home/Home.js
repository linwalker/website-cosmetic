import React, { Component } from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as serverActions from '../../common/actions/serverState';
// import { fetchServerStateIfNeeded } from '../actions/serverState'

function mapStateToProps(state) {
    return {
        serverConfig: state.server.serverConfig,
        loaded: state.server.loaded
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(serverActions, dispatch)
}

class Home extends Component{
  constructor(){
    super()
  }

  componentDidMount () {
   const { loaded} = this.props
   if ( !loaded ) {
      this.props.fetchServerStateIfNeeded(this.props)
   }
 }
  

  render(){
    const {id="", username="", mobile="", email="", county="" } = this.props.serverConfig || {};
    console.log('render props:', this.props)
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


export default  connect(mapStateToProps, mapDispatchToProps)(Home);
