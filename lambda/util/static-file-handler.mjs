import fs from 'fs';

export const vend = (path) => {
	try {

		let content = fs.readFileSync(path);
		let contentType = getContentType(path);

		console.info(contentType);
		return typeToResponseMapperMap[contentType](content, contentType);

	} catch (e) {
		console.warn('encountered error loading static file');
		console.warn(e.toString);
		return null;
	}

};

export default { vend };

/////
// content type stuff
/////
const extToTypeMap = {
	'html': 'text/html',
	'png': 'image/png',
	'js': 'text/javascript',
	'css': 'text/css'
};

const getContentType = (path) => {
	let fileExtension = path.split(".")[1];

	return extToTypeMap[fileExtension];
}


/////
// mappers
/////
const mapTextToResponse = (content, contentType) => {
	console.info('in mapTextToResponse');
	return {
		statusCode: 200,
		body: content.toString('utf8'),
		headers: { 'Content-Type': contentType }
	}
}
mapTextToResponse.types = [ 'text/html', 'text/javascript', 'text/css' ];

const mapImageToResponse = (content, contentType) => {
	console.info('in mapImageToResponse');
	return {
		statusCode: 200,
		body: content.toString('base64'),
		isBase64Encoded: true,
		headers: { 'Content-Type': contentType }
	}
}
mapImageToResponse.types = [ 'image/png' ];

/////
// map the mapper map
/////
const typeToResponseMapperMap = { };
for (let mapper of [ mapTextToResponse, mapImageToResponse ]) {
	for (let type of mapper.types) {
		console.info(`mapping ${type} to ${mapper.name}`);
		typeToResponseMapperMap[type] = mapper;
	}
}