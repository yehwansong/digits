import { Layout, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import MnistDrawing from '../containers/mnist-drawing';
import ImagePipeline from './image-pipeline';

const { Content } = Layout;

const ContentContainer = styled(Content)`
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
