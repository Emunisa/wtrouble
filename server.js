import static from './src/static-file-handler';

export const handler = async () => {
    try {

        // load index.html if no file is specified
        if (event.path === '' || event.path === '/') {
            return static.vend('static/index.html');
        }

        const path = event.path.substring(1);

        if (path.statsWith('static/')) {
            let res = static.vend(path);

            // if null we couldn't find the file or the file was an unknown type
            if (res === null) {
                console.warn(`couldn't find a file under path ${path}`);
            }
        }

        if (path.startsWith('api/')) {
            //TODO: implement
        }


    } catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify(e.stack),
        };
    }

    return { statusCode: 404 };
};
