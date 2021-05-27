import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Center, Wrap, WrapItem } from '@chakra-ui/layout'
import React from 'react'

export default function SizeFilter() {
  return (
    <AccordionItem border="none">
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              py={3}
              borderBottom={isExpanded ? 'none' : '1px'}
              borderColor={{ base: 'gray.100', lg: 'transparent' }}
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
                Größe
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
            borderColor={{ base: 'gray.100', lg: 'transparent' }}
          >
            <Wrap pb={3} spacing={{ base: 0.5, lg: 1 }} letterSpacing="tighter">
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  42
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  42 ⅓
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  43
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  43 ⅔
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  42
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  42.5
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  43
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  43.5
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  42
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  42 ⅔
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  43
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  43 ⅓
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  42
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  42.5
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  43
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  43.5
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  42
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  42.5
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  43
                </Center>
              </WrapItem>
              <WrapItem>
                <Center
                  w="44px"
                  p={1}
                  border="1px"
                  borderColor="gray.300"
                  color="gray.600"
                  fontWeight="600"
                  fontSize="13px"
                  cursor="pointer"
                  _hover={{
                    bg: 'blue.700',
                    color: 'white',
                  }}
                >
                  43.5
                </Center>
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}
