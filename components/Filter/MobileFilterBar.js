import { Accordion } from '@chakra-ui/accordion'
import { Flex } from '@chakra-ui/layout'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
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

export default function MobileFilterBar({ dfi, isOpen, onClose }) {
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            color="white"
            my={1}
            _focus={{ outline: 'none' }}
            _hover={{ bg: 'blue.700' }}
          />
          <DrawerHeader
            as={Flex}
            h="55px"
            py={3}
            justify="center"
            bg="blue.700"
            color="white"
            fontWeight="bold"
          >
            FILTER
          </DrawerHeader>

          <DrawerBody p={1}>
            <Accordion allowMultiple reduceMotion="true">
              <SizeFilter />
              <BrandFilter />
              <GenderFilter />
              <ColorFilter />
            </Accordion>
          </DrawerBody>

          <DrawerFooter p={0}>
            <Flex
              justify="center"
              p={4}
              w="100%"
              bg="red.500"
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
