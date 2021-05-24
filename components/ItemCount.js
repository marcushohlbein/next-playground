import { Box } from '@chakra-ui/layout'
import React from 'react'

export default function ItemCount({ count, onOpen }) {
  return (
    <>
      <Box float="left" color="gray.500" fontWeight="700" onClick={onOpen}>
        {count} Produkte
      </Box>
    </>
  )
}
