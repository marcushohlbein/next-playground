import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

export default function Logo(props) {
  return (
    <Flex
      alignItems="baseline"
      letterSpacing="tighter"
      fontSize={{ base: 'xl', md: '3xl' }}
      fontStyle="italic"
      fontWeight="800"
      {...props}
    >
      <Text color={['white', 'white', 'white', 'blue.800']} mr="-3px">
        sneaker
      </Text>
      <Text
        color="red.500"
        letterSpacing="-5px"
        fontSize={{ base: '2xl', md: '4xl' }}
      >
        24
      </Text>
    </Flex>
  )
}
