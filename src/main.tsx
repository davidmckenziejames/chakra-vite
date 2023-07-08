//import React from "react";
import * as React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Onboarding from "./pages/Onboarding/Onboarding";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
