import React, { Component } from "react";


const NUMBER_OF_ARRAY_BARS = 26;



const PRIMARY_COLOR = "cornflowerblue";

var WINDOW_HEIGHT = window.innerHeight;

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.PushRandomNumber();
  }
  
  PushRandomNumber = () => {
    if (
      this.props.finishedSorting === true ||
      this.props.initialSort === true
    ) {
      const array = [];
      for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
        
        array.push(randomNoFromInterval(10, WINDOW_HEIGHT - 100));
      }
      let bars = document.getElementsByClassName("array-bar");
      
      for (let i = 0; i < bars.length; i++)
        bars[i].style.backgroundColor = PRIMARY_COLOR;

      this.setState({ array });
    }
  };

  handleSelection = (e) => {
    this.props.selectionSort(this.state.array);
  };

  handleMerge = (e) => {
    this.props.mergeSort(this.state.array);
  };

  handleBubble = (e) => {
    this.props.bubbleSort(this.state.array);
  };

  handleQuick = (e) => {
    this.props.quickSort(this.state.array);
  };

  render() {
    const { array } = this.state;
    return (
      <div className="parent">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                className="btn btn-outline-light navbar-btn"
                key={this.props.finishedSorting}
                onClick={this.PushRandomNumber}
              >
                Generate New Array
              </button>
            </div>

            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                title="O(N^2) Average Time Complexity"
                className="btn btn-outline-light navbar-btn m-2"
                onClick={() => this.handleBubble()}
              >
                Bubble Sort
              </button>

              <button
                title="O(N^2) Average Time Complexity"
                className="btn btn-outline-light navbar-btn m-2"
                onClick={() => this.handleSelection()}
              >
                Selection Sort
              </button>

              <button
                title="O(NLog(N)) Average Time Complexity"
                className="btn btn-outline-light navbar-btn m-2"
                onClick={() => this.handleMerge()}
              >
                Merge Sort
              </button>

              <button
                title="O(NLog(N)) Average Time Complexity"
                className="btn btn-outline-light navbar-btn m-2"
                onClick={() => this.handleQuick()}
              >
                Quick Sort
              </button>
            </div>
          </div>
        </nav>

        <div className="array-container">
          {array.map((value, index) => (
            <div
              title={value}
              className="array-bar"
              key={index}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

//Function to generate random nos. in a specified range(Requirement of javascript to specify range)
function randomNoFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
