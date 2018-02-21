import React, { Component } from 'react';
import logo from './logo.svg';
//import Gmap from './components/Gmap.js';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Container, Row, Col } from 'reactstrap';
import Narrative from './components/Narrative.js';
import NarrativePin from './components/NarrativePin.js';
import HoodCard from './components/HoodCard.js';
import SimpleMap from './components/Gmap-istarkov.js';
import Login from './components/Login.js';


class App extends Component {
    constructor(props){
        super(props);
        
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.pushMarkersData = this.pushMarkersData.bind(this);
        this.updateCoords = this.updateCoords.bind(this);
        this.setHood = this.setHood.bind(this);
        this.shareStory = this.shareStory.bind(this);
        
        this.state = {
            collapsed: true,
            markersData:[],
            mapCoords:null,
            defaultCenter:{
                lat: -34,
                lng: 150
            },
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
    
    updateCoords(lat, lng){
        this.setState({
            mapCoords:{lat, lng}
        })
        
        console.log(this.state.mapCoords);
    }
    
    setHood(hood){
        this.setState({
            hoodName: hood
        })
        
    }
    
    
  render() {
            
            console.log(this.state.hoodName);

      
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
                <Col md="6">
                    <div className="header-home">neybour.</div>
                    <br />
                    <div className="subheader-home">explore Vancouver's stories by neighbourhood</div>
                    <br />
                    <div className="about-home">Neybour is a place to share your stories, memories, and personal connections to the places and spaces in your Vancouver neighbourhood. Select a neighbourhood to start.</div>
                    <br />
                    <Button id="sign-up-btn">
                        share your story
                    </Button>
                    <Button id="sign-up-btn" onClick={this.shareStory}>share your story</Button>
                </Col>
                <Col md="6">
                    <img className="img-fluid" src={require('./img/map/map.svg')} />
                </Col>
            </Row>
        </Container>
                                                    
        <br />
        <br />
                    
        <Container>
            <Row>
                    <HoodCard
                        hoodName="Downtown"
                        hoodDesc="A place with tall buildings"
                        hoodImg={require('./img/newicons/Downtown/icons-06.svg')}
                        hoodCoords="49.2°N, 123.1°W"
                    />
                    <HoodCard
                        hoodName="Riley Park"
                        hoodDesc="A place with something"
                        hoodImg={require('./img/newicons/Riley Park/icons-12.svg')}
                        hoodCoords="49.2°N, 123.1°W"
                    />
                    <HoodCard
                        hoodName="Hastings"
                        hoodDesc="A place with a park"
                        hoodImg={require('./img/newicons/Hastings-Sunrise/icons-03.svg')}
                        hoodCoords="49.2°N, 123.1°W"
                    />
                    <HoodCard
                        hoodName="Shaughnessy"
                        hoodDesc="A place with a mansions"
                        hoodImg={require('./img/newicons/Shaughnessy/icons-11.svg')}
                        hoodCoords="49.2°N, 123.1°W"
                    />

            </Row>
        </Container>

        
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
        
        <Container id="map-container" fluid>
            <Row>
                <Col xs="12">
                    <SimpleMap
                        
                    />
                </Col>
            </Row>
                    
                    {
                    /*
                    <Gmap
                        mapCoords={this.state.mapCoords}
                        markersData={this.state.markersData}
                        pushMarkersData={this.pushMarkersData}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{height:"100%"}} />}
                        containerElement={<div className="map-container" />}
                        mapElement={<div style={{ height:"100%"}} />}
                    />
                    */
                }

            
        </Container>

      </div>
    );
  }
}

export default App;
