import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Menu, Breadcrumb, Layout, Row, Col } from 'antd';
// import { fetchServerStateIfNeeded } from '../actions/serverState'
import 'antd/dist/antd.css'
import './App.css';
const { Header, Content, Footer } = Layout;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }
  toggleShow = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {
    const currentMenu = this.props.location.pathname.replace('/', '') || 'home';
    return (
      <Layout className="layout">
          <Header style={{background: '#fff'}}>
            <i className="nav-phone-icon" onClick={this.toggleShow}></i>
            <Row>
              <Col xs={24} sm={24} md={5} lg={4}>
                logo
              </Col>
              <Col xs={0} sm={0} md={19} lg={20}>
                <Menu theme="light" mode="horizontal" style={{ lineHeight: '64px' }} selectedKeys={[currentMenu]}>
                  <Menu.Item key="home"><Link to="/" >Home</Link></Menu.Item>
                  <Menu.Item key="news"><Link to="/news" >News</Link></Menu.Item>
                  <Menu.Item key="about"><Link to="/about" >About</Link></Menu.Item>
                  <Menu.Item key="test"><Link to="/test" >Testpage</Link></Menu.Item>
                </Menu>
              </Col>
            </Row>

          </Header>
          <Content>
            {
              this.state.toggle ? 
                <Menu theme="light" mode="vertical" style={{ lineHeight: '64px' }} selectedKeys={[currentMenu]} onClick={this.toggleShow}>
                  <Menu.Item key="home"><Link to="/" >Home</Link></Menu.Item>
                  <Menu.Item key="news"><Link to="/news" >News</Link></Menu.Item>
                  <Menu.Item key="about"><Link to="/about" >About</Link></Menu.Item>
                  <Menu.Item key="test"><Link to="/test" >Testpage</Link></Menu.Item>
                </Menu>
                :
                ''
            }
            <div style={{ minHeight: 900, padding: '20px 50px' }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
        )
  }

}

// export default connect(state => {
//   console.log(state)
//   return state.server;
// })(App)
