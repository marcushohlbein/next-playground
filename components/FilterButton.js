import { Center, Flex, Spacer, Text } from '@chakra-ui/layout'
import React from 'react'
import { BiSlider } from 'react-icons/bi'

export default function FilterButton({ onOpen }) {
  return (
    <Center
      as={Flex}
      w="50%"
      px={4}
      py={2}
      mr={4}
      justify="flex-start"
      color="gray.500"
      bg="gray.100"
      cursor="pointer"
      borderRadius="md"
      onClick={onOpen}
    >
      <Text fontWeight="500" mr={4}>
        Filter
      </Text>
      <Spacer />
      <BiSlider float="right" size="22" />
    </Center>
  )
}
