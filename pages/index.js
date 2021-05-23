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
import Header from '../components/Header'
import ItemCount from '../components/ItemCount'
import ProductCard from '../components/ProductCard'
import SortButton from '../components/SortButton'
import Breadcrumbs from '../components/Breadcrumbs'

export default function Home() {
  const [sort, setSort] = useState('Relevanz')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [defaultIndex] = useState([0, 1, 2, 3])
  const FilterBarSwitcher = useBreakpointValue({
    base: (
      <MobileFilterBar dfi={defaultIndex} isOpen={isOpen} onClose={onClose} />
    ),
    lg: <DesktopFilter dfi={defaultIndex} />,
  })

  return (
    <Container maxW="1200px" p={0}>
      <Header />
      <Grid
        h="auto"
        mt="60px"
        position="absolute"
        maxW="1200px"
        templateRows="repeat(4, 100%)"
        templateColumns={{ base: 'repeat(4, 1fr)', md: '220px repeat(4, 1fr)' }}
        gap={4}
        p={2}
      >
        <GridItem
          colSpan={6}
          px={[1, 1, 1, 4]}
          py={1}
          fontStyle="italic"
          fontWeight="normal"
          fontSize="13px"
        >
          <Breadcrumbs />
        </GridItem>

        {FilterBarSwitcher}

        <GridItem colSpan={[6, 6, 6, 5]} py={1}>
          <Heading py={2} fontWeight="900" fontSize="xl" color="gray.700">
            Sneaker
          </Heading>
        </GridItem>
        <GridItem
          as={Flex}
          colSpan={[6, 6, 6, 5]}
          py={1}
          justify="space-between"
          borderBottom="1px"
          borderColor="gray.200"
        >
          <ItemCount count="1.234" onOpen={onOpen} />
          <Spacer />
          <SortButton sort={sort} setSort={setSort} />
        </GridItem>
        <GridItem colSpan={[6, 6, 6, 5]}>
          <SimpleGrid columns={[2, 2, 3, 4]} spacingX="15px" spacingY="15px">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={6} bg="tomato" p={4} />
      </Grid>
    </Container>
  )
}
