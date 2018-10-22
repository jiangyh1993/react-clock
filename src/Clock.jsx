import React from "react";
import "./Clock.css";

const Clock = props => {
  return (
    <div className="clock">
      <h1>{props.time}</h1>
      <button onClick={props.stop}>STOP</button>
    </div>
  );
};

class ClockContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  stop = () => {
    clearInterval(this.timer);
  };

  render() {
    console.log(this.props);
    return <Clock time={this.state.time} stop={this.stop} />;
  }
}

export default ClockContainer;
