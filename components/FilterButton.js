import { Center, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaFilter } from 'react-icons/fa'

export default function FilterButton({ onOpen }) {
  return (
    <Center
      px={2}
      py={1}
      justify="flex-start"
      color="gray.500"
      cursor="pointer"
      onClick={onOpen}
    >
      <Text fontWeight="600" mr={2} fontWeight="bold">
        Filter
      </Text>
      <FaFilter />
    </Center>
  )
}
