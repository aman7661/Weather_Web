const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c3f5771564msh2776e97d9d59195p1601e0jsn6339a4482d14',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}