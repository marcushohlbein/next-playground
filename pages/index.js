import { useDisclosure } from '@chakra-ui/hooks'
import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spacer,
} from '@chakra-ui/layout'

import { useBreakpointValue } from '@chakra-ui/media-query'
import { useState } from 'react'

import DesktopFilter from '../components/Filter/DesktopFilterBar'
import MobileFilterBar from '../components/Filter/MobileFilterBar'
import Head from '../components/Head'
import ItemCount from '../components/ItemCount'
import ProductCard from '../components/ProductCard'
import SortButton from '../components/SortButton'
import Breadcrumbs from '../components/Breadcrumbs'
import FilterButton from '../components/FilterButton'
import SortButtonMobile from '../components/SortButtonMobile'

import products from '../public/assets/products.json'

export default function Home() {
  const [sort, setSort] = useState('Relevanz')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [defaultIndex] = useState([0, 1, 2, 3])

  const FilterBarSwitcher = useBreakpointValue({
    base: <MobileFilterBar isOpen={isOpen} onClose={onClose} />,
    lg: <DesktopFilter dfi={defaultIndex} />,
  })
  
  const FilterButtonSwitcher = useBreakpointValue({
    base: <FilterButton onOpen={onOpen} />,
    lg: <ItemCount count="1.234" />,
  })

  const SortButtonSwitcher = useBreakpointValue({
    base: <SortButtonMobile sort={sort} setSort={setSort} />,
    lg: <SortButton sort={sort} setSort={setSort} />,
  })

  return (
    <>
      <Head />
      <Container maxW="1200px" p={0}>
        <Grid
          mt="60px"
          position="absolute"
          maxW="1200px"
          templateColumns={{
            base: 'repeat(4, 1fr)',
            lg: '220px repeat(4, 1fr)',
          }}
          gap={4}
          p={2}
        >
          <GridItem
            colSpan={6}
            px={[0, 0, 0, 4]}
            py={1}
            fontStyle="italic"
            fontWeight="normal"
            fontSize="13px"
            display={{ base: 'none', lg: 'block' }}
          >
            <Breadcrumbs />
          </GridItem>

          {FilterBarSwitcher}

          <GridItem
            as={Flex}
            colSpan={[6, 6, 6, 5]}
            alignItems="baseline"
            py={1}
          >
            <Heading
              py={[0, 0, 0, 2]}
              fontWeight="900"
              fontSize="xl"
              color="gray.700"
              mr={2}
            >
              Sneaker
            </Heading>
            <ItemCount
              display={{ base: 'block', lg: 'none' }}
              fontWeight="500"
              count="1.234"
            />
          </GridItem>
          <GridItem
            as={Flex}
            colSpan={[6, 6, 6, 5]}
            justify="space-between"
            alignItems="center"
            borderBottom={{ base: 'none', lg: '1px' }}
            borderColor={{ lg: 'gray.200' }}
          >
            {FilterButtonSwitcher}
            <Spacer />
            {SortButtonSwitcher}
          </GridItem>
          <GridItem colSpan={[6, 6, 6, 5]}>
            <SimpleGrid columns={[2, 2, 3, 4]} spacingX="15px" spacingY="15px">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </SimpleGrid>
          </GridItem>
          <GridItem colSpan={6} bg="tomato" p={4} />
        </Grid>
      </Container>
    </>
  )
}