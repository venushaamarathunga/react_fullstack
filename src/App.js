import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./Users/AddUser";
import EditUser from "./Users/EditUser";
import ViewUser from "./Users/ViewUser";

function App() {
  return (
    <div className="App container">
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/adduser" element={<AddUser />}></Route>
            <Route exact path="/edituser/:id" element={<EditUser />}></Route>
            <Route exact path="/viewuser/:id" element={<ViewUser />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
