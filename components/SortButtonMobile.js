import { Select } from '@chakra-ui/select'
import React from 'react'
import { RiArrowUpDownLine } from 'react-icons/ri'

export default function SortButtonMobile({ sort, setSort }) {
  return (
    <Select
      icon={<RiArrowUpDownLine />}
      defaultValue={sort}
      variant="filled"
      color="gray.500"
      borderRadius={0}
      fontWeight="500"
      bg="gray.100"
      w="50%"
      borderRadius="md"
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
