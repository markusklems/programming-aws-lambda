'use strict';

const uuid = require('uuid');

class Article {
    constructor(id, user_id, text) {
        this.article_id = id;
        this.text = text;
        this.user_id = user_id;
    }
}

const createArticle = (event, context, callback) => {
    validateAttributes(event, callback);
    const body = JSON.parse(event.body);
    const id = uuid.v1();
    const text = body.text;
    let user_id = "no_cognito"
    if (context.identity && context.identity.cognitoIdentityId) {
        user_id = context.identity.cognitoIdentityId;
    } else if (event.headers['X-My-Cognito-Id']) {
        user_id = event.headers['X-My-Cognito-Id'];
    }
    console.log("event", event);
    return new Article(id, user_id, text);
}

const readArticle = (event, callback) => {
    validateId(event, callback);
    const body = JSON.parse(event.body);
    const id = body.article_id;
    return new Article(id);
}

const updateArticle = (event, callback) => {
    validateId(event, callback);
    validateAttributes(event, callback);
    const body = JSON.parse(event.body);
    const id = body.article_id;
    const text = body.text;
    let user_id = "no_cognito"
    if (context.identity && context.identity.cognitoIdentityId) {
        user_id = context.identity.cognitoIdentityId;
    } else if (event.headers['X-My-Cognito-Id']) {
        user_id = event.headers['X-My-Cognito-Id'];
    }
    return new Article(id, user_id, text);
}

const deleteArticle = (event, callback) => {
    validateId(event, callback);
    const body = JSON.parse(event.body);
    const id = body.article_id;
    return new Article(id);
}

// Private validation functions
const validateAttributes = (event, callback) => {
    const body = JSON.parse(event.body);
    if (typeof body.text !== 'string') {
        console.error('Validation Failed');
        callback(new Error('Body did not contain a text property of type string.'));
        process.exit(1);
    }
};
const validateId = (event, callback) => {
    const body = JSON.parse(event.body);
    if (typeof body.article_id !== 'string') {
        console.error('Validation Failed');
        callback(new Error('Body did not contain an article_id property of type string.'));
        process.exit(1);
    }
};

module.exports = {
    Article: Article,
    createArticle: createArticle,
    readArticle: readArticle,
    updateArticle: updateArticle,
    deleteArticle: deleteArticle
}
