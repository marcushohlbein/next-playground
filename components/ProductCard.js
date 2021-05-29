import React from 'react'
import { Box, Divider, Image, Link } from '@chakra-ui/react'

export default function ProductCard() {
  const property = {
    imageUrl:
      'https://images.stockx.com/360/Nike-Blazer-Mid-77-Vintage-White-Black/Images/Nike-Blazer-Mid-77-Vintage-White-Black/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606325720&fit=clip&fm=webp&ixlib=react-9.1.1&w=1946',
    imageAlt: 'Adidas Yeezy Foam',
    brand: 'Adidas',
    title: 'Yeezy Foam',
    sku: 'CW7645-003',
    formattedPrice: '119,54 €',
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Box
      as={Link}
      href="/product"
      maxW="sm"
      borderWidth="1px"
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      _hover={{
        textDecoration: 'none',
        boxShadow: { lg: 'md' },
        borderColor: { lg: 'gray.300' },
      }}
    >
      <Image p={4} src={property.imageUrl} alt={property.imageAlt} />

      <Box p={3}>
        <Box d="flex" alignItems="baseline">
          <Box color="gray.500" fontWeight="medium" fontSize="sm">
            {property.brand}
          </Box>
        </Box>

        <Box fontWeight="extrabold" as="h4"lineHeight="tight" isTruncated>
          {property.title}
        </Box>
        <Box color="gray.500" fontWeight="400" fontSize="10px">
          {property.sku}
        </Box>
        <Divider my={2} />
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
            {property.reviewCount} Shops
          </Box>
          <Box fontSize={{ base: 'xs', sm: 'sm' }} fontWeight="bold">
            <Box
              as="span"
              fontSize={{ base: '10px', sm: 'sm' }}
              mr={1}
              fontWeight="normal"
            >
              ab
            </Box>
            {property.formattedPrice}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
