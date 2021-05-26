import { Select } from '@chakra-ui/select'
import React from 'react'

export default function SortButtonMobile({ setSort }) {
  return (
    <Select
      variant="filled"
      placeholder="Sortieren nach"
      color="gray.500"
      borderRadius={0}
      fontWeight="600"
      bg="gray.200"
      w="50%"
      onChange={e => setSort(e.target.value)}
      _focus={{ outline: 'none' }}
    >
      <option value="Relevanz">Relevanz</option>
      <option value="Neuheiten">Neuheiten</option>
      <option value="Beliebteste">Beliebteste</option>
      <option value="Niedrigster Preis">Niedrigster Preis</option>
    </Select>
  )
}
