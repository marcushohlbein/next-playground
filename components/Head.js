import React, { useEffect, useState } from 'react'
import {
  Link,
  Box,
  Flex,
  Text,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Center,
  InputGroup,
  InputLeftElement,
  Input,
  useDisclosure,
} from '@chakra-ui/react'
import Logo from './Logo'
import { SearchIcon } from '@chakra-ui/icons'

export default function Header(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [pos, setPos] = useState('none')
  useEffect(() => {
    document.addEventListener('scroll', e => {
      let scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 10) {
        setPos('md')
        console.log(pos)
      } else {
        setPos('none')
        console.log(pos)
      }
    })
  }, [])

  return (
    <NavBarContainer pos={pos} {...props}>
      <Logo color={['white', 'white', 'white', 'blue.700']} />
      <SearchBar />
      <MenuToggle onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
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

const MenuToggle = ({ isOpen, onOpen, onClose }) => {
  return (
    <>
      <Box display={{ base: 'block', lg: 'none' }} onClick={onOpen} pr={2}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            as={Flex}
            h="55px"
            px={3}
            bg="blue.700"
            color="white"
            fontWeight="bold"
          >
            Menü
          </DrawerHeader>
          <DrawerBody p={0}>
            <MenuItem
              fontWeight="700"
              fontSize="md"
              color="gray.600"
              borderBottom="1px"
              borderColor="gray.200"
              p={3}
              _hover={{
                bg: 'gray.100',
              }}
              to="/"
            >
              Sneaker
            </MenuItem>
            <MenuItem
              fontWeight="700"
              fontSize="md"
              color="gray.600"
              borderBottom="1px"
              borderColor="gray.200"
              p={3}
              _hover={{
                bg: 'gray.100',
              }}
              to="/how"
            >
              Sale
            </MenuItem>
            <MenuItem
              fontWeight="700"
              fontSize="md"
              color="gray.600"
              borderBottom="1px"
              borderColor="gray.200"
              p={3}
              _hover={{
                bg: 'gray.100',
              }}
              to="/features"
            >
              Upcoming
            </MenuItem>
            <MenuItem
              fontWeight="700"
              fontSize="md"
              color="gray.600"
              borderBottom="1px"
              borderColor="gray.200"
              p={3}
              _hover={{
                bg: 'gray.100',
              }}
              to="/pricing"
            >
              Brands
            </MenuItem>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link
      href={to}
      _hover={{ textDecoration: 'none', borderBottom: '2px' }}
      _focus={{ boxShadow: 'none' }}
    >
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

const MenuLinks = () => {
  return (
    <Box
      display={{ base: 'none', lg: 'block' }}
      flexBasis={{ base: '100%', lg: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'center', 'flex-end', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        py={[4, 4, 4, 0]}
      >
        <MenuItem
          _after={{
            content: '""',
            height: '2px',
          }}
          to="/"
        >
          Sneaker
        </MenuItem>
        <MenuItem to="/how">Sale</MenuItem>
        <MenuItem to="/features">Upcoming</MenuItem>
        <MenuItem to="/pricing">Brands</MenuItem>
      </Stack>
    </Box>
  )
}

const SearchBar = () => {
  return (
    <Box w="100%" px={[6, 8, 8, 12]}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          h="35px"
          children={<SearchIcon color="gray.500" />}
        />
        <Input
          type="text"
          placeholder="Suchen ..."
          fontWeight="400"
          color="gray.500"
          h="35px"
          bg="gray.100"
          border="none"
          _focus={{ outline: 'none' }}
          _placeholder={{ color: 'gray.500' }}
        />
      </InputGroup>
    </Box>
  )
}

const NavBarContainer = ({ children, pos, ...props }) => {
  return (
    <Center
      w="100%"
      mt={0}
      justify="center"
      position="fixed"
      boxShadow={pos}
      borderBottom="1px"
      borderColor="gray.100"
      zIndex="100"
    >
      <Flex
        as="nav"
        h="55px"
        w="100%"
        maxWidth="1200px"
        align="center"
        justify="space-around"
        px={[2, 2, 2, 5]}
        py={{ base: 2, md: 0 }}
        bg="white"
        color="gray.700"
        {...props}
      >
        {children}
      </Flex>
    </Center>
  )
}
