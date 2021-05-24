import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion'
import { Checkbox } from '@chakra-ui/checkbox'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Stack } from '@chakra-ui/layout'
import React from 'react'

export default function GenderFilter() {
  return (
    <AccordionItem border="none">
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              _focus={{ outline: 'none' }}
              _hover={{ bg: 'white' }}
            >
              <Box
                flex="1"
                textAlign="left"
                fontWeight="900"
                fontSize="xl"
                color="gray.700"
              >
                Gender
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
                size="lg"
                fontWeight="600"
                colorScheme="blue"
                color="gray.600"
              >
                Frauen
              </Checkbox>
              <Checkbox
                size="lg"
                fontWeight="600"
                colorScheme="blue"
                color="gray.600"
              >
                Männer
              </Checkbox>
              <Checkbox
                size="lg"
                fontWeight="600"
                colorScheme="blue"
                color="gray.600"
              >
                Kinder
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}
