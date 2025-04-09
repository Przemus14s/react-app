import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useLogout from '../../services/useLogout';
import { Box, Button, Flex, HStack, Spacer, Text } from '@chakra-ui/react';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    useLogout();
    navigate('/login');
  };

  return (
    <Box bg="gray.800" px={6} py={4} boxShadow="md">
      <Flex align="center">
        <HStack spacing={6}>
          <NavLink to="/">
            <Text color="white" fontWeight="bold" _hover={{ color: 'teal.300' }}>
              HomePage
            </Text>
          </NavLink>
          <NavLink to="/login">
            <Text color="white" _hover={{ color: 'teal.300' }}>
              Login
            </Text>
          </NavLink>
          <NavLink to="/register">
            <Text color="white" _hover={{ color: 'teal.300' }}>
              Register
            </Text>
          </NavLink>
        </HStack>

        <Spacer />

        <Button size="sm" colorScheme="teal" onClick={handleLogout}>
          Wyloguj
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
