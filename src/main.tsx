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
import LoginPage from "./pages/Auth/LoginPage";
import MagicLink from "./pages/Auth/MagicLink";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import theme from "./theme";
import "@fontsource/chakra-petch/300.css";
import "@fontsource/chakra-petch/400.css";
import "@fontsource/chakra-petch/500.css";
import "@fontsource/chakra-petch/600.css";
import "@fontsource/chakra-petch/700.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile-loggedout" element={<ProfileOffline />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkinbox" element={<MagicLink />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
