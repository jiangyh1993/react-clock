import React from "react";
import "./Clock.css";

const Clock = props => {
  return (
    <div className="clock">
      <h1>{props.time}</h1>
    </div>
  );
};

class Clock2 extends React.Component {
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
    });
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  render() {
    return <Clock time={this.state.time} />;
  }
}

export default Clock2;
