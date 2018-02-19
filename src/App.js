import React, { Component } from 'react';
import logo from './logo.svg';
import Gmap from './components/Gmap.js';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Container, Row, Col } from 'reactstrap';
import Narrative from './components/Narrative.js';
import NarrativePin from './components/NarrativePin.js';
import HoodCard from './components/HoodCard.js';
import Login from './components/Login.js';


class App extends Component {
    constructor(props){
        super(props);
        
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.pushMarkersData = this.pushMarkersData.bind(this);
        this.shareStory = this.shareStory.bind(this);
        
        this.state = {
            collapsed: true,
            markersData:[],
            loggedin: false,
            respMessage: [],
            userInfo: [],
            modal:''
        };
        
        
        
    }
    shareStory(){
        console.log("share story!");
    }

    userInfo(data){
        console.log(data);
    }
    
    pushMarkersData(data){
        var arr = this.state.markersData;
        arr.push(data);
        
        this.setState({
            markersData:arr
        })
    }
    
    toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
    
    
  render() {
    return (
      <div className="App">
        
         <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">
        
                <img id="nav-brand"src={require('./img/nav-brand-04.png')} alt="favicon" width="30" height="30" />
        
            </NavbarBrand>
            <Button id="login-btn" className="navBtn" onClick={()=>{this.setState({modal:"login"})}}>login</Button>
            <Button id="sign-up-btn" className="navBtn" onClick={()=>this.setState({modal:"signup"})}>sign up</Button>
          <NavbarToggler id="toggler" onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">FAQ</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Login 
            userInfo={this.userInfo} 
            modalState={this.state.modal}
                />
        <Container id="full-bg" fluid>
            <Row>
                <Col md="1"></Col>
                <Col md="5">
                    <div className="header-home">neybour.</div>
                    <br />
                    <div className="subheader-home">“A city is more than a place in space, it is a drama in time”</div>
                    <br />
                    <div className="about-home">Neybour is a place to share your stories, memories, and personal connections to the places and spaces in your neighbourhood. Explore the pins below and read the narratives for ideas of a perfect day in the neighbourhood, and sign in to share your own. </div>
                    <br />
                    <Button id="sign-up-btn" onClick={this.shareStory}>share your story</Button>
                </Col>
                <Col md="6">
                    <img className="img-fluid"src={require('./img/map-placeholder-04.png')}/>
                </Col>
            </Row>
        </Container>
        <br />
        <br />
                    
        <Container>
            <Row>
                    <HoodCard
                        hoodName="Gastown"
                        hoodDesc="A place with a clock"
                        hoodImg={require('./img/home.svg')}
                        hoodCoords="49.2°N, 123.1°W"
                    />
                    <HoodCard
                        hoodName="Kits"
                        hoodDesc="A place with a beach"
                        hoodImg={require('./img/home.svg')}
                        hoodCoords="49.2°N, 123.1°W"
                    />
                    <HoodCard
                        hoodName="Hastings"
                        hoodDesc="A place with a park"
                        hoodImg={require('./img/home.svg')}
                        hoodCoords="49.2°N, 123.1°W"
                    />
                    <HoodCard
                        hoodName="Shaungessy"
                        hoodDesc="A place with a mansions"
                        hoodImg={require('./img/home.svg')}
                        hoodCoords="49.2°N, 123.1°W"
                    />

            </Row>
        </Container>
        <br />
        <br />
        
        {
        /*
        <Container>
            <Row>
                <Col xs="12">
                    <NarrativePin
                        pinMsg="I am a pin">
                        <Narrative>
                            <div>Text that shows up in the modal</div>
                        </Narrative>
                    </NarrativePin>
                </Col>
            </Row>
        </Container>
        */
        }
        
        {
        /*
        <Container id="map-container-full" fluid>
            <Row>
                <Col xs="12">
                    <Gmap
                       markersData={this.state.markersData}
                        pushMarkersData={this.pushMarkersData}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{height:"100%"}} />}
                        containerElement={<div className="map-container" />}
                        mapElement={<div style={{ height:"100%"}} />}
                    />
                </Col>
            </Row>
        </Container>
        */
        }
        
      </div>
    );
  }
}

export default App;
