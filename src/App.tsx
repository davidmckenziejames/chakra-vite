import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { useSupabaseSession } from '../supabase'
import { Auth } from './Auth'
import Home from './pages/Home/Home'
import Onboarding from "./pages/Onboarding/Onboarding";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";
import Product from "./pages/Product/Product";
import Checkout from "./pages/Checkout/Checkout";
import Feed from "./pages/Profile/Feed";
import ProfileOffline from "./pages/ProfileOffline/ProfileOffline";
import Explore from "./pages/Explore/Explore";


export const App: React.FC = () => {
  const session = useSupabaseSession()

  if (session === undefined) {
    // don't render anything while we don't know whether we have a session
    return null
  }

  if (session === null) {
    return <Auth />
  }

  return (
    <Flex justifyContent="center">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile-loggedout" element={<ProfileOffline />} />
      </Routes>
    </Flex>
  )
}
