const MerchantJson = require('../constant/merchant');

exports.getMerchantObjective = (req, res, next) => {
    return res.status(200).json(MerchantJson);
}