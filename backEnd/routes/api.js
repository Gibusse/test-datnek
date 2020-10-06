/** Router api **/
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const languages = require('../services/languageServices');
const userControllers = require('../controllers/users.controllers');
const selectedLanguageControllers = require('../controllers/selectedLanguages.controllers');


/**
 *  Show that the url is on localhost:3000/api
 */
router.get('/', (req, res) => {
    res.send('From API route')
});

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return  res.status(401).send('Unauthorized request')
    }
    let token =  req.headers.authorization.split('Bearer ')[1];
    if (token === 'null') {
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, 'secretKey');
    if (!payload) {
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();
}


/**
 * Adding selected language with different options
 */
router.post('/addSelectedLanguage/:id', verifyToken, selectedLanguageControllers.addSelected);

/**
 * GET METHOD {id}
 * Retrive all selected languages
 * by user id
 */
router.get('/selectedLanguage/:id', verifyToken, selectedLanguageControllers.retrieveAll);

/**
 * GET METHOD {id}
 * Retrive one selected language information
 * of a user 
 */
router.get('/selectedLanguage/:id', verifyToken, selectedLanguageControllers.retrieveOne);

/**
 * DELETE METHOD {id/languageId}
 * Remove a specific selected language
 * of a user
 */
router.delete('/deleteSelectedLanguage/:userId/:id', selectedLanguageControllers.deleteOne)

/**
 * POST METHOD
 * Register or login a user
 * with email
 */
router.post('/login', userControllers.register);

/**
 * GET METHOD
 * Retrieving user information
 */
router.get('/getUser/:id', verifyToken, userControllers.getUser);

router.get('/languages', (req, res) => {
    languages.getAllLanguages(res);
})

module.exports = router
