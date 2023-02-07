import "./App.css";
import Header from "./components/header/header.component";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import { signOutSuccess } from "./redux/admin/admin.action";
import DashBoard from "./pages/dashboard-pages/DashBoard";
import ShapePage from "./pages/dashboard-pages/shape-page/ShapePage";
import { useSelector, useDispatch } from "react-redux";
import ProtectedRoute from "./components/protected-routes/protected-route.component";
import Error404 from "./components/error-pages-list/error404/error-404.component";
import Error403 from "./components/error-pages-list/error403/error-403.component";
import Error500 from "./components/error-pages-list/error500/error500.component";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  if (currentUser && currentUser.exp) {
    const currentTime = Date.now() * 7200000;
    if (currentUser.exp > currentTime || !currentUser) {
      dispatch(signOutSuccess());
      window.location.href = "/";
    }
  }

  return (
    <Container fluid>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/shape" exact element={<ShapePage />} />
            <Route
              path="/dashboard"
              exact
              element={
                <ProtectedRoute>
                  <DashBoard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Error404 />} />
            <Route path="/error403" element={<Error403 />} />
            <Route path="/error500" element={<Error500 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
