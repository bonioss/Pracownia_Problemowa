const errorHandler = (err, req, res, next) => {
    // Log to console for dev
    console.log(err.stack);

    return res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || `Internal Server Error.`
    });
}

module.exports = errorHandler;