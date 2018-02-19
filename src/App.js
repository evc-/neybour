import React, { Component } from 'react';
import logo from './logo.svg';
import Gmap from './components/Gmap.js';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Container, Row, Col } from 'reactstrap';
import Narrative from './components/Narrative.js';
import NarrativePin from './components/NarrativePin.js';
import HoodCard from './components/HoodCard.js';


class App extends Component {
    constructor(props){
        super(props);
        
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.pushMarkersData = this.pushMarkersData.bind(this);
        this.shareStory = this.shareStory.bind(this);
        this.loginModal = this.loginModal.bind(this);
        this.login = this.login.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.authenticate = this.authenticate.bind(this);
        
        this.state = {
            collapsed: true,
            markersData:[],
            loggedin: false,
        };
        
        
        
    }
    //bare-bones login; use "test@test.com" and "tester" to login
    login(){
        var email = this.state.email;
        var password = this.state.password;
        fetch('http://localhost:4567/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then((res) => res.json())
        .then((data) => this.authenticate(data));
    }
    authenticate(data){
        if(data.message == "Auth successful"){
            this.setState({
                loggedin:true,
                loginModal:false
            });
            console.log("You're logged in!");
        } else {
            console.log("failed!");
        }
    }
    
    shareStory(){
        if(!this.state.loggedin){
            this.setState({
                loginModal:true
            });
        } else {
            console.log("made post!");
        }
    }
    loginModal(){
        if(this.state.loggedin === false){
            this.setState({
                loginModal:true
            });
        }
    }
    handleEmail(evt){
        this.setState({
            email:evt.target.value
        });
    }
    handlePass(evt){
        this.setState({
            password:evt.target.value
        });
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
      var loginModal = null;
      if (this.state.loginModal){
          loginModal = (
            <div>
              <input type="text" placeholder="username" onChange={this.handleEmail}/>
              <input type="text" placeholder="password" onChange={this.handlePass}/>
              <button onClick={this.login}>Go</button>
              <div>Create Account</div>
              </div>
          )
      }
    return (
      <div className="App">
        
         <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">
        
                <img id="nav-brand"src={require('./img/nav-brand-04.png')} alt="favicon" width="30" height="30" />
        
            </NavbarBrand>
            <Button id="login-btn" onClick={this.loginModal}>login</Button>
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
        {loginModal}
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
