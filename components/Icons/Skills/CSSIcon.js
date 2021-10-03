function CSSIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			width={60}
			height={60}
			viewBox="0 0 32 32"
			{...props}
		>
			<path fill="none" d="M0 0h32v32H0z" />
			<path
				fill="#1572b6"
				d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30 5.902 27.201z"
			/>
			<path fill="#33a9dc" d="M16 27.858l8.17-2.265 1.922-21.532H16v23.797z" />
			<path
				fill="#fff"
				d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829-.759 8.518H16v-3.091z"
			/>
			<path
				fill="#ebebeb"
				d="M16.019 21.218l-.014.004-3.442-.93-.22-2.465H9.24l.433 4.853 6.331 1.758.015-.004v-3.216z"
			/>
			<path
				fill="#fff"
				d="M19.827 16.151l-.372 4.139-3.447.93v3.216l6.336-1.756.047-.522.537-6.007h-3.101z"
			/>
			<path
				fill="#ebebeb"
				d="M16.011 6.935v3.091H8.545l-.062-.695-.141-1.567-.074-.829h7.743zM16 13.191v3.091h-3.399l-.062-.695-.14-1.567-.074-.829H16z"
			/>
		</svg>
	);
}

export default CSSIcon;
