import React from 'react'
import { Button, Container, HStack, Text, VStack, Box } from '@chakra-ui/react'


import { useSupabase } from './supabase'

export const Home: React.FC<{}> = () => {
  const supabase = useSupabase()

  const handleLogout = () => {
    supabase.auth.signOut().catch(console.error)
  }

  return (
    <VStack spacing={10} w="100%" align="stretch">
      <HStack w="100%" justify="flex-end" p={4}>
        <Button onClick={handleLogout} size="xs" variant="link">
          LOG OUT
        </Button>
      </HStack>
      <HStack w="100%" justify="flex-end">
        <Container>
        </Container>
      </HStack>
    </VStack>
  )
}
