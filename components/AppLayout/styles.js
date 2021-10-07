import css from 'styled-jsx/css';
import { breakpoints, fonts } from '../../styles/theme';

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
