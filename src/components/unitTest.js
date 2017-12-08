import React, { Component } from 'react';
import './unitTest.css';

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
          <input type="text"  className="functionName_input"/>
          <input className="DynamicTest_checkbox" type="checkbox" />
          <label className="DynamicTest">Dynamic Test</label>
        </div>
        <div className="unitText_body">
          <div className="unitTest_close">&times;</div>

            <div className="inputNum_box">
              <h4>Inputs</h4>
              <input className="input_num" type="text" value={this.state.value}/>
              <button className="subtraction" onClick={(value) => this.subtraction(value)}>-</button>
              <button className="plus" onClick={(value) => this.plus(value)}>+</button>
            </div>
            <div className="visibility">
              <label className="visibility_title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visibility</label>
              <div className="visibility_radio">
                <input type="radio" id="public" name="visibility"  />
                <label for="public">Public</label>
              </div>
              <div className="visibility_radio">
                <input type="radio" id="private" name="visibility"/>
                <label for="private">Private</label>
              </div>
            </div>

          <div className="ExpectedOutput">
            <p>Expected output</p>
            <input type="text" className="ExpectedOutput_input" />
          </div>
          <div className="TestDescription">
            <label className="TestDescription_title">Test description</label>
            <textarea className="TestDescription_textarea"></textarea>
          </div>
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
