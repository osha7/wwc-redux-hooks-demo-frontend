
import './App.css';
import React from 'react';
import { connect } from 'react-redux'; 
import { getMusicians } from './redux/actions/getMusicians';
import Musicians from './components/musicians';

class App1 extends React.Component {

  componentDidMount() {
    this.props.dipatchGetMusicians();
  };

  render() {
    if (this.props.musicians.length > 0) {
      return (
        console.log("props App1", this.props),
        <div className="App">
          <h1>Female Musicians</h1>
          <h2 style={{color: "purple"}} >Class Component &amp; Redux</h2>
          <Musicians musicians={this.props.musicians} />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }
  }
};

function mapStateToProps(state) {
  return {
    musicians: state.musicianReducer.musicians
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dipatchGetMusicians: (musicians) => dispatch(getMusicians(musicians))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App1);
