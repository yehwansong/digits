import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import configureStore from '../store/configureStore';
import Mnist from './mnist';
// import './index.css';
import remixreg from './fonts/remix_reg.woff';
import remixmid from './fonts/39DDDA_0_0.woff';
import remixbold from './fonts/3A0A50_0_0.woff';
import jRegular from './fonts/j-Regular.woff';
import jBold from './fonts/JJGothic-Bold.woff';
import jMedium from './fonts/j-Medium.woff';

injectGlobal`
@font-face {
    font-family: 'Grotesk-Remix-reg';
    src: url(${remixreg});
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Grotesk-Remix-mid';
    src: url(${remixmid});
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Grotesk-Remix-bold';
    src: url(${remixbold});
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'j-Regular';
    src: url(${jRegular});
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'j-Bold';
    src:url(${jBold});
}
@font-face {
    font-family: 'j-Med';
    src: url(${jMedium});
    font-weight: normal;
    font-style: normal;
}
* {
    font-family: Grotesk-Remix-reg, j-Regular, sans-serif;
    font-weight: normal;
    font-style: normal;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    word-break: keep-all;
}
body {
  /*    background-image: url('.img/background.png');
    background-size: cover;*/
}
.tile_image {
  pointer-events: none;
}
/* Scale canvas with resize attribute to full size */

canvas[resize] {
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
}
.center>div:nth-child(1) {
  z-index: 1000000;
  position: absolute;
}
@font-face {
    font-family: 'Grotesk-Remix-reg';
    src: url('./fonts/39DD9F_0_0.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Grotesk-Remix-mid';
    src: url('./fonts/39DDDA_0_0.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Grotesk-Remix-bold';
    src: url('./fonts/3A0A50_0_0.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'j-Regular';
    src: url('fonts/j-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'j-Bold';
    src: url('./fonts/JJGothic-Bold.woff') format('woff');
}
@font-face {
    font-family: 'j-Med';
    src: url('fonts/j-Medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

.center {
  overflow: visible;
  position: absolute;
  z-index: 10;
  width: 100%;
}
.logo {
  position: absolute;
  right: 3vw;
  height: 5vw !important;
  bottom: 0vw;
  width: auto !important;
  background: url('janchilogo.png');
  background-size: contain;
}
.logo img {
  height: 100%
}
.text_whole_wrap {
  top: 50vh;
  position: absolute;
  margin-left: 50vw;
  width: 100vw;
  height: 52.5vw;
  font-size: 6.75vh;
  line-height: 1.15;
  overflow: visible;
  transform: translateX(-50%) translateY(-50%);
  white-space: nowrap;
}
.schedule_kr div {
  font-size: 1.8vw;
}
.schedule_en div {
  font-size: 1.7vw;
}
.schedule_en {
  margin-top: -0.05vw;
}
.schedule_en>div {
  padding-top: 0.7vw !important;
}
.multi_en {
  transform: translateY(0.2vw);
}
* {
  /*font-family: 'Grotesk-Remix-reg', j-Regular, sans-serif;*/
  font-weight: normal;
  font-style: normal;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  word-break: keep-all;
}
.schedule_wrap * {
  /*font-family: 'Grotesk-Remix-mid', j-Bold, sans-serif !important;*/
  font-family: 'Open Sans', serif !important;
}
.sns_image {
  width: 100%;
  height: 100%
}
.text_whole_sub_wrap a {
  width: 1.6vw;
  display: block;
  position: absolute;
  right: 0;
  height: 1.6vw;
}
.sns_1 {
  position: absolute;
  left: 7.5vw;
  width: 1.5vw;
  height: 1.5vw;
  bottom: 0vw;
  transform: scale(0.9);
}
.sns_3 {
  position: absolute;
  left: 5.35vw;
  width: 1.5vw;
  height: 1.5vw;
  bottom: 0vw;
}
.sns_2 {
  position: absolute;
  left: 3.2vw;
  width: 1.5vw;
  height: 1.5vw;
  bottom: 0;
}
.text_whole_sub_wrap {
  position: absolute;
  padding-right: 5vw;
  padding-left: 5vw;
  overflow: visible;
  /* margin-bottom: 5vh; */
  height: 35vw;
  font-size: 66vh;
  display: inline-block;
  position: relative;
  width: auto;
  /* top: 50vh; */
  /* padding-left: 12vh; */
  /* padding-right: 12vh; */
  /* margin-right: 20%; */
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  line-height: 1;
}
.text_whole {
  top: 3.5vh;
  ;
  position: relative;
}
.text_whole_sub_wrap * {
  display: inline;
}
.text_whole_sub_wrap>span {
  height: 40vw;
  line-height: 1.28;
  top: 50%;
  position: relative;
  transform: translateY(-50%);
  /* height: auto; */
  display: inline-block;
  font-size: 40vw;
}
.typography_and_objects {
  white-space: normal;
  /*height: 7.5vh;*/
}
.typography_and_objects_en {
  /*margin-bottom: 4vh*/
}
.slash {
  background-size: contain;
  background-image: url(slash.png);
  /* display: none; */
  position: absolute;
  height: 100%;
  pointer-events: none;
  background-repeat: no-repeat;
}
.slash_left {
  left: 0%;
  /*transform: translateX(50%);*/
  transform: translateX(-2vh);
}
.slash_right {
  transform: scaleX(-1) translateX(-2vh);
  right: 0%;
}
.grid {
  /*background: url(.img/grid-02.png);*/
  background-size: 100% 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%
}
#canvas {
  z-index: 1000000;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: absolute;
}
.schedule_wrap {
  width: 100vw;
  /* margin-top: 5vh; */
  display: flex;
  margin-left: 50%;
  transform: translateX(-50%);
  /*height: 12.5vw;*/
}
.schedule_wrap>div:nth-child(1) {
  padding-right: 3vw;
  width: 50%;
  padding-left: 3vw;
}
.schedule_wrap>div:nth-child(2) {
  padding-left: 3vw;
  width: 50%;
  padding-right: 3vw;
}
.index_wrap {
  padding-right: 1vw;
  padding-left: 1vw;
  z-index: 10;
  font-family: 'Grotesk-Remix-mid', j-Med, sans-serif;
  width: 100%;
  position: relative;
  text-indent: 8.33vw;
  word-break: keep-all;
  font-size: 2.5vw;
  font-size: 2.4vw;
  text-align: center;
  line-height: 1.5;
}
.index_wrap div {
  font-family: 'Grotesk-Remix-mid', j-Med, sans-serif
}
.schedule {
  width: 100%;
  position: relative;
}
.schedule * {
  font-family: 'Grotesk-Remix-mid';
}
.schedule_kr_1 {
  /*left: 17.9%;*/
}
.schedule_kr_2 {
  padding-top: 0.25vw;
  /*left: 17.9%;*/
}
.schedule_en_1 {
  /*left: calc(50% + 4vh);*/
}
.schedule_en_2 {
  padding-top: 0.25vw;
  /*left: calc(50% + 4vh);*/
}
.schedule div {
  display: flex;
  justify-content: space-between;
  line-height: 1;
  /*font-weight: 700;*/
}
.middleslash {
  background-position: center;
  background-size: auto 100%;
  /*height: 2vw;*/
  background-repeat: repeat-x;
  background-image: url('middleslash.png');
  width: 5vw;
}
.schedule>div {
  padding-top: 0.6vw;
}
.blue {
  top: 3vw;
  width: 31vw;
  height: 0;
  border-top: 0.3vw solid #000e9d;
  position: absolute;
  left: -1vw;
}
.blue_edge {
  transition: 2s ease-out;
  height: 0;
  border-top: 0.3vw solid #000e9d;
  position: absolute;
  left: -1vw;
}
.blue_edge_1 {
  top: 0;
  width: 60vw;
}
.blue_edge_1_animate {
  margin-left: -30vw
}
.blue_edge_2 {
  top: 0;
  height: 0;
  border-left: 0.3vw solid #000e9d;
  position: absolute;
  left: 0;
  border-top: none;
  height: 100vh;
  width: 0;
  margin-top: -60vh;
}
.blue_edge_2_animate {
  margin-top: 0vh
}
.blue_edge_3 {
  width: 60vw;
  bottom: 0px;
  top: auto;
  position: fixed;
  right: 0;
  left: auto;
}
.blue_edge_3_animate {
  margin-left: 30vw
}
.middleslash {
  background-position: center;
  background-size: auto 200%;
  height: 2vw;
  background-repeat: repeat-x;
  background-image: url('middleslash.png');
  width: 5vw;
}
.center,
.text_whole_wrap {
  height: 100%
}
.tile_image,
.sundries_tile,
.blue {
  display: none !important
}
.schedule_wrap {
  margin-top: 2vw;
}
.schedule_wrap>div {
  /*width: 100% !important;*/
  position: relative;
}
.schedule_kr div {
  font-size: 3.7vw;
}
.schedule_wrap>div:nth-child(2) {
  /*padding-top: 4vw;*/
}
.text_whole_wrap {
  top: 50%;
  /*height: 140vw;*/
}
.text_whole_sub_wrap {
  margin-bottom: 5vh;
  height: 40vw;
}
.schedule_en div {
  font-size: 3.7vw;
}
.text_whole_sub_wrap>span {
  font-size: 40vw;
}
.slash {
  /*display: none; */
}
.slash_right {
  transform: scaleX(-1);
  z-index: 100000100000;
  position: fixed;
  /*background: red;*/
  width: 5vw;
}
.slash_left {
  z-index: 100000100000;
  transform: none;
  position: fixed;
  /*background: red;*/
  width: 5vw;
}
.logo {
  top: auto;
  position: absolute;
  right: auto;
  height: 12vh !important;
  bottom: -12vh;
  left: 50%;
  transform: translateX(-50%);
  width: auto !important;
}
body>.logo {
  height: 10vh !important;
  padding: 1vw;
  width: 100vw !important;
  bottom: 0;
  position: fixed;
  right: 0;
  transform: none;
  left: 0;
  z-index: 10000;
  background-repeat: no-repeat;
  background-position: right;
}
body>.logo img {
  transform: none;
  left: auto;
  height: calc(100% - 3vw) !important;
  top: 0;
  position: absolute;
  right: 3vw;
}
.blue_edge_2 {
  border-left: 1.5vw solid #000e9d;
  display: none;
}
.blue_edge_1,
.blue_edge_3 {
  border-top: 1.5vw solid #000e9d;
  display: none;
}
.sns_1,
.sns_2,
.sns_3 {
  height: 4vh;
  width: 4vh;
  bottom: 3vw;
  top: auto;
  position: absolute;
  left: 3vw;
  z-index: 100000000;
  /*display: none !important;*/
}
.sns_1 {
  transform: scale(0.9);
}
.sns_2 {
  left: 7vh;
}
.sns_3 {
  left: 12.3vh;
}
`;
window.BizCharts.track(false);

const App = class App extends React.Component {
  constructor(props) {
    super(props);

    this.store = configureStore();
  }

  render() {
    return (
      <Provider store={this.store}>
        <Mnist />
      </Provider>
    );
  }
};

export default hot(module)(App);
