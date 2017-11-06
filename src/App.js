import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      count : 0,
      isLoggedInuser : false
    };
  }
  updateCounter(){
    this.setState({
      count : this.state.count + 1 
    });
  }
  getUserIn(){
    this.setState({
      isLoggedInuser : !this.state.isLoggedInuser
    });
  }
  

  render() {

    this.updateCounter = this.updateCounter.bind(this);
    this.getUserIn  = this.getUserIn.bind(this);

    return (
      <div>
        <Header />
        <Content />
        <Footer />

        <p>Count Is  : {this.state.count}</p>
        <center>Please Follow Links : <button onClick={this.getUserIn}>{(this.state.isLoggedInuser ? 'Welcome' : 'Log In') }</button></center>
        <button onClick={this.updateCounter}>Click!</button>
      </div>
    );
  }
}

export default App;
