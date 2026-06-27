const mongoose = require("mongoose");

const checkObjectId = (req, res, next) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {

        return res.status(400).json({
            success: false,
            message: "Invalid Task ID"
        });

    }

    next();

};

module.exports = checkObjectId;