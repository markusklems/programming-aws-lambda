'use strict';

module.exports.handler = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Update article.'
        }),
    };
    callback(null, response);
};
