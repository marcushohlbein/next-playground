import { Box, Center, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaFilter } from 'react-icons/fa'

export default function FilterButton({ onOpen }) {
  return (
    <Center
      px={12}
      py={1}
      color="gray.500"
      onClick={onOpen}
      cursor="pointer"
      borderRight="1px"
      borderColor="gray.200"
      _hover={{
        bg: 'blue.800',
        color: 'white',
      }}
    >
      <FaFilter />
      <Text fontWeight="600" ml={2} fontWeight="bold">
        Filter
      </Text>
    </Center>
  )
}
