import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import FilterArea from './FilterArea/FilterArea'
import OrdersTable from './Orders/OrdersTable'

const Main = () => {
  return (
    <>
      <Grid
        templateAreas={`
          "filterArea filterArea"
          "nav main"
         `}
        gridTemplateRows={'100px 1fr '}
        gridTemplateColumns={'2fr 1fr'}
        h='86%'
        gap='6'
      >
        <GridItem pl='2'  area={'filterArea'} >
          <FilterArea/>
        </GridItem>
        <GridItem pl='0' bg='#FFFF' area={'nav'} borderRadius={"20px"} marginLeft={"40px"}>
          <OrdersTable/>
        </GridItem>
        <GridItem pl='2' bg='#FFFF' area={'main'} borderRadius={"20px"} marginRight={"60px"}>
          Assignments
        </GridItem>
      </Grid>
    </>
  )
}

export default Main
