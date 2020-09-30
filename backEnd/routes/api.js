/** Router api **/
const express = require('express');
const router = express.Router();
const selectedLanguages = require('../services/selectedServices');
const user = require('../services/userServices');

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

router.post('/login', (req, res) =>{
    let email = req.body;
    user.register(email, res);
})

module.exports = router
