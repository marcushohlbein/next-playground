import React from 'react'
import Image from 'next/image'
import { Box, Divider, Link } from '@chakra-ui/react'

export default function ProductCard({ product }) {
  return (
    <Box
      as={Link}
      href="/product"
      maxW="sm"
      borderWidth="1px"
      bg="white"
      p={3}
      borderRadius="lg"
      overflow="hidden"
      _hover={{
        textDecoration: 'none',
        boxShadow: { lg: 'md' },
        borderColor: { lg: 'gray.300' },
      }}
    >
      <Image
        src={product.media.thumbUrl}
        alt={product.title}
        layout="intrinsic"
        quality="65"
        width={400}
        height={300}
      />

      <Box>
        <Box d="flex" alignItems="baseline">
          <Box color="gray.500" fontWeight="medium" fontSize="sm">
            {product.brand}
          </Box>
        </Box>

        <Box fontWeight="extrabold" as="h4" lineHeight="tight" isTruncated>
          {product.shoe}
        </Box>
        <Box color="gray.500" fontWeight="500" fontSize="11px">
          {product.styleId}
        </Box>
        <Divider py={2} />
        <Box
          d="flex"
          mt="2"
          alignItems="center"
          justifyContent="space-between"
          letterSpacing="tight"
        >
          <Box
            as="span"
            color="gray.600"
            fontSize={{ base: 'xs', sm: 'sm' }}
            fontWeight="semibold"
          >
            {Math.floor(Math.random() * 9) + 2} Shops
          </Box>
          <Box fontSize={{ base: 'xs', sm: 'sm' }} fontWeight="bold">
            <Box
              as="span"
              fontSize={{ base: '10px', sm: 'xs' }}
              mr={1}
              fontWeight="normal"
            >
              ab
            </Box>
            {product.retailPrice},00 €
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
