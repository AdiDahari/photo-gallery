// Required modules
const express = require("express"); // Express framework for creating the server
require("dotenv").config(); // Loads environment variables from a .env file
const cors = require("cors"); // Cross-origin resource sharing middleware
const { photosRouter } = require("./routes/photos"); // Router for handling photo-related routes

// Create an Express application
const app = express();

// Enable CORS
app.use(cors());

// Use the "photos" router for handling routes starting with "/api/photos"
app.use("/api/photos", photosRouter);

// Setting server port
const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
