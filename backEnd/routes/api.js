/** Router api **/
const express = require('express');
const router = express.Router();
const selectedLanguages = require('../services/selectedServices');
const user = require('../services/userServices');
const languages = require('../services/languageServices');

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

router.get('/selectedLanguage/:id', (req, res) => {
    let userData = req.params;
    selectedLanguages.findAll(userData, res)

});

router.get('/selectedLanguage/:id', (req, res) => {
    let datas = req.params;
    datas.languageId = req.body;
    selectedLanguages.findOne(datas, res)

});

router.post('/login', (req, res) =>{
    let email = req.body;
    user.register(email, res);
});

router.get('/getUser/:id', (req, res) => {
    let id = req.params;
    user.getUser(id, res);
});

router.get('/languages', (req, res) => {
    languages.getAllLanguages(res);
})

module.exports = router
