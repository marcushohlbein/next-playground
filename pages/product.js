import { Image } from '@chakra-ui/image'
import { Container, Grid, GridItem, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Head from '../components/Head'

export default function product() {
  const property = {
    imageUrl:
      'https://images.stockx.com/360/Nike-Blazer-Mid-77-Vintage-White-Black/Images/Nike-Blazer-Mid-77-Vintage-White-Black/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606325720&fit=clip&fm=webp&ixlib=react-9.1.1&w=1946',
    imageAlt: 'Adidas Yeezy Foam',
    brand: 'Adidas',
    title: 'Yeezy Foam',
    sku: 'CW7645-003',
    formattedPrice: '1.389,00 €',
    reviewCount: 34,
    rating: 4,
  }
  return (
    <>
      <Head />
      <Container maxW="1200px" p={0}>
        <Grid
          mt="45px"
          position="absolute"
          maxW="1200px"
          minW="100%"
          templateColumns="repeat(2, 1fr)"
          p={2}
        >
          <GridItem colSpan={[2, 2, 2, 1]} minW="50%" px={[0, 0, 0, 4]} py={4}>
            <Breadcrumbs
              fontStyle="italic"
              fontWeight="normal"
              fontSize="13px"
            />
            <Heading fontSize="2xl" py={4}>
              <Text fontSize="sm" py={1}>
                {property.brand}
              </Text>
              {property.title}
              <Text fontSize="xs" fontWeight="thin" py={1}>
                {property.sku}
              </Text>
            </Heading>
            <Image p={4} src={property.imageUrl} alt={property.imageAlt} />
          </GridItem>
          <GridItem colSpan={[2, 2, 2, 1]} minW="50%" h="300px" bg="gray.100" />
          <GridItem colSpan={2} bg="tomato" p={4}>
            Footer
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
