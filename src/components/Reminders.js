import React, { Component } from 'react';
import '../App.scss';
import PropTypes from 'prop-types';
import moment from 'moment';


class App extends Component {
  state = {
      event: '',
      date: ''
  };

  handleInput(e)  {
      this.setState({
        event: e.target.value
    });
  }

  handleDate(e) {
      this.setState({
          date: e.target.value
      });
  }

  deleteReminder(id) {
      this.props.deleteReminder && this.props.deleteReminder(id);
  }

  addReminder() {
      this.props.addReminder && this.props.addReminder(this.state.event, this.state.date);
  }

  cleanReminders() {
      this.props.cleanReminders();
  }

  renderReminders() {
      const { reminders } = this.props;
      return (
          <ul className="list-group col-sm-8 mt-2">
              {
                  reminders && reminders.map(reminder => {
                      return (
                          <li key={reminder.id} className="list-group-item">
                              <div className="list-item">
                                  <div>{ reminder.event }</div>
                                  <div><em>{ moment(new Date(reminder.date)).fromNow() }</em></div>
                              </div>
                              <div
                                  className="list-item delete-button"
                                  onClick={ () => this.deleteReminder(reminder.id)}
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
              <div className="form-group">
                  <input
                      type="text"
                      className="form-control input-field"
                      placeholder="Please enter ..."
                      onChange={ (e) => {this.handleInput(e)}}
                  />
                  <input
                      type="datetime-local"
                      className="form-control input-field"
                      onChange={ (e) => {this.handleDate(e)}}
                  />
              </div>
              <button
                  type="button"
                  className="btn add-btn"
                  onClick={(e) => {this.addReminder(e)}}
              >
               Add Reminder
              </button>
          </div>
          { this.renderReminders() }
          <div
              className="btn-container"
              onClick={() => this.cleanReminders() }
          >
              <button className="btn clear-btn">Clear Reminder</button>
          </div>
      </div>
    );
  }
}

App.propTypes = {
    reminders: PropTypes.array.isRequired,
    addReminder: PropTypes.func.isRequired,
    deleteReminder: PropTypes.func.isRequired,
    cleanReminders: PropTypes.func.isRequired
}

export default App;