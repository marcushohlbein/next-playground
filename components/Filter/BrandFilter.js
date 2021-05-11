import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion'
import { Checkbox } from '@chakra-ui/checkbox'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Stack } from '@chakra-ui/layout'
import React from 'react'

export default function BrandFilter() {
  return (
    <AccordionItem border="none">
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton _focus={{ outline: 'none' }}>
              <Box
                flex="1"
                textAlign="left"
                fontWeight="900"
                fontSize="xl"
                color="gray.700"
              >
                Brand
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={6}>
            <Stack spacing={1} justify="flex-start">
              <Checkbox
                size="md"
                fontWeight="600"
                colorScheme="blue"
                color="gray.600"
              >
                Nike
              </Checkbox>
              <Checkbox
                size="md"
                fontWeight="600"
                colorScheme="blue"
                color="gray.600"
              >
                Adidas
              </Checkbox>
              <Checkbox
                size="md"
                fontWeight="600"
                colorScheme="blue"
                color="gray.600"
              >
                Puma
              </Checkbox>
              <Checkbox
                size="md"
                fontWeight="600"
                colorScheme="blue"
                color="gray.600"
              >
                Reebok
              </Checkbox>
              <Checkbox
                size="md"
                fontWeight="600"
                colorScheme="blue"
                color="gray.600"
              >
                New Balance
              </Checkbox>
              <Checkbox
                size="md"
                fontWeight="600"
                colorScheme="blue"
                color="gray.600"
              >
                Vans
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}
