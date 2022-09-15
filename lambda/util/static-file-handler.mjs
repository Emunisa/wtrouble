import fs from 'fs';

export const vend = (path) => {
	try {
		let content = fs.readFileSync(path, 'utf-8');
		let contentType = getContentType(path);

		return {
            statusCode: 200,
            body: content,
            headers: { 'Content-Type': contentType }
        };
	} catch (e) {
		console.warn('encountered error loading static file');
		console.warn(e.toString);
		return null;
	}

};

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

export default { vend };