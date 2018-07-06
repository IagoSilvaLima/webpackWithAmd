const name = async (param) => {
	console.log(await param);
}

export {
	name
}

export default async () => {
	console.log(await 'iagos');
}
