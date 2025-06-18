const ApiError = require("../utils/ApiError");

const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json(new ApiError({
        success: false,
        message,
        errors: err.errors || null,
    }));
};

module.exports = errorMiddleware;
