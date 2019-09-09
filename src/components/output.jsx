import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const H2 = styled.h6`
  text-align: center;
`;

export default class Output extends React.PureComponent {
  static propTypes = {
    prediction: PropTypes.number,
  };

  static defaultProps = {
    prediction: null,
  };

  render() {
    const { prediction } = this.props;
    return <H2>{prediction != null ? `${prediction}` : ' _'}</H2>;
  }
}
