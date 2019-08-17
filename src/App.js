import React, { Component } from 'react';
import Modal from "./UI/Modal";
import "./App.css"

class App extends Component {

  state = {
    displayModal: false,
  }

  openModal = () => {
    this.setState({
      displayModal: true,
    })
  }

  closeModal = () => {
    this.setState({
      displayModal: false,
    })
  }

  render(){

    return (
      <div className="container">
        <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.openModal}><i class="material-icons">add</i></a>
        <Modal show={this.state.displayModal} closeModal={this.closeModal}>
          <h3>This is a Modal tag able to accept children</h3>
          <p>halo world i am from earth, teach me programming</p>
        </Modal>
      </div>
    );
  }
}

export default App;
