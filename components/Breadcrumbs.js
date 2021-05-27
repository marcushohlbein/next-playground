import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'

export default function Breadcrumbs({ ...rest }) {
  return (
    <>
      <Breadcrumb
        spacing={1}
        separator={<ChevronRightIcon color="gray.500" />}
        color="gray.500"
        {...rest}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}
