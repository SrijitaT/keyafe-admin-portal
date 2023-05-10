import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./pages/homepage/HomePage";
import { signOutSuccess } from "./redux/admin/admin.action";
import DashBoard from "./pages/dashboard-pages/DashBoard";
import ShapePage from "./pages/dashboard-pages/shape-page/ShapePage";
import { useSelector, useDispatch } from "react-redux";
// import {
//   getAvailableFlavour,
//   getProductCategory,
//   getAvailableShapes,
// } from "./redux/products/product.action";
import Header from "./components/header/header.component";
import ProtectedRoute from "./components/protected-routes/protected-route.component";
import Error404 from "./components/error-pages-list/error404/error-404.component";
import Error403 from "./components/error-pages-list/error403/error-403.component";
import Error500 from "./components/error-pages-list/error500/error500.component";
import FlavourPage from "./pages/dashboard-pages/flavour-page/FlavourPage";
import ProductPage from "./pages/dashboard-pages/product-page/ProductPage";
import ProductDetailEditPage from "./pages/product-detail/ProductDetailEditPage";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  if (currentUser && currentUser.exp) {
    //Check for expired token
    const currentTime = Date.now() + 7200000;

    if (currentUser.exp > currentTime || !currentUser) {
      //logout user if token expires
      dispatch(signOutSuccess());

      window.location.href = "/";
    }
  }

  // useEffect(() => {
  //   dispatch(getAvailableFlavour());
  //   dispatch(getAvailableShapes());
  //   dispatch(getProductCategory());
  // }, []);

  return (
    <Container fluid>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route
              path="/shape"
              exact
              element={
                <ProtectedRoute>
                  <ShapePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/flavour"
              element={
                <ProtectedRoute>
                  <FlavourPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/product"
              element={
                <ProtectedRoute>
                  <ProductPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              exact
              element={
                <ProtectedRoute>
                  <DashBoard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/editproduct/:cat_name/:title"
              exact
              element={
                <ProtectedRoute>
                  <ProductDetailEditPage />
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
