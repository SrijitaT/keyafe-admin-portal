import "./App.css";
import Header from "./components/header/header.component";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInAdmin from "./pages/sign-in/SignInAdmin";
import HomePage from "./pages/homepage/HomePage";
import DashBoard from "./pages/dashboard-pages/DashBoard";
import ShapePage from "./pages/dashboard-pages/shape-page/ShapePage";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/signin" exact element={<SignInAdmin />} />
            <Route path="/" exact element={<HomePage />} />
            <Route path="/dashboard" exact element={<DashBoard />} />
            <Route path="/shape" exact element={<ShapePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
