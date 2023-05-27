/**
 *
 */
const express = require("express");
const { getPaginatedPhotos } = require("../controllers/photosController");

const router = express.Router();

router.get("/", getPaginatedPhotos);

module.exports = { photosRouter: router };
