/** Router api **/
const express = require('express');
const router = express.Router();
const selectedLanguages = require('../services/selectedServices');

/**
 *  Show that the url is on localhost:3000/api
 */
router.get('/', (req, res) => {
    res.send('From API route')
});

/**
 * Adding selected language with different options
 */
router.post('/selectedLanguage', (req, res) => {
    let selected = req.body;
    selectedLanguages.add(selected, res)

});

router.get('/selectedLanguage', (req, res) => {
    let selected = req.body;
    selectedLanguages.findAll(selected, res)

});

module.exports = router
