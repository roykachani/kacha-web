import css from 'styled-jsx/css';
import { breakpoints, colors, fonts } from '../../styles/theme';

export const globalStyles = css.global`
	html,
	body {
		background: #fff;
		padding: 0;
		margin: 0;
		/* overflow: hidden; */
		font-family: ${fonts.secondary};
		height: 100vh;
	}
	* {
		box-sizing: border-box;
	}
	/* textarea,
	input {
		font-family: ${fonts.base};
	} */
`;

export default css`
	div {
		/* display: grid; */
		/* place-items: center; */
	}
	main {
		/* background: #fff; */
		/* border-radius: 10px; */
		/* box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); */
		/* display: flex; */
		/* flex-direction: column; */

		/* height: 100%; */
		/* overflow-y: auto; */

		/* width: 100%; */
	}
	/* @media (min-width: ${breakpoints.mobile}) {
		div {
			height: 90vh;
			width: ${breakpoints.mobile};
		}
	} ; */
`;
