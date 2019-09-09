import { Layout, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import MnistDrawing from '../containers/mnist-drawing';
import ImagePipeline from './image-pipeline';

const { Content } = Layout;

const ContentContainer = styled(Content)`
  @font-face {
    font-family: 'Grotesk-Remix-reg';
    src: url('./fonts/39DD9F_0_0.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  max-width: 880px;
  margin: 0 auto;
`;

const MnistContent = () => (
  <Row>
    <ContentContainer>
      <MnistDrawing />
      <ImagePipeline />
    </ContentContainer>
  </Row>
);

export default MnistContent;
