/**
 * The main component of the application.
 * @module App
 *
 * @author Adi Dahari
 */

import { ToastContainer, toast } from "react-toastify";
import Grid from "./components/grid/Grid";
import Modal from "./components/layout/modal/Modal";
import Navbar from "./components/layout/Navbar";

import "react-toastify/dist/ReactToastify.min.css";
import { useEffect } from "react";

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
  useEffect(() => {
    if (!process.env.REACT_APP_API_URL) {
      toast.error(
        "Required environment variables is missing. Please contact administration",
        {
          position: "top-center",
        }
      );
      toast.clearWaitingQueue();
    }
  });
  return (
    <div className="App">
      <Modal />
      <Navbar />
      <Grid />
      <ToastContainer limit={1} />
    </div>
  );
}

export default App;
