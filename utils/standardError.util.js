const standardError = (res, error, message) => {
  res.status(500).json({
    success: false,
    message,
    error: error.message,
  });
};

module.exports = { standardError };
