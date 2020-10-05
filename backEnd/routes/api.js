/** Router api **/
const express = require('express');
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

/**
 * Adding selected language with different options
 */
router.post('/addSelectedLanguage/:id', selectedLanguageControllers.addSelected);

/**
 * GET METHOD {id}
 * Retrive all selected languages
 * by user id
 */
router.get('/selectedLanguage/:id', selectedLanguageControllers.retrieveAll);

/**
 * GET METHOD {id}
 * Retrive one selected language information
 * of a user 
 */
router.get('/selectedLanguage/:id', selectedLanguageControllers.retrieveOne);

/**
 * DELETE METHOD {id/languageId}
 * Remove a specific selected language
 * of a user
 */
router.delete('/deleteSelectedLanguage/:id/:languageId', selectedLanguageControllers.deleteOne)

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
router.get('/getUser/:id', userControllers.getUser);

router.get('/languages', (req, res) => {
    languages.getAllLanguages(res);
})

module.exports = router
