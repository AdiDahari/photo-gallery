# Photo Gallery

A full stack application to search and display photos from [Pixabay](https://pixabay.com/).

implemented in Express.js and React+Redux.

## Further Information

- [api readme](api/README.md)
- [client readme](client/README.md)

## Table of Contents

- [Photo Gallery](#photo-gallery)
  - [Further Information](#further-information)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

## Installation

1. Clone the repo with the command:
   ```shell
   git clone https://github.com/AdiDahari/photo-gallery.git
   ```
2. cd into the directory:
   ```shell
   cd photo-gallery
   ```
3. create the following files with relevant values:

   - `api/.env`

   ```shell
    PORT=<SERVER PORT>
    PIXABAY_API_KEY=<PIXABAY API KEY>
    NODE_ENV=development (optional)
   ```

   - `client/.env.local`

   ```shell
    REACT_APP_API_URL=http://localhost:<SERVER PORT>/api/photos
   ```

4. run the follwing commands to install dependencies:
   ```shell
    npm install
    npm run intall:all
   ```

## Usage

start the project:

```shell
 npm start
```

the browser should open a browser window with the application.

if not so, manually open a browser with address `http://localhost:3000`

## License

This project is licensed under the [MIT License](LICENSE).
