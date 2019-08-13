import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
var w = window.innerWidth
const Canvas = styled.canvas`
  width: 300px;
  height: 300px;
  border-color: dodgerblue;
  border-width: 5px;
  border-style: solid;
  display: block;
  touch-action: none;

  &:hover {
    border-color: deepskyblue;
  }
`;

export default class Drawing_2 extends React.Component {
  static propTypes = {
    isDrawing_2: PropTypes.bool.isRequired,
    isEndStroke_2: PropTypes.bool.isRequired,
    strokes_2: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })),
    ).isRequired,
    addStroke_2: PropTypes.func.isRequired,
    addStrokePos_2: PropTypes.func.isRequired,
    endStroke_2: PropTypes.func.isRequired,
    addInput_2: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.canvas = null;
    this.ctx = null;
  }

  componentDidMount() {
    this.initContext();
  }

  componentDidUpdate() {
    this.initContext();
    this.drawStrokes();

    const { isEndStroke_2, addInput_2 } = this.props;

    if (isEndStroke_2) {
      addInput_2(this.ctx.getImageData(0, 0, 280, 280));
    }
  }

  onMouseDown = (e) => {
    const { addStroke_2 } = this.props;
    addStroke_2(this.computeMousePos(e));
  };

  onMouseMove = (e) => {
    const { isDrawing_2, addStrokePos_2 } = this.props;

    if (!isDrawing_2) {
      return;
    }

    addStrokePos_2(this.computeMousePos(e));
  };

  onStrokeEnd = () => {
    const { isDrawing_2, endStroke_2 } = this.props;

    if (isDrawing_2) {
      endStroke_2();
    }
  };

  setCanvasRef = (elt) => {
    this.canvas = elt;
  };

  initContext() {
    this.ctx = this.canvas.getContext('2d');
    this.ctx.lineWidth = 10;
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'miter';
    this.ctx.strokeStyle = 'white';

    this.ctx.fillStyle = 'dark';

    this.clearCanvas();
  }

  clearCanvas() {
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  computeMousePos(e) {
    return {
      x: this.computeMousePosX(e),
      y: this.computeMousePosY(e),
    };
  }

  computeMousePosX(e) {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;

    return (e.clientX - rect.left) * scaleX;
  }

  computeMousePosY(e) {
    const rect = this.canvas.getBoundingClientRect();
    const scaleY = this.canvas.height / rect.height;

    return (e.clientY - rect.top) * scaleY;
  }

  drawStrokes() {
    const { strokes_2 } = this.props;

    for (let j = 0; j < strokes_2.length; j += 1) {
      const points = strokes_2[j];

      this.ctx.beginPath();
      this.ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length; i += 1) {
        this.ctx.lineTo(points[i].x, points[i].y);
      }
      this.ctx.stroke();
    }
  }

  render() {
    return (
      <div touch-action="none">
        <Canvas
          innerRef={this.setCanvasRef}
          onPointerDown={this.onMouseDown}
          onPointerMove={this.onMouseMove}
          onPointerUp={this.onStrokeEnd}
          onMouseLeave={this.onStrokeEnd}
          width="280"
          height="280"
        />
      </div>
    );
  }
}
