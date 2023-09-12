//import React from "react";
import * as React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Onboarding from "./pages/Onboarding/Onboarding";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";
import Product from "./pages/Product/Product";
import Checkout from "./pages/Checkout/Checkout";
import Feed from "./pages/Profile/Feed";
import ProfileOffline from "./pages/ProfileOffline/ProfileOffline";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import Signin from "./pages/Auth/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import Billing from "./pages/Billing/Billing";
import theme from "./theme";
import "@fontsource/chakra-petch/300.css";
import "@fontsource/chakra-petch/400.css";
import "@fontsource/chakra-petch/500.css";
import "@fontsource/chakra-petch/600.css";
import "@fontsource/chakra-petch/700.css";
import { HelmetProvider } from "react-helmet-async";
import Privacy from "./pages/Legal/Privacy";
import Terms from "./pages/Legal/Terms";
import Blog from "./Blog";
import Cookies from "./pages/Legal/Cookies";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Signin />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
);
