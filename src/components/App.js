import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { addReminder} from "../actions";


class App extends Component {
  state = {
      text: ''
  }

  handleChange(e)  {
      this.setState({
        text: e.target.value
    });
  }

  addReminder() {
      this.props.addReminder(this.state.text);
  }

  renderReminders() {
      const { reminders } = this.props;
      return (
          <ul className="list-group col-sm-8 mt-2">
              {
                  reminders.map(reminder => {
                      return (
                          <li key={reminder.id} className="list-group-item">
                              <div className="list-item">
                                  <div>{ reminder.text }</div>
                                  <div><em>time</em></div>
                              </div>
                          </li>
                      );
                  })
              }
          </ul>
      )
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
                      placeholder="Please enter ..."
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
          { this.renderReminders() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        reminders: state,
    };
}

export default connect(mapStateToProps, { addReminder })(App);