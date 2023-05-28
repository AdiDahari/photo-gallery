/**
 * The main component of the application.
 * @module App
 *
 * @author Adi Dahari
 */

import Grid from "./components/grid/Grid";
import Modal from "./components/layout/modal/Modal";
import Navbar from "./components/layout/Navbar";

/**
 * The main application component.
 * Renders the modal, navbar, and grid components.
 * @returns {JSX.Element} The rendered JSX elements.
 */
function App() {
  return (
    <div className="App">
      <Modal />
      <Navbar />
      <Grid />
    </div>
  );
}

export default App;
