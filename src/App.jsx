/* eslint-disable no-unused-vars */
// import "./index.css";
import "normalize.css";
import { Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./Components/Pages/CreateOrder/ErrorBoundary.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
import CreateOrder from "./Components/Pages/CreateOrder/CreateOrder.jsx";
function App() {
  const createOrder = lazy(() => import("./Components/Pages/CreateOrder/CreateOrder.jsx"));
  return (
    <>
      <ErrorBoundary>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/create-order"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <CreateOrder />
                </Suspense>
              }
            />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;
