import { Center, Text } from '@chakra-ui/layout'
import React from 'react'
import { BiSlider } from 'react-icons/bi'

export default function FilterButton({ onOpen }) {
  return (
    <Center
      w="50%"
      px={2}
      py={2}
      mr={4}
      justify="flex-start"
      color="gray.500"
      bg="gray.100"
      cursor="pointer"
      onClick={onOpen}
    >
      <Text fontWeight="600" mr={4} fontWeight="bold">
        Filter
      </Text>
      <BiSlider size="22" />
    </Center>
  )
}
