import { Accordion } from '@chakra-ui/accordion'
import { Flex } from '@chakra-ui/layout'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal'
import React from 'react'
import BrandFilter from './BrandFilter'
import ColorFilter from './ColorFilter'
import GenderFilter from './GenderFilter'
import SizeFilter from './SizeFilter'

export default function MobileFilterBar({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            p={3}
            as={Flex}
            justify="center"
            bg="blue.700"
            color="white"
            fontWeight="bold"
          >
            FILTER
          </DrawerHeader>

          <DrawerBody p={1}>
            <Accordion defaultIndex={[0, 1, 2, 3]} allowMultiple>
              <SizeFilter />
              <BrandFilter />
              <GenderFilter />
              <ColorFilter />
              {console.log('Render Filter')}
            </Accordion>
          </DrawerBody>

          <DrawerFooter p={0}>
            <Flex
              justify="center"
              p={4}
              w="100%"
              bg="orange"
              color="white"
              fontWeight="bold"
              cursor="pointer"
              onClick={onClose}
            >
              SCHLIESSEN
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
