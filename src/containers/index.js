import React, { Component, Fragment } from 'react'
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import Reminders from '../components/Reminders';
import Loading from '../components/Loading';
import Error from '../components/Error';

class App extends Component {
    componentDidMount() {
        this.props.fetchData && this.props.fetchData();
    }

    render() {
        const { data, isFetching, showError, addReminder, deleteReminder, cleanReminders } = this.props;
        return(
            <Fragment>
                {isFetching && <Loading /> }
                {!isFetching && showError && <Error /> }
                {!isFetching && !showError && <Reminders reminders={data}
                                                         addReminder={addReminder}
                                                         deleteReminder={deleteReminder}
                                                         cleanReminders={cleanReminders}/>
                }
            </Fragment>
        )
    };
};

const mapStateToProps = ({ data, isFetching, showError }) => ({
    data,
    isFetching,
    showError
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);