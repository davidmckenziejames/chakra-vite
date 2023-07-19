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
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import theme from "./theme";
import "@fontsource/chakra-petch/300.css";
import "@fontsource/chakra-petch/400.css";
import "@fontsource/chakra-petch/500.css";
import "@fontsource/chakra-petch/600.css";
import "@fontsource/chakra-petch/700.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LoginPage from "./pages/Auth/LoginPage";
import Following from "./pages/Following.tsx/Following";
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/product" element={<Product />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/Following" element={<Following />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/profile-loggedout" element={<ProfileOffline />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </ClerkProvider>
  </React.StrictMode>
);
