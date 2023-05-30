# Photo Gallery Server

This project is a simple Express server for handling photo-related routes. It includes the following files:

1. `index.js`: This file sets up the Express server and defines the main server logic. It utilizes the Express framework, the `dotenv` package for managing environment variables, the `cors` middleware for enabling Cross-Origin Resource Sharing, and the `photosRouter` for handling photo-related routes. The server listens on port 4000.

2. `utils/photos.js`: This file contains utility functions for working with photos. It exports two functions:

   - `resolveDate`: This function resolves the date from a previewURL string.
   - `comparePhotos`: This function compares two photos based on a specified key and order.

3. `utils/tryCatch.js`: This file contains utility function wrapper for try-catch functionality, applying a erro handling middleware.

4. `middleware/errorHandler.js`: This file contains a error handling middleware.

5. `routes/photos.js`: This file exports an Express router specifically designed for handling photo-related routes. It includes a single route:
   - `GET /api/photos`: This route is handled by the `getPaginatedPhotos` function, which is assumed to be implemented in a separate `controllers/photosController.js` file.

## Getting Started

To run the project, make sure you have Node.js installed. Install the project dependencies by running `npm install` in the project's root directory. Once the dependencies are installed, you can start the server by running `npm start`. The server will start on port 4000, and you can access the photo-related routes at `http://localhost:<PORT | 4000>/api/photos`.

## Customization

Feel free to customize and extend the project according to your needs. You can add more routes, implement additional controller functions, or modify the utility functions in `utils/photos.js`. Don't forget to handle error cases and ensure proper validation and authentication for production-ready applications.

## Questions and Support

If you have any questions or need further assistance, please don't hesitate to reach out. Happy coding!
