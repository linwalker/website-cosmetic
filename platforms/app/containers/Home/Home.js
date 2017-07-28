import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Carousel, Row, Col } from 'antd';
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
    console.log(serverActions)
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
        <div className='content'>
          <div className='catalogue'>
            {/*<Row>
              <Col xs={8} className='catalogue_item'>
                护肤
              </Col>
              <Col xs={8} className='catalogue_item'>
                彩妆
              </Col>
              <Col xs={8} className='catalogue_item'>
                美容
              </Col>
            </Row>*/}
            <img src="http://www.yuesai.com/Content/assets_mobi/images/home/btn_bg.jpg" alt=""/>
          </div>
          <div className="bigPic">
            <picture>
              <source srcSet="http://www.yuesai.com/Content/Upload/Banner/20170317042821y1ux11sm.jpg" media="(max-width: 900px)" />
              <img className="bannerImg" srcSet="http://www.yuesai.com/Content/Upload/Banner/20170703145727ogvrpydr.png" alt="pic" />
            </picture>
          </div>
          <div className="bigPic">
            <picture>
              <source srcSet="http://www.yuesai.com/Content/Upload/Banner/20170317042836lhopwuni.jpg" media="(max-width: 900px)" />
              <img className="bannerImg" srcSet="http://www.yuesai.com/Content/Upload/Banner/20170308091818gv5wtnuy.jpg" alt="pic" />
            </picture>
          </div>
          <Row className="smallPicBox">
            <Col span={12} className='smallPic'>
              <img src="http://www.sulwhasoo.com/cn/zh/_jcr_content/banner/image1.jpg/1467698906078.jpg" alt=""/>
            </Col>
            <Col span={12} className='smallPic'>
              <img src="http://www.sulwhasoo.com/cn/zh/_jcr_content/banner/image2.jpg/1467698906078.jpg" alt=""/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
