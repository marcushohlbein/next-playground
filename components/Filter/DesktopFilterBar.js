import { Accordion } from '@chakra-ui/accordion'
import { GridItem } from '@chakra-ui/layout'
import React from 'react'
import BrandFilter from './BrandFilter'
import ColorFilter from './ColorFilter'
import GenderFilter from './GenderFilter'
import SizeFilter from './SizeFilter'

export default function DesktopFilterBar({ dfi }) {
  return (
    <GridItem
      as="aside"
      display={{ base: 'none', lg: 'block' }}
      rowSpan={3}
      colSpan={1}
    >
      <Accordion defaultIndex={dfi} allowMultiple reduceMotion="true">
        <SizeFilter />
        <BrandFilter />
        <GenderFilter />
        <ColorFilter />
      </Accordion>
    </GridItem>
  )
}
