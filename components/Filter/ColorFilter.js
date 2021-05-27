import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Center, Wrap, WrapItem } from '@chakra-ui/layout'
import React from 'react'

export default function ColorFilter() {
  return (
    <AccordionItem border="none">
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              py={3}
              borderBottom={isExpanded ? 'none' : '1px'}
              borderColor="gray.100"
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
                Farbe
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={6}
            py={2}
            borderBottom="1px"
            borderColor="gray.100"
          >
            <Wrap pb={3} spacing={2} letterSpacing="tighter">
              <WrapItem>
                <Center
                  w="40px"
                  h="40px"
                  border="1px"
                  borderRadius="50%"
                  borderColor="gray.300"
                  bg="white"
                />
              </WrapItem>
              <WrapItem>
                <Center
                  w="40px"
                  h="40px"
                  border="1px"
                  borderRadius="50%"
                  borderColor="gray.300"
                  bg="black"
                />
              </WrapItem>
              <WrapItem>
                <Center
                  w="40px"
                  h="40px"
                  border="1px"
                  borderRadius="50%"
                  borderColor="gray.300"
                  bg="gray"
                />
              </WrapItem>
              <WrapItem>
                <Center
                  w="40px"
                  h="40px"
                  border="1px"
                  borderRadius="50%"
                  borderColor="gray.300"
                  bg="green"
                />
              </WrapItem>
              <WrapItem>
                <Center
                  w="40px"
                  h="40px"
                  border="1px"
                  borderRadius="50%"
                  borderColor="gray.300"
                  bg="orange"
                />
              </WrapItem>
              <WrapItem>
                <Center
                  w="40px"
                  h="40px"
                  border="1px"
                  borderRadius="50%"
                  borderColor="gray.300"
                  bg="yellow"
                />
              </WrapItem>
              <WrapItem>
                <Center
                  w="40px"
                  h="40px"
                  border="1px"
                  borderRadius="50%"
                  borderColor="gray.300"
                  bg="brown"
                />
              </WrapItem>
              <WrapItem>
                <Center
                  w="40px"
                  h="40px"
                  border="1px"
                  borderRadius="50%"
                  borderColor="gray.300"
                  bg="red"
                />
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}
