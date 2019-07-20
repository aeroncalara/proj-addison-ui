import React from "react";
import { render } from "react-dom";
import { Animate } from "react-move";
import {
  easeSinOut,
  easeQuadIn,
  easeQuadInOut,
  easeLinear,
  easeCubicInOut
} from "d3-ease";
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Chart.css";

class AnimatedProgressbar extends React.Component {
  state = {
    isAnimated: false
  };

  componentDidMount() {
    this.setState({
      isAnimated: true
    });
  }

  render() {
    return (
      <Animate
        start={() => ({
          percentage: 0
        })}
        update={() => ({
          percentage: [this.state.isAnimated ? this.props.percentage : 0],
          timing: {
            duration: this.props.duration * 1000,
            ease: this.props.easingFunction
          }
        })}
      >
        {({ percentage }) => {
          const roundedPercentage = Math.round(percentage);
          return (
            <CircularProgressbar
              percentage={roundedPercentage}
              text={`${roundedPercentage}%`}
            />
          );
        }}
      </Animate>
    );
  }
  abstract;
}

class Chart extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "200px",
          height: "200px"
        }}
      >
        <AnimatedProgressbar
          percentage={66}
          duration={1.4}
          /* Can swap this out with other easing functions from d3-ease */
          easingFunction={easeQuadInOut}
        />
      </div>
    );
  }
}
export default Chart;