import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import FilterArea from './FilterArea/FilterArea'

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
        gap='8'
      >
        <GridItem pl='2'  area={'filterArea'} >
          <FilterArea/>
        </GridItem>
        <GridItem pl='2' bg='#FFFF' area={'nav'} borderRadius={"20px"} marginLeft={"58px"}>
          Orders
        </GridItem>
        <GridItem pl='2' bg='#FFFF' area={'main'} borderRadius={"20px"} marginRight={"60px"}>
          Assignments
        </GridItem>
      </Grid>
    </>
  )
}

export default Main
