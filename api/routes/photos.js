const express = require("express"); // Express framework for creating the router
const { getPaginatedPhotos } = require("../controllers/photosController"); // Controller function for handling the route

const router = express.Router();

/**
 * GET /api/photos
 * Route handler for getting paginated photos.
 */
router.get("/", getPaginatedPhotos);

// Export the router as a module export
module.exports = { photosRouter: router };
