import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold"
  };
  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="200x200 image" />
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button style={[this.styles][0]} className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
