import css from 'styled-jsx/css';
import { breakpoints, fonts } from '../../styles/theme';

export const globalStyles = css.global`
  @font-face {
    font-family: 'ITC Avant Garde Pro Md', 'Urbanist';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/ITCAvantGardePro-Md.woff') format('.woff');
    font-display: swap;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,
  body {
    background: #fff;
    font-family: ${fonts.secondary}, Sans-Serif, Helvetica;
    height: 100vh;
    scroll-behavior: smooth;
  }
`;

export default css`
  main {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    body {
      width: 767px;
    }
  }
  @media screen and (max-width: ${breakpoints.mobile}) {
    body {
      width: ${breakpoints.mobile};
      width: 100%;
      margin: 0 auto;
    }
  }
`;
