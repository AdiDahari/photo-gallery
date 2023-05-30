/**
 * The main component of the application.
 * @module App
 *
 * @author Adi Dahari
 */

import { ToastContainer } from "react-toastify";
import Grid from "./components/grid/Grid";
import Modal from "./components/layout/modal/Modal";
import Navbar from "./components/layout/Navbar";

import "react-toastify/dist/ReactToastify.min.css";

/**
 * The main application component.
 *
 * @module App
 * @returns {JSX.Element} The rendered JSX elements.
 *
 * @example
 * import App from "./App";
 *
 * ReactDOM.render(<App />, document.getElementById("root"));
 */
function App() {
  return (
    <div className="App">
      <Modal />
      <Navbar />
      <Grid />
      <ToastContainer />
    </div>
  );
}

export default App;
