import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, cleanReminders } from "../actions";
import PropTypes from 'prop-types';
import moment from 'moment';


class App extends Component {
  state = {
      text: '',
      dueDate: ''
  }

  handleInput(e)  {
      this.setState({
        text: e.target.value
    });
  }

  handleDate(e) {
      this.setState({
          dueDate: e.target.value
      });
  }

  deleteReminder(id) {
      this.props.deleteReminder(id);
  }

  addReminder() {
      this.props.addReminder(this.state.text, this.state.dueDate);
  }

  cleanReminders() {
      this.props.cleanReminders();
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
                                  <div><em>{ moment(new Date(reminder.dueDate)).fromNow() }</em></div>
                              </div>
                              <div
                                  className="list-item delete-button"
                                  onClick={ (e) => this.deleteReminder(reminder.id)}
                              >&#x2715;
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
                      className="form-control mr-2"
                      placeholder="Please enter ..."
                      onChange={ (e) => {this.handleInput(e)}}
                  />
                  <input
                      type="datetime-local"
                      className="form-control mr-2"
                      onChange={ (e) => {this.handleDate(e)}}
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
          <div
              className="btn btn-danger mt-3"
              onClick={() => this.cleanReminders() }
          >
              Clear Reminder
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        reminders: state,
    };
}

App.propTypes = {
    reminders: PropTypes.array.isRequired,
    addReminder: PropTypes.func.isRequired,
    deleteReminder: PropTypes.func.isRequired,
    cleanReminders: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { addReminder, deleteReminder, cleanReminders })(App);