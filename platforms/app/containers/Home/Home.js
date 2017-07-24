import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Carousel } from 'antd';
import * as serverActions from '../../common/actions/serverState';

import './Home.css';

function mapStateToProps(state) {
  return {
    serverConfig: state.server.serverConfig,
    loaded: state.server.loaded
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(serverActions, dispatch)
}

class Home extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const { loaded } = this.props
    if (!loaded) {
      this.props.fetchServerStateIfNeeded(this.props)
    }
  }


  render() {
    const { id = "", username = "", mobile = "", email = "", county = "" } = this.props.serverConfig || {};
    console.log('render props:', this.props)
    return (
      <div>
        <Carousel autoplay>
          <div >
            <picture>
              <source srcSet="http://www.yuesai.com/Content/Upload/Banner/20170719200727g4gbigut.jpg" media="(max-width: 900px)" />
              <img className="bannerImg" srcSet="http://www.yuesai.com/Content/Upload/Banner/20170719200626sskna354.jpg" alt="pic" />
            </picture>
          </div>
          <div >
            <picture>
              <source srcSet="http://www.yuesai.com/Content/Upload/Banner/20170719200547y0njixi1.jpeg" media="(max-width: 900px)" />
              <img className="bannerImg" srcSet="http://www.yuesai.com/Content/Upload/Banner/20170719200222pvsqnavs.jpg" alt="pic" />
            </picture>
          </div>
          <div >
            <picture>
              <source srcSet="http://www.yuesai.com/Content/Upload/Banner/201707031450204xuqyg5g.jpg" media="(max-width: 900px)" />
              <img className="bannerImg" srcSet="http://www.yuesai.com/Content/Upload/Banner/20170703144956rjni53ae.jpg" alt="pic" />
            </picture>
          </div>
          <div>
            <picture>
              <source srcSet="http://www.yuesai.com/Content/Upload/Banner/20170103163830zfewcrov.jpg" media="(max-width: 900px)" />
              <img className="bannerImg" srcSet="http://www.yuesai.com/Content/Upload/Banner/2017030811451324cm4cyx.jpg" alt="pic" />
            </picture>
          </div>
        </Carousel>
        <div>
          <h3>首页</h3>
          <div>ID：{id}</div>
          <div>名称：{username}</div>
          <div>手机：{mobile}</div>
          <div>邮箱：{email}</div>
          <div>居住地：{county}</div>
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
