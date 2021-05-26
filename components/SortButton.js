import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/layout'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import React from 'react'

export default function SortButton({ sort, setSort }) {
  return (
    <>
      <Box
        float="right"
        color="gray.500"
        mr={4}
        display={{ base: 'none', md: 'block' }}
        py={1}
      >
        Sortieren nach:
      </Box>
      <Menu closeOnSelect={true} isLazy={true} placement="bottom-end">
        {({ isOpen }) => (
          <>
            <MenuButton
              color="gray.500"
              fontWeight="600"
              w="150px"
              textAlign="right"
            >
              {sort} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList minWidth="150px" boxShadow="lg" borderRadius={0} mt={-1}>
              <MenuItem
                value="rel"
                onClick={e => setSort(e.target.textContent)}
              >
                Relevanz
              </MenuItem>
              <MenuItem
                value="latest"
                onClick={e => setSort(e.target.textContent)}
              >
                Neuheiten
              </MenuItem>
              <MenuItem
                value="popular"
                onClick={e => setSort(e.target.textContent)}
              >
                Beliebteste
              </MenuItem>
              <MenuItem
                value="priceAsc"
                onClick={e => setSort(e.target.textContent)}
              >
                Niedrigster Preis
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </>
  )
}
