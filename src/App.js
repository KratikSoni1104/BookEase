import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';
import List from "./pages/List/List";
import Login from "./pages/login/Login";
import Welcome from "./pages/welcome/Welcome";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/hotels" element={<List />}/>
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
