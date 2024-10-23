import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons'
import HeaderButtons from './HeaderButtons/HeaderButtons'
import "./style.css"
import Logo from '../../assets/Logo.svg'


const Header = () => {

  return (
    <div className='header'>
      <div className='leftItem'>
      <img src={Logo} alt="Logo de la empresa" className='logo'/>
        <Breadcrumb spacing='2px' mt="14px" ml="58px"  separator={<ChevronRightIcon color='gray.500' />}>
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Order</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Orders</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className='rightItem'> 
        <InputGroup size='sm' width="38%" >
          <Input placeholder='Find Client' borderRadius= "10rem" size="sm"/>
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
        <HeaderButtons />
      </div>

    </div>
  )
}

export default Header
