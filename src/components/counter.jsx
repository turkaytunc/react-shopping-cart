import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  handleDecrement = () => {
    if (this.state.value > 0) this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <span className="badge badge-primary ml-2 mr-2 p-2">
          {this.formatCount()}
        </span>
        <span className="badge badge-secondary ml-2">Adet</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
      </div>
    );
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Sifir" : value;
  }
}

export default Counter;
