const userServices = require('../services/userServices');
const stringify = require('json-stringify-safe');

/**
 * Register or login controller
 * @param {userEmail} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports.register = async (req, res, next) => {
    const { userEmail } = req.body;
    try {
        const user = await userServices.register({userEmail}, res);
        return stringify(user, null, 2);
    } catch(e) {
        return res.send(e.message);
    }
};

/**
 * Retrieving controller
 * @param {id} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports.getUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await userServices.getUser({id}, res);
        return stringify(user, null, 2);
    } catch (e) {
        return res.send(e.message);
    }
}
