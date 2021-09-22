import css from 'styled-jsx/css';
import { breakpoints, colors, fonts } from '../../styles/theme';

export const globalStyles = css.global`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	html,
	body {
		background: #fff;
		font-family: ${fonts.secondary};
		height: 100vh;
	}
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

		width: 100%;
	}
	/* @media (min-width: ${breakpoints.mobile}) {
		main {
			height: 90vh;
			width: ${breakpoints.mobile};
		}
	} ; */
`;
