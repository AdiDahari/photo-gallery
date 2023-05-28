# Photo Gallery Web Application

This is a web application that allows users to browse and search for photos based on different categories. Users can navigate through a grid of photos, view photo details, and search for specific categories.

## Features

- Browse and search photos based on categories
- Pagination for navigating through multiple pages of photos
- Modal dialogs for displaying photo details and search functionality

## Technologies Used

- React.js
- Redux for state management
- React Router for routing
- Tailwind CSS for styling
- Redux Toolkit for Redux simplifications

## Installation

1. Clone the repository: `git clone https://github.com/your-username/photo-gallery.git`
2. Navigate to the project directory: `cd photo-gallery`
3. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your web browser and visit `http://localhost:3000`

## File Structure

The project consists of the following files:

- `src/components/Button.js`: A reusable button component used for various UI interactions.
- `src/components/Details.js`: A component that displays the details of a photo.
- `src/components/Grid.js`: The main component that renders the grid of photos.
- `src/components/GridItem.js`: A component that represents an individual photo in the grid.
- `src/components/Modal.js`: A component that renders modal dialogs for displaying photo details and search functionality.
- `src/components/Navbar.js`: The navigation bar component that includes buttons for pagination and search.
- `src/components/Search.js`: A component that provides a search form for entering photo categories.
- `src/features/modal/modalSlice.js`: Redux slice for managing the modal state and actions.
- `src/features/photos/photosSlice.js`: Redux slice for managing the photo-related state and actions.
- `src/utils/api.js`: Utility functions for fetching photos from the API.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
