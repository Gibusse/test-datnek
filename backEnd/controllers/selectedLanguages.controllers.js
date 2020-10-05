const SelectedService = require('../services/selectedServices');
const stringify = require('json-stringify-safe');

module.exports.addSelected = async (req, res) => {
    const { speaking, writing, comprehension, userId, languageId}  = req.body;
    try {
        const item = await SelectedService.add({ speaking, writing, comprehension, userId, languageId}, res);
        return stringify(item, null, 2);
    } catch (error) {
        return res.send(error.message);
    }
}

module.exports.retrieveAll = async (req, res) => {
    const { id } = req.params;
    try {
        const item  = await SelectedService.findAll({id}, res);
        return stringify(item, null, 2)
    } catch (error) {
        return res.send(error.message);
    }
}


module.exports.retrieveOne = async (req, res) => {
    const { id } = req.params;
    const { languageId } = req.body;
    try{
        const item = await SelectedService.findOne({id, languageId }, res);
        return stringify(item, null, 2);
    } catch (error) {
        return res.send(error.message);
    }
}

module.exports.deleteOne = async (req, res) => {
    const { id, userId } = req.params;
    try {
        const item = await SelectedService.deleteOne({userId, id }, res);
        return stringify(item, null, 2);
    } catch (error) {
        return res.send(error);
    }
}
