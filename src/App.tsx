import Home from "./pages/Home/Home";
import Onboarding from "./pages/Onboarding/Onboarding";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";
import Product from "./pages/Product/Product";
import Checkout from "./pages/Checkout/Checkout";
import Feed from "./pages/Profile/Feed";
import ProfileOffline from "./pages/ProfileOffline/ProfileOffline";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import theme from "./theme";
import "@fontsource/chakra-petch/300.css";
import "@fontsource/chakra-petch/400.css";
import "@fontsource/chakra-petch/500.css";
import "@fontsource/chakra-petch/600.css";
import "@fontsource/chakra-petch/700.css";
import LoginPage from "./pages/Auth/LoginPage";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
