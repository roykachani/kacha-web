export const usePost = () => {
	const postData = async (url, object) => {
		try {
			//data
			const { data } = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},

				body: JSON.stringify(object),
			});
		} catch (error) {
			console.log(error, 'ocurrio un error.');
		}
	};
	return [postData];
};
