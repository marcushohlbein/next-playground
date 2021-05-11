import { Button } from '@chakra-ui/button'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/layout'
import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/menu'
import React from 'react'

export default function SortButton({ sort, setSort }) {
  return (
    <>
      <Box
        float="right"
        color="gray.500"
        mr={4}
        display={{ base: 'none', md: 'block' }}
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
            <MenuList minWidth="200px" boxShadow="lg" borderRadius={0} mt={-1}>
              <MenuOptionGroup defaultValue="rel" type="radio">
                <MenuItemOption
                  value="rel"
                  onClick={e => setSort(e.target.textContent)}
                >
                  Relevanz
                </MenuItemOption>
                <MenuItemOption
                  value="latest"
                  onClick={e => setSort(e.target.textContent)}
                >
                  Neuheiten
                </MenuItemOption>
                <MenuItemOption
                  value="popular"
                  onClick={e => setSort(e.target.textContent)}
                >
                  Beliebteste
                </MenuItemOption>
                <MenuItemOption
                  value="priceAsc"
                  onClick={e => setSort(e.target.textContent)}
                >
                  Niedrigster Preis
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </>
        )}
      </Menu>
    </>
  )
}
