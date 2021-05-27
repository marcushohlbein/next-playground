import React from 'react'
import { Flex, Link, Text } from '@chakra-ui/react'

export default function Logo(props) {
  return (
    <Flex
      as={Link}
      href="/"
      alignItems="baseline"
      letterSpacing="tighter"
      fontSize={{ base: 'xl', md: '3xl' }}
      fontStyle="italic"
      fontWeight="800"
      _hover={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      {...props}
    >
      <Text color="blue.800" mr="-3px">
        sneaker
      </Text>
      <Text
        color="red.500"
        letterSpacing="-4px"
        fontSize={{ base: '2xl', md: '4xl' }}
      >
        24
      </Text>
    </Flex>
  )
}
