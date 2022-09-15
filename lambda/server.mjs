import statics from './util/static-file-handler.mjs';

export const handler = async (event, context) => {
    try {
        console.info(event)

        // load index.html if no file is specified
        if (event.path === '' || event.path === '/') {
            console.info('vending homepage');
            return statics.vend('static/index.html');
        }

        const path = event.path.substring(1);

        // all static content under static path.  vend the associated file for these.
        if (path.startsWith('static/')) {
            console.info(`vending static file: ${path}`);
            let res = statics.vend(path);

            // if null we couldn't find the file or the file was an unknown type
            if (res === null) {
                console.warn(`couldn't find a file under path ${path}`);
            } else {
                return res;
            }
        }

        // all apis will be located under api path.  call the associated function for these.
        if (path.startsWith('api/')) {
            console.info('vending api');
            //TODO: implement
        }

        console.info('no handler found');

    } catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify(e.stack),
        };
    }

    return { statusCode: 404 };
};
