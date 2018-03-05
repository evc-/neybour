import React, { Component } from 'react';
import logo from './logo.svg';
//import GMap from './components/Gmap.js';
//import GMap from './components/iMap.js';
import Map from './components/newMap';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Container, Row, Col } from 'reactstrap';
import Narrative from './components/Narrative.js';
import NarrativePin from './components/NarrativePin.js';
import HoodCard from './components/HoodCard.js';
import Login from './components/Login.js';
import PostModal from './components/PostModal.js';
import MapGraphic from './components/MapGraphic.js';
import { slide as Menu } from 'react-burger-menu';
import backarrow from './img/backarrow-01.svg';

class App extends Component {
    
    constructor(props){
        super(props);
        
        
        this.updateByName = this.updateByName.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.pushMarkersData = this.pushMarkersData.bind(this);
        this.updateHood = this.updateHood.bind(this);
        this.shareStory = this.shareStory.bind(this);
        this.userInfo = this.userInfo.bind(this);
        this.addPost = this.addPost.bind(this);
        this.markerCoords = this.markerCoords.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.weatherFetch = this.weatherFetch.bind(this);
        
        this.state = {
            collapsed: true,
            markersData:[],
            mapCoords:null,
            mapCenter: {lat: 49.2827, lng: -123.1207},
            loggedIn: false,
            posts:[],
            respMessage: [],
            markerCoords: { lat:'', long:'' },
            userInfo: [],
            modal:'',
            postModal:false,
            modalOpen: false,
            modalName: null,
            sidebar: "landingMsg",
            pageTitle: "neybour.",
            menuOpen: true,
            width: window.innerWidth,
            hoodImg: require("./img/icons/neighbourhood.svg"),
            hoodName: "Vancouver",
            hoodDesc: "Explore the neighbourhoods",
            credits: false,
            posts: [{title:"dummy title", coords:{lat: 49, lng: -123}, body:"dummybody", region:"dummyregion"}],
            neighbourhoodArr: [

          {
            name: "Arbutus-Ridge",
            icon: require("./img/newicons/Arbutus-Ridge/icons-01.svg"),
            coords: {lat: 49.2536, lng: -123.1604}
          }, 
          
          {
            name: "Downtown",
            icon: require("./img/newicons/Downtown/icons-06.svg"),
            coords: {lat: 49.2820, lng: -123.1171}
          }, 
          
          {
            name: "Dunbar",
            icon: require("./img/newicons/Dunbar/icons-13.svg"),
            coords: {lat: 49.2458, lng: -123.1854}
          },
          
          {
            name: "Fairview",
            icon: require('./img/newicons/Fairview/icons-10.svg'),
            coords: {lat: 49.2660, lng: -123.1289}
          },
          
          {
            name: "Hastings-Sunrise",
            icon: require('./img/newicons/Hastings-Sunrise/icons-03.svg'),
            coords: {lat: 49.2811, lng: -123.0441}
          },
          
          {
              name: "Grandview-Woodland",
              icon: require('./img/newicons/Grandview-Woodland/icons-20.svg'),
              coords: {lat: 49.2697, lng: -123.0697}
          },
          
          {
            name: "Kensington",
            icon: require('./img/newicons/Kensington/icons-02.svg'),
            coords: {lat: 49.2484, lng: -123.0701}
          },
          
          {
            name: "Kerrisdale",
            icon: require('./img/newicons/Kerrisdale/icons-05.svg'),
            coords: {lat: 49.2341, lng: -123.1554}
          },
          
          {
              name: "Killarney",
              icon: require('./img/newicons/Killarney/icons-17.svg'),
              coords: { lat:49.2247, lng:-123.0411}
          },
                        
          {
            name: "Kitsilano",
            icon: require('./img/newicons/Kitsilano/icons-14.svg'),
            coords: {lat: 49.2709, lng: -123.1621}
          }, 
          
          {
              name: "Marpole",
              icon: require('./img/newicons/Marpole/icons-07.svg'),
              coords:{lat:49.2107, lng: -123.1302}
          },
          
          {
            name: "Mt.Pleasant",
            icon: require('./img/newicons/Mt-Pleasant/icons-08.svg'),
            coords: {lat: 49.2583, lng: -123.1082}
          }, 
          
          {
            name: "Oakridge",
            icon: require('./img/newicons/Oakridge/icons-07.svg'),
            coords: {lat: 49.2298, lng: -123.1162}
          }, 
          
          {
            name: "Renfrew",
            icon: require('./img/newicons/Renfrew-Collingwood/icons-18.svg'),
            coords:{lat: 49.2411, lng: -123.0388}
          },
          
           {
            name: "Riley-Park",
            icon: require('./img/newicons/Riley-Park/icons-12.svg'),
            coords: {lat: 49.2449, lng: -123.1135}
          }, 
          
           {
            name: "Shaughnessy",
            icon: require('./img/newicons/Shaughnessy/icons-11.svg'),
            coords: {lat: 49.2473, lng: -123.1409}
          }, 
          
          {
            name: "South-Cambie",
            icon: require('./img/newicons/South-Cambie/icons-21.svg'),
            coords: {lat: 49.2452, lng: -123.1208}
          },
          
          {
            name: "Strathcona",
            icon: require('./img/newicons/Strathcona/icons-22.svg'),
            coords: {lat: 49.2737, lng: -123.0979}
          },
          
          {
            name: "Sunset",
            icon: require('./img/newicons/Sunset/icons-04.svg'),
            coords: {lat: 49.2245, lng: -123.0900}
          }, 
          
          {
            name: "UBC",
            icon: require('./img/newicons/UBC/icons-19.svg'),
            coords: {lat: 49.2606, lng: -123.2460}
          },
          
          {
            name: "Victoria-Fraserview",
            icon: require('./img/newicons/Victoria-Fraserview/icons-23.svg'),
            coords: {lat: 49.2185, lng: -123.0659}  
          },
          
          {
           name: "WestEnd",
           icon: require('./img/newicons/West-End/icons-09.svg'),
            coords: {lat: 49.2856, lng: -123.1306}
          }, 
          
          {
            name: "West-Point-Grey",
            icon: require('./img/newicons/West-Point-Grey/icons-15.svg'),
            coords: {lat: 49.2610, lng: -123.2001},
          }

      ]
        };   
    }
    
    
    componentDidMount(){
        fetch('https://neybourapi.herokuapp.com/posts/')
        .then((res)=>{
        return res.json(); 
        })
            .then((data)=>{
    //    console.log(data);
        this.setState({
            posts:data.posts
        });
        console.log(this.state.posts);
        });
        //fetch weather
        this.weatherFetch();
    }
    weatherFetch(){
        let lat = this.state.mapCenter.lat;
        let lng = this.state.mapCenter.lng;
        fetch("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=5c78089b646c9d27dd997e0b6a99a182")
        .then((res)=>{
        return res.json(); 
        })
        .then((data)=>{
            let weather = data.weather[0].description;
            let temp = Math.round((parseInt(data.main.temp) - 273.15) * 10) / 10;
   //          console.log(weather, temp);
            this.setState({
            curTemp:temp,
            curWeather:weather
        });
            console.log(this.state);
        });
    }
    addPost(post){
        var temp = this.state.posts;
  //      console.log(temp);
       temp.push(post);
        this.setState({
            posts:temp
        });
  //      console.log(this.state.posts);
        this.setState({
            postModal:false
        });
    }

    shareStory(){
        if(this.state.loggedIn === true){
            this.setState({
                postModal:true
            })   
        } else {
            console.log("log in you doof");
        }
    }
    
    markerCoords(data){
        console.log("app.js coords:" +data.long, data.lat);
        this.setState({
            markerCoords: {
                lat: data.lat,
                long: data.long
            }
        });
    }
    
    userInfo = (data)=>{
        this.setState({
            loggedIn: true,
            userInfo: data
        });
        console.log(data);
    }
    
     pushMarkersData(data){
        var arr = this.state.markersData;
        arr.push(data);
        this.setState({
            markersData:arr
        })
         console.log(this.state.markersData);
    }
    
    toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
    }
    
    updateHood(coords, name, icon){
        this.setState({
            mapCenter: {lat: coords.lat, lng: coords.lng},
            sidebar: "postList",
            hoodName: name,
            pageTitle: name,
            menuOpen: false,
            hoodImg: icon
        });
        this.weatherFetch();
    };
    
    updateByName(name){
        for (var i=0; i< this.state.neighbourhoodArr.length; i++){
            if (this.state.neighbourhoodArr[i].name == name){
                this.updateHood(this.state.neighbourhoodArr[i].coords, this.state.neighbourhoodArr[i].name, this.state.neighbourhoodArr[i].icon)
            }
        }
    }
    
    closeModal(){
        this.setState({
            modalOpen:false
        })
    }
    
    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen})  
    }

  render() { 
      
    const { width } = this.state;
    const isMobile = width <= 576;
    var menuWidth;
    var sideCardID;
    var miniMapID;
      
      if (isMobile) {
            menuWidth = "90%";
            sideCardID = "sideCard-mobile";
            miniMapID = "miniMap-mobile";
                
        } else {
            menuWidth = "35%";
            sideCardID = "sideCard-desk";
            miniMapID = "miniMap-desk";

        }
      
    var hoodList = this.state.neighbourhoodArr.map((obj, i)=>{
        var bgColor = i%2==1 ? "#f7f3f0" : "white";
        return (
            <div style={{borderTopColor: bgColor}} className="listItems" key={i} onClick={()=>{
            this.updateHood(obj.coords, obj.name, obj.icon)
            console.log(obj.name);
        }}>
                <img style={{height: "30px"}} src={obj.icon} />
                <span className="listNames">{obj.name}</span>
                                        
            </div>
        );
    });

    var postList = this.state.posts.map((obj, i)=>{
        var bgColor = i%2==1 ? "#f7f3f0" : "white";
        return (
        <div style={{backgroundColor: bgColor}} className="listItems" key={i}>
            <div>obj.title</div>
            <div>obj.body</div>
            <div>obj.coordinates</div>
            <div>obj.region</div>
        </div>
        );
    });
                  
    var modalContent = null;

      if (this.state.loggedIn === false && this.state.modalOpen === true){
          modalContent = (
                <Login 
                    closeModal={this.closeModal}
                    modalOpen={this.state.modalOpen}
                    modalName={this.state.modalName}
                    userInfo={this.userInfo}   
                />
          )
      } if (this.state.credits = true && this.state.modalOpen === true){
            modalContent = (
                <Login 
                    closeModal ={this.closeModal}
                    modalOpen={this.state.modalOpen}
                    modalName={this.state.modalName}
                    userInfo={this.userInfo}   
                />
            )
      } else if (this.state.modalOpen === true){
            modalContent = (
                <Login 
                    closeModal={this.closeModal}
                    modalOpen={this.state.modalOpen}
                    modalName={this.state.modalName}
                    userInfo={this.userInfo}    
                />
            )
      }

    var sidebar;

        if (this.state.sidebar == "landingMsg"){
            sidebar = (
                <div>
                    <div className="header-home">{this.state.pageTitle}</div>
                    <div className="about-home">A place to share the stories and memories of your Vancouver neighbourhood.
                    <br />
                    Choose to share posts publicly with your neighbours, or keep them private. 
                    </div>
                    <br />
                    <Button id="explore-btn" onClick={()=>{this.setState({sidebar: "neighbourhoodList"})}}>
                        Share your story</Button>
                </div>
            
            )
        }
        if (this.state.sidebar == "neighbourhoodList"){
            sidebar = (
                <div>
                <div id="findHoodTitle">find your neighbourhood
                </div>
                <div className="hoodListContainer" id="scrollbar">
                    {hoodList}
                </div>
            </div>
            );
        } else if (this.state.sidebar == "postList"){
            sidebar = (
                <div>
                <div id="backArrow" onClick={()=>this.setState({sidebar: "neighbourhoodList"})}>
                    <img className="fluid" src={backarrow}/>
                </div>
                    <div id="hoodTitle">
                        {this.state.hoodName}
                    </div>
                    <div>
                        {postList}
                    </div>
                </div>
            );
        }
  
    return (
        
        <div className="App">
        
                     <Navbar id="navbar-custom" fixed="top">
                        <NavbarBrand href="/" className="mr-auto">
                            <img id="nav-brand"src={require('./img/nav-brand-04.png')} alt="favicon" width="15" height="15" />
                        </NavbarBrand>

                        <Button className="account-btns navBtn" id="login-btn" 
                            onClick={()=>{this.setState({ modalName:"login", modalOpen: true })}}>
                            login
                        </Button>

                        <Button className="account-btns navBtn" id="signup-btn" 
                            onClick={()=>this.setState({ modalName:"signup", modalOpen: true })}>
                            sign up
                        </Button>
                    </Navbar>

         {modalContent}
            
        <Container id="map-container" fluid>

            <Row>
                <Col xs="12">
                    
                        <div id="menu-outer-container">
                            <Menu 
                                style={{boxShadow: "2px 2px 5px 0px #ccc"}}
                                outerContainerId={ "menu-outer-container" }
                                isOpen={this.state.menuOpen}
                                onStateChange={(state) => this.handleStateChange(state)}
                                noOverlay width={menuWidth}
                            >
                                <Col xs="12">
                                    {sidebar}
                                </Col>    
                            </Menu>
                        </div>

        
                    <Col xs="12">
                        <div id="inner-map-container">
                            <Map 
                                googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyB32t1ZjptJtOM17HQHo87JJTxcQuQ2EnA&v=3.exp&libraries=geometry,drawing,places"}
                                containerElement={<div style={{height: 100+'vh'}}/>}
                                mapElement={<div style={{height: 100+'%'}}/>}
                                loadingElement={<div style={{height: 100+'%'}} />}

                                center={ {lat: this.state.mapCenter.lat, lng: this.state.mapCenter.lng } }
                                zoom={14}

                                posts={this.state.posts}
                                loggedIn={this.state.loggedIn}
                                userInfo={this.state.userInfo}
                            />
                        </div>
                    </Col>

                    <div id={miniMapID}>
                        <Row>
                            <Col xs="12">
                                <MapGraphic 
                                    hoodName={this.state.hoodName}
                                    updateByName={this.updateByName}
                                />
                            </Col>
                        </Row>
                    </div>

                    <div id={sideCardID}>
                        <Row>
                            <Col xs="12">
                                <HoodCard
                                    hoodName={this.state.hoodName}
                                    hoodDesc={this.state.hoodDesc}
                                    hoodImg={this.state.hoodImg}
                                    hoodLat={49.2536}
                                    hoodLng={123.1604}
                                    hoodTemp={this.state.curTemp}
                                    hoodWeather={this.state.curWeather}
                                />
                            </Col>
                        </Row>
                    </div>

                </Col>
            </Row>
        </Container>
        <Container fluid id="footer-container">
            <Row >
                <Col xs="12" >
                    <div id="footer">
                        <Button onClick={()=>this.setState({credits: true, modalOpen: true, modalName:"credits"})} id="credit-btn">credits</Button>
                    </div>
                </Col>
            </Row>
        </Container>

      </div>
    );
  }
}

export default App;
