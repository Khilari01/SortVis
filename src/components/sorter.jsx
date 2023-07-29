import React, { Component } from "react";
import "./Body.css";
import Navbar from "../components/Navbar";
import { MergeSortAnimation } from "../SortingAlgorithms/MergeSortAnimation";
import { BubbleSortAnimation } from "../SortingAlgorithms/BubbleSortAnimation";
import { SelectionSortAnimation } from "../SortingAlgorithms/SelectionSortAnimation";
import { QuickSortAnimation } from "../SortingAlgorithms/QuickSortAnimation";


const PRIMARY_COLOR = "cornflowerblue";

const ANIMATION_SPEED_MS = 120;

const SECONDARY_COLOR = "red";

const FINAL_COLOR = "SlateBlue";

var Total_time_taken;

var initialSort = true;

export default class Sorter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finishedSorting: false,
    };
  }

  FinishedSorting() {
    

    let bars = document.getElementsByClassName("array-bar");
    
    setTimeout(() => {
      for (let i = 0; i < bars.length; i++)
        bars[i].style.backgroundColor = FINAL_COLOR;
      this.setState({ finishedSorting: true });
    }, Total_time_taken * ANIMATION_SPEED_MS);
  }

  bubbleSort = (array) => {
    if (this.state.finishedSorting || initialSort) {
      initialSort = false;
      this.setState({ finishedSorting: false });
      const animations = BubbleSortAnimation(array);

      const arrayBars = document.getElementsByClassName("array-bar");

      for (let i = 0; i < animations.length; i++) {
        const [
          barOneHeight,
          barOneIdx,
          barTwoHeight,
          barTwoIdx,
          barColor,
        ] = animations[i];

        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const barOneValue = arrayBars[barOneIdx];
        const barTwoValue = arrayBars[barTwoIdx];

        setTimeout(() => {
          barOneStyle.height = `${barOneHeight}px`;
          barTwoStyle.height = `${barTwoHeight}px`;
          barOneStyle.backgroundColor = barColor;
          barTwoStyle.backgroundColor = barColor;
          barOneValue.title = barOneHeight;
          barTwoValue.title = barTwoHeight;
        }, i * ANIMATION_SPEED_MS);

        Total_time_taken = i;
      }
      this.setState({ array });

      this.FinishedSorting();
    }
  };

  mergeSort = (array) => {
   

    if (this.state.finishedSorting || initialSort) {
      initialSort = false;
      this.setState({ finishedSorting: false });
      const animations = MergeSortAnimation(array);

      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("array-bar");
        const isColorChange = i % 3 !== 2;

        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;

          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barOneValue = arrayBars[barOneIdx];
            barOneStyle.height = `${newHeight}px`;
            barOneValue.title = newHeight;
          }, i * ANIMATION_SPEED_MS);
        }
        Total_time_taken = i;
      }

      this.setState({ array });

      this.FinishedSorting();
    }
  };

  selectionSort = (array) => {
    if (this.state.finishedSorting || initialSort) {
      initialSort = false;
      this.setState({ finishedSorting: false });

      const animations = SelectionSortAnimation(array);
      const arrayBars = document.getElementsByClassName("array-bar");

      var i = 0;
      for (i = 0; i < animations.length; i++) {
        const [
          barOneHeight,
          barOneIdx,
          barTwoHeight,
          barTwoIdx,
          barColor,
        ] = animations[i];

        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const barOneValue = arrayBars[barOneIdx];
        const barTwoValue = arrayBars[barTwoIdx];

        
        if (barTwoHeight === 0) {
          setTimeout(() => {
            barOneStyle.backgroundColor = barColor;
          }, i * ANIMATION_SPEED_MS);
        }
        
        else {
          setTimeout(() => {
            barOneStyle.height = `${barOneHeight}px`;
            barTwoStyle.height = `${barTwoHeight}px`;
            barOneStyle.backgroundColor = barColor;
            barTwoStyle.backgroundColor = barColor;
            barOneValue.title = barOneHeight;
            barTwoValue.title = barTwoHeight;
          }, i * ANIMATION_SPEED_MS);
        }
      }

      Total_time_taken = i;

      this.setState({ array });

      this.FinishedSorting();
    }
  };

  quickSort = (array) => {
    if (this.state.finishedSorting || initialSort) {
      initialSort = false;
      this.setState({ finishedSorting: false });
      const animations = QuickSortAnimation(array);

      const arrayBars = document.getElementsByClassName("array-bar");
      var i = 0;
      for (i = 0; i < animations.length; i++) {
        const [
          barOneHeight,
          barOneIdx,
          barTwoHeight,
          barTwoIdx,
          barColor,
        ] = animations[i];

        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const barOneValue = arrayBars[barOneIdx];
        const barTwoValue = arrayBars[barTwoIdx];

        if (barTwoHeight === 0) {
          setTimeout(() => {
            barOneStyle.backgroundColor = barColor;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            barOneStyle.height = `${barOneHeight}px`;
            barTwoStyle.height = `${barTwoHeight}px`;
            barOneStyle.backgroundColor = barColor;
            barTwoStyle.backgroundColor = barColor;
            barOneValue.title = barOneHeight;
            barTwoValue.title = barTwoHeight;
          }, i * ANIMATION_SPEED_MS);
        }
      }

      Total_time_taken = i;
    }
    this.setState({ array });

    this.FinishedSorting();
  };

  render() {
    return (
      <div>
        <Navbar
          mergeSort={this.mergeSort}
          bubbleSort={this.bubbleSort}
          selectionSort={this.selectionSort}
          quickSort={this.quickSort}
          finishedSorting={this.state.finishedSorting}
          initialSort={initialSort}
        />
      </div>
    );
  }
}


