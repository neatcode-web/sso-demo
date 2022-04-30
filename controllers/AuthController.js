const jwt = require("jsonwebtoken");
const apiResponse = require("../helpers/apiResponse");
const userService = require('../services/user');
const { defaultAppUrl, jwtSecret, jwtTimeoutDuration } = require('../config');

/**
 * 
 * @param {username, password} req 
 * @param {jwt} res 
 * @param {*} next 
 * @returns 
 */
exports.login = async (req, res, next) => {
    try {
        const data = await userService.getUserByIdAndPassword(req.body.username, req.body.password);
        //user exist
        if(data.length > 0) {
            //generate jwt and response with success
            let userData = {
                id: data[0].id,
                username: req.body.username,
            };
            //Prepare JWT token for authentication
            const jwtPayload = userData;
            const jwtData = {
                expiresIn: jwtTimeoutDuration,
            };
            //Generated JWT token with Payload and secret.
            const token = jwt.sign(jwtPayload, jwtSecret, jwtData);
            return apiResponse.successResponseWithData(res, "Login Success.", {"redirectUrl": defaultAppUrl, accessToken: token});
        }
        //user doesn't exist
        else {
            return apiResponse.validationErrorWithData(res, "Incorrect Username or Password", {});
        }
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
}
exports.login1 = (req, res, next) => {
    try {
        //res.json(await programmingLanguages.getMultiple(req.query.page));
        return apiResponse.successResponseWithData(res, "Login Success.", []);
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
}