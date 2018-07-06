export default (a, b) => {
	return new Promise((resolve, rejects) => {
		setTimeout(() => {
			resolve(a + b);
		}, 1000);
	});
};