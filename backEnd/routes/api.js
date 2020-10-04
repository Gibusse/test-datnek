/** Router api **/
const express = require('express');
const router = express.Router();
const selectedLanguages = require('../services/selectedServices');
const user = require('../services/userServices');
const languages = require('../services/languageServices');
const userControllers = require('../controllers/users.controllers');


/**
 *  Show that the url is on localhost:3000/api
 */
router.get('/', (req, res) => {
    res.send('From API route')
});

/**
 * Adding selected language with different options
 */
router.post('/addSelectedLanguage/:id', (req, res) => {
    let selected = req.body;
    selectedLanguages.add(selected, res)

});

/**
 * GET METHOD {id}
 * Retrive
 */
router.get('/selectedLanguage/:id', (req, res) => {
    const { id } = req.params;
    selectedLanguages.findAll({ id }, res)

});

/**
 * GET METHOD {id}
 * Retrive one selected language information
 * of a user 
 */
router.get('/selectedLanguage/:id', (req, res) => {
    const { id } = req.params;
    const { languageId } = req.body;
    selectedLanguages.findOne({ id, languageId }, res)

});

/**
 * DELETE METHOD {id/languageId}
 * Remove a specific selected language
 * of a user
 */
router.delete('/deleteSelectedLanguage/:id/:languageId', (req, res) => {
    const { id, languageId } = req.params;
    selectedLanguages.deleteOne({ id, languageId }, res);
})

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
