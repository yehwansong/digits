import { connect } from 'react-redux';
import { addStroke, addStrokePos, endStroke } from '../actions/drawing';
import { addInput } from '../actions/pipeline';
import Drawing_2 from '../components/drawing_2';

const mapStateToProps = state => ({
  isDrawing_2: state.drawing.isDrawing,
  isEndStroke_2: state.drawing.isEndStroke,
  strokes_2: state.drawing.strokes,
});

const mapDispatchToProps = dispatch => ({
  addStroke_2: pos => dispatch(addStroke(pos)),
  addStrokePos_2: pos => dispatch(addStrokePos(pos)),
  endStroke_2: () => dispatch(endStroke()),
  addInput_2: image => dispatch(addInput(image)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Drawing_2);
