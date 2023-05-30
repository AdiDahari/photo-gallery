/**
 * Wraps a controller function with try-catch error handling.
 * Any unhandled errors will be passed to the error handling middleware.
 *
 * @param {Function} controller - The controller function to be wrapped.
 * @returns {Function} - The wrapped function with try-catch error handling.
 */
exports.tryCatch = (controller) => async (req, res, next) => {
  try {
    await controller(req, res);
  } catch (error) {
    return next(error);
  }
};
