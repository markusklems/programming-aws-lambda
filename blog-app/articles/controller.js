'use strict';

const Article = require('./model.js');

module.exports = class ArticleController {
    constructor(dbDAO) {
        this.dbDAO = dbDAO;
    }

    createArticle(article, callback) {
        this.dbDAO.create(article, (error, result) => {
            if (error) {
                callback(error);
            } else {
                callback(null, result);
            }
        });
    }

    readArticle(article, callback) {
        this.dbDAO.read(article, (error, result) => {
            if (error) {
                callback(error);
            } else {
                callback(null, result);
            }
        });
    }

    updateArticle(article, callback) {
        this.dbDAO.update(article, (error, result) => {
            if (error) {
                callback(error);
            } else {
                callback(null, result);
            }
        });
    }

    deleteArticle(article, callback) {
        this.dbDAO.delete(article, (error, result) => {
            if (error) {
                callback(error);
            } else {
                callback(null, result);
            }
        });
    }
}
