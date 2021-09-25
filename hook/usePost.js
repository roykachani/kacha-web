import { useState } from 'react';

export const usePost = () => {
	const [response, setResponse] = useState();
	const [fetching, setfetching] = useState(false);

	const postData = async (url, object) => {
		try {
			setfetching(true);
			//data
			const { data } = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},

				body: JSON.stringify(object),
			});

			setResponse(data);
			setfetching(false);
		} catch (error) {
			console.log(error, 'ocurrio un error.');
		}
	};
	return [postData, response, fetching];
};
