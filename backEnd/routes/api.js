/** Router api **/
const express = require('express');
const router = express.Router();

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
    res.send('From API route')
});

module.exports = router
