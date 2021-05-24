import React, { useState } from 'react'
import {
  Link,
  Box,
  Flex,
  Text,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'

import { FaSearch } from 'react-icons/fa'
import Logo from './Logo'

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer {...props}>
      <Logo color={['white', 'white', 'white', 'blue.700']} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="gray.700"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
)

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="gray.700"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
)

const SearchIcon = () => <FaSearch color="blue.800" />

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', lg: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
}

const SearchToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', lg: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <SearchIcon />}
    </Box>
  )
}

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="blue.800" />}
      />
      <Input
        w="75px"
        float="left"
        border="none"
        bg="white"
        type="text"
        placeholder="Enter Search here..."
        _focus={{ outline: false }}
      />
    </InputGroup>
  )
}

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <Text
        fontSize={{ base: '2xl', md: 'md' }}
        fontWeight="bold"
        display="block"
        {...rest}
      >
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', lg: 'block' }}
      flexBasis={{ base: '100%', lg: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'center', 'flex-end', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        py={[4, 4, 4, 0]}
      >
        <MenuItem to="/">Sneaker</MenuItem>
        <MenuItem to="/how">Sale</MenuItem>
        <MenuItem to="/features">Upcoming</MenuItem>
        <MenuItem to="/pricing">Brands</MenuItem>
        {/* <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            color={['green.500', 'green.500', 'white', 'white']}
            bg={['white', 'white', 'green.500', 'green.500']}
            _hover={{
              bg: ['green.100', 'green.100', 'green.600', 'primary.600'],
            }}
          >
            Create Account
          </Button>
        </MenuItem> */}
      </Stack>
    </Box>
  )
}

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      maxW="1200px"
      px={4}
      py={{ base: 2, md: 0 }}
      bg="white"
      color="gray.700"
      position="fixed"
      boxShadow="sm"
      zIndex="100"
      borderBottom="1px"
      borderColor="gray.100"
      {...props}
    >
      {children}
    </Flex>
  )
}
