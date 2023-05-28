import Grid from "./components/grid/Grid";
import Button from "./components/layout/Button";
import Modal from "./components/layout/Modal";
import Navbar from "./components/layout/Navbar";

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
