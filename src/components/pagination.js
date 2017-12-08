import React, { Component } from 'react';
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';
import Modal from 'react-modal';
import './pagination.css';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}


export default class Paginations extends Component {
  constructor(){
    super();

    this.state = {
       modalIsOpen: false
     };

     this.openModal = this.openModal.bind(this);
     this.afterOpenModal = this.afterOpenModal.bind(this);
     this.closeModal = this.closeModal.bind(this);
   }

   openModal() {
     this.setState({modalIsOpen: true});
   }

   afterOpenModal() {
     // references are now sync'd and can be accessed.
     this.subtitle.style.color = '#f00';
   }

   closeModal() {
     this.setState({modalIsOpen: false});
   }


  render() {
    return (
      <div className="paginations">
        <div className="left_pagination">
          <Pagination total={100} />
        </div>
        <div className="add_pagination">
          <input type="button" onClick={this.openModal} className="add_pagination_button" value=" + New Question"/>
          <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal_top">
            <h2 className="modal_title" ref={subtitle => this.subtitle = subtitle}>Question Type</h2>
            <button className='modal_close' onClick={this.closeModal}>&times;</button>
          </div>

          <form>

            <button className="modal_button">Programing</button>
            <button className="modal_button">MCQ</button>
            <button className="modal_button">Checkoff</button>
            <button className="modal_button">Blanks</button>
          </form>
        </Modal>
        </div>

      </div>
    );
  }
}
