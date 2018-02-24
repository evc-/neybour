import React, { Component } from 'react';
import logo from './logo.svg';
import GMap from './components/Gmap.js';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Container, Row, Col } from 'reactstrap';
import Narrative from './components/Narrative.js';
import NarrativePin from './components/NarrativePin.js';
import HoodCard from './components/HoodCard.js';
//import SimpleMap from './components/Gmap-istarkov.js';
import Login from './components/Login.js';
import PostModal from './components/PostModal.js';
//import { Carousel } from 'react-responsive-carousel';
//import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';


class App extends Component {
    constructor(props){
        super(props);
        
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.pushMarkersData = this.pushMarkersData.bind(this);
        this.updateCenter = this.updateCenter.bind(this);
        this.setHood = this.setHood.bind(this);
        this.shareStory = this.shareStory.bind(this);
        this.userInfo = this.userInfo.bind(this);
        this.addPost = this.addPost.bind(this);
        this.pushMarkersData = this.pushMarkersData.bind(this);
        
        this.state = {
            collapsed: true,
            markersData:[],
            mapCoords:null,
            centerLat: 34,
            centerLng: 45,
            loggedin: false,
            posts:[],
            respMessage: [],
            userInfo: [],
            modal:'',
            postModal:false
        };   
    }
    
    addPost(post){
        let temp = this.state.posts;
        temp.push(post);
        this.setState({
            posts:temp
        });
        this.setState({
            postModal:false
        })
    }

    shareStory(){
        if(this.state.loggedin === true){
            this.setState({
                postModal:true
            })   
        } else {
            console.log("log in you doof");
        }
    }

    userInfo(data){
        this.setState({
            loggedin:true,
            userInfo:data,
            token:data.token
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
    
    updateCenter(lat, lng){
        this.setState({
            centerLat:lat,
            centerLng:lng
        })
    };
    
    setHood(hood){
        this.setState({
            hoodName: hood
        })
        
    }
        pushMarkersData(data){
        var arr = this.state.markersData;
        arr.push(data);
        
        this.setState({
            markersData:arr
        })
    }
    
    
  render() {     
/*
var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;
*/      
            
    var loginComp = null;
      
      if (this.state.loggedin === false){
          loginComp = (
            <Login 
            userInfo={this.userInfo} 
            modalState={this.state.modal}
                />
          )
      } else {
          loginComp = (
            <div></div>
          )
      }
      
      
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
    {loginComp}
        <Container id="full-bg" fluid>
            <Row>
                <Col md="6">
                    <div className="header-home">neybour.</div>
                    <br />
                    <div className="subheader-home">explore Vancouver's stories by neighbourhood</div>
                    <br />
                    <div className="about-home">Neybour is a place to share your stories, memories, and personal connections to the places and spaces in your Vancouver neighbourhood. Select a neighbourhood to start.</div>
                    <br />
                    <Button id="sign-up-btn"><a href="#map-container">share your story</a></Button>
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
                        onClick={()=>this.updateCenter(49.2536, 123.1604)}
                        hoodName="Arbutus Ridge"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Arbutus-Ridge/icons-01.svg')}
                        hoodLat={49.2536}
                        hoodLng={123.1604}
                    />
                            
                    <HoodCard
                        hoodName="Downtown"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Downtown/icons-06.svg')}
                        hoodLat={49.2820}
                        hoodLng= {123.1171}
                                 
                    />
                    
                    <HoodCard
                        hoodName="Dunbar"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Dunbar/icons-13.svg')}
                        hoodLat={49.1404}
                        hoodLng={123.1109}
                    />
                   
                    <HoodCard
                        hoodName="Fairview"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Fairview/icons-10.svg')}
                        hoodLat={49.2660}
                        hoodLng={123.1289}
                    />
                                 
                    <HoodCard
                        hoodName="Hastings-Sunrise"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Hastings-Sunrise/icons-03.svg')}
                        hoodLat={49.2811}
                        hoodLng={123.0441}
                    />
                            
                    <HoodCard
                        hoodName="Kensington"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Kensington/icons-02.svg')}
                        hoodLat={49.2484}
                        hoodLng={123.0701}
                    />

                    <HoodCard
                        hoodName="Kerrisdale"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Kerrisdale/icons-05.svg')}
                        hoodLat={49.2341}
                        hoodLng={123.1554}
                    />

                    <HoodCard
                        hoodName="Kitsilano"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Kitsilano/icons-14.svg')}
                        hoodLat={49.2709}
                        hoodLng={123.1621}
                    />

                    <HoodCard
                        hoodName="Mt. Pleasant"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Mt-Pleasant/icons-08.svg')}
                        hoodLat={49.2583}
                        hoodLng={123.1082}
                    />

                    <HoodCard
                        hoodName="Oakridge"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Oakridge/icons-07.svg')}
                        hoodLat={49.2298}
                        hoodLng={123.1162}
                    />

                    <HoodCard
                        hoodName="Riley Park"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Riley-Park/icons-12.svg')}
                        hoodLat={49.2449}
                        hoodLng={123.1135}
                    />

                    <HoodCard
                        hoodName="Shaughnessy"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Shaughnessy/icons-11.svg')}
                        hoodLat={49.2473}
                        hoodLng={123.1409}
                    />
    
                    <HoodCard
                        hoodName="Sunset"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/Sunset/icons-04.svg')}
                        hoodLat={49.2245}
                        hoodLng={123.0900}
                    />

                    <HoodCard
                        hoodName="West End"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/West-End/icons-09.svg')}
                        hoodLat={49.2856}
                        hoodLng={123.1306}
                    />

                    <HoodCard
                        hoodName="West Point Grey"
                        hoodDesc="tagline"
                        hoodImg={require('./img/newicons/West-Point-Grey/icons-15.svg')}
                        hoodLat={49.2610}
                        hoodLng={123.2001}
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

        <Container id="pin-controls" fluid>
            <Row>
                <Col xs="12">
                    <div>
                    <button>See all pins</button>
                    <button>See my pins</button>
                    </div>
                </Col>
            </Row>
        </Container>

        <Container id="neighbourhood-dash" fluid>
            <Row>
                <Col xs="12">
                    <div>
                    <div>Welcome to *Neighbourhood Name*</div>
                    <div>Current Weather</div>
                    </div>
                </Col>
            </Row>
        </Container>


        <Container id="map-container" fluid>
            <Row>
                <Col xs="12">
                    <GMap
                    token = {this.state.token}
                    addPost = {this.addPost}
                    markersData={this.state.markersData}
                    pushMarkersData={this.pushMarkersData} googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: '100%' }}/> }
                    containerElement={<div style={{ height: '300px' }} /> }
                    mapElement={<div style={{ height: '100%' }}/>}
                    centerLat={this.state.centerLat}
                    centerLng={this.state.centerLng}
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
/*
<link rel="stylesheet" href="../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"/>
*/
