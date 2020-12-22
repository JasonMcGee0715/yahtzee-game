import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);

    this.handleClicker = this.handleClicker.bind(this);
  }

  handleClicker() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { disabled, rolling } = this.props;
    let classes = `Die fas fa-dice-${
      this.props.numberWords[this.props.val - 1]
    } fa-5x `;
    if (this.props.locked) classes += "Die-locked";
    if (rolling) classes += "Die-rolling";
    return (
      <i
        className={classes}
        onClick={this.handleClicker}
        disabled={disabled}
      ></i>
    );
  }
}

export default Die;
