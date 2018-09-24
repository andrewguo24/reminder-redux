import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { addReminder} from "../actions";


class App extends Component {
  state = {
      text: ""
  };

  handleChange(e)  {
      this.setState({
        text: e.target.value
  });
  }

  addReminder() {
      this.props.addReminder(this.state.text);
  }

  render() {
    return (
      <div className="App">
          <div className="title">Reminder Pro</div>

          <div className="form-inline">
              <div className="form-group mr-2">
                  <input
                      type="text"
                      className="form-control"
                      placeholder="I have to ..."
                      onChange={ (e) => {this.handleChange(e)}}
                  />
              </div>
              <button
                  type="button"
                  className="btn btn-success"
                  onClick={(e) => {this.addReminder(e)}}
              >
               Add Reminder
              </button>
          </div>
      </div>
    );
  }
}

export default connect(null, { addReminder })(App);