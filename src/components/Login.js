import React, { Component } from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, Row, Col } from 'reactstrap';

class Login extends Component {
    
    constructor(props){
        super(props);
        
        this.state={
            modalOpen: true
        }
        

    this.toggle = this.toggle.bind(this);  
    this.login = this.login.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.signup = this.signup.bind(this);
    this.signupEmail = this.signupEmail.bind(this);
    this.signupPass = this.signupPass.bind(this);
    this.signupName = this.signupName.bind(this);
    this.signupCheck = this.signupCheck.bind(this);
    }
     
        //bare-bones login; use "test@test.com" and "tester" to login
    login(){
        let email = this.state.email;
        let password = this.state.password;
        fetch('https://neybourapi.herokuapp.com/users/login/', {
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
        .then((data) => this.authenticate(data))
    }
    
    authenticate = (data)=>{
        if(data.token){
            this.setState({
                loggedIn: true
            });
            var obj = {
                userId: data.userId,
                email: this.state.email,
                posts: data.posts,
                token: data.token,
                loggedIn: true,
            };
            console.log(obj);
            this.props.userInfo(obj);

            console.log("You're logged in!");
            this.props.closeModal();
        } 
            else if(data.message == "Auth failed"){
            console.log("failed!");
        }
    }
    
    signup(){
        let name = this.state.signupName;
        let password = this.state.signupPass;
        let email = this.state.signupEmail;
        console.log(name, email, password);
        fetch('https://neybourapi.herokuapp.com/users/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            name: name
        })
        })
        .then((res) => res.json())
        //.then((data) => console.log(data))
        .then((data) => this.signupCheck(data))
    }
    
    signupCheck(obj){
        if(obj.error){
            console.log("failed");
        } else {
            console.log(obj.message);
            this.props.closeModal();
        }
    }    
    
    signupEmail(evt){
        this.setState({
            signupEmail:evt.target.value
        });
    }
    
    signupPass(evt){
        this.setState({
            signupPass:evt.target.value
        });
    }
    
    signupName(evt){
        this.setState({
            signupName:evt.target.value
        });
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
    
    toggle() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

  render() {
      
    var headerContent = null;
    var subheaderContent = null;
    var bodyContent = null;
      
      if (this.props.modalName === "login"){
          headerContent ="Welcome Back!";
          subheaderContent = null;
          bodyContent = (
                <div className="acctModal">
                <Input type="text" placeholder="username" onChange={this.handleEmail}/>
                <br /><br />
                <Input type="password" name="password" placeholder="password" onChange={this.handlePass}/>
                <br /><br />
                <button className="btn btn-secondary" id="login-modal-btn" onClick={this.login}>Login</button>
                </div>
          );
          
      } else if (this.props.modalName === "signup"){
          headerContent = "Hey neighbour!";
          subheaderContent = "Create an account to share your own neighbourhood stories. You have the option to post them publicly, or keep them to yourself."
          bodyContent = (
                <div className="acctModal">
                <Input  type="text" placeholder="email" onChange={this.signupEmail}/>
                <br /><br />
                <Input type="text" placeholder="name" onChange={this.signupName}/>
                <br /><br />
                <Input type="password" name="password" placeholder="password" onChange={this.signupPass}/>
                <br /><br />
                <button className="btn btn-secondary" id="signup-modal-btn" onClick={this.signup}>Create Account</button>
                </div>
          );
      } else if (this.props.modalName === "credits"){
          headerContent = "BCIT - COMP4130";
          subheaderContent = null;
          bodyContent = (
            <div>
              <Row>
                <Col xs="6">
                <div className="credit-txt-lg">
                    Evelyn Cranston
                    <br />
                    Nicola Parker 
                    <br />
                    Camille Camahort 
                    <br />
                    Alessandro Grunwald
                </div>
                </Col>
                <Col xs="6">
                <div className="credit-txt-sm">
                    <a href="https://github.com/istarkov/google-map-react">Created with Google Map React</a>
                    <br />
                    <a target="_blank" href="https://www.vecteezy.com">Illustrations from Vecteezy</a>
                    <br />
                    <a target="_blank" href="https://www.freepik.com/free-photos-vectors/infographic">Illustrations from Freepik</a>
                    <br />
                    <a target="_blank" href="https://www.flaticon.com">Icons from FlatIcon</a>
                </div>
                </Col>
              </Row>
              
            </div>
              
                
          );
      }
    return (
            <Modal className= "modal-dialog-centered" isOpen={this.props.modalOpen}>
                <ModalHeader id="modal-header-toggle" toggle={this.props.closeModal}>
                    <div id="modal-header-custom">
                        {headerContent}
                    </div>
                </ModalHeader>
                <ModalBody id="modal-body-custom">
                    <div id="modal-subheader-custom">
                        {subheaderContent}
                    </div>
                    {bodyContent}
                </ModalBody>
            </Modal>
    );
  }
}

export default Login;
