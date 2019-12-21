import React, { Component } from 'react';
import './App.css';
import {fire, facebookProvider, googleProvider, twitterProvider} from './components/config/Fire';
import Home from './components/Home';
import Form from './container/Form/Form.component';
//import Loading from './components/Loading/Loading.component';


class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
      email: '',
      password: '',
      isLoading: false
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      this.setState({isLoading: true});
      console.log(user);
      if (user) {
        this.setState({ user });        
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
      this.setState({isLoading: false});
    });
  }
  
  handleChange =(e) => {
    this.setState({ [e.target.type]: e.target.value });
  }

  login = (e) => {
    this.setState({isLoading: true});
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      this.setState({isLoading: false});
    }).catch((error) => {
        console.log(error);
      });
  }

  signup = (e) => {
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  onGoogleSignIn = googleUser => {    
      console.log("google authentication");
      fire.auth().signInWithPopup(googleProvider)
   .then((result, error) => {
    if(error){
      console.log(error)
    }
    else{

    }
   })
  };
 onFacebookSignIn = () => {
   fire.auth().signInWithPopup(facebookProvider)
   .then((result, error) => {
    if(error){
      console.log(error)
    }
    else{

    }
   })
 }
onTwitterSignIn = () => {
  fire.auth().signInWithPopup(twitterProvider)
   .then((result, error) => {
    if(error){
      console.log(error)
    }
    else{

    }
   })
}
  render() {
    return (
     <div>       
       {this.state.user ?  (<Home/>) : 
       (<Form 
        onGoogleSignIn ={this.onGoogleSignIn}
        onFacebookSignIn={this.onFacebookSignIn}
        onTwitterSignIn={this.onTwitterSignIn}
        login ={this.login}
        handleChange={this.handleChange}
       />)}
       </div>
  )
};
}

 export default App;
