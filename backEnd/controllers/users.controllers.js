const userServices = require('../services/userServices');

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
        return res.send(user);
    } catch(e) {
        return res.status(400);
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
        return res.send(user);
    } catch (e) {
        return res.status(400);
    }
}
