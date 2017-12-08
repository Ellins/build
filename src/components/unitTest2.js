import React, { Component } from 'react';
import './unitTest.css';
import Col from 'react-bootstrap';
export default class UnitTest extends Component{
  constructor(props) {
        super(props);
        this.state = {
          value: 1
        }
      }
  subtraction(value){
        value=this.state.value-1;
        this.setState({
          value:value
        });
      }
  plus(value){
        value=this.state.value+1;
        this.setState({
          value:value
        });
      }

  render(){
    return(
      <div className="unitText_box">
        <div className="unitText_header">
          <label>Function Name: </label>
          <input type="text" />
          <input className="DynamicTest_checkbox" type="checkbox" />
          <label className="DynamicTest">Dynamic Test</label>
        </div>
        <div className="unitText_body">
          <div className="unitTest_close">&times;</div>
          <Col md={6} mdPull={6} />
          kjlkjlk

        <Col md={6} mdPull={6} />
            fsdfs



          <div className="newtest">
            <button className="newtest_button">+ New Test
            </button>
          </div>
        </div>
        <div className="unitText_button">

        </div>
      </div>
    );
  }
}
