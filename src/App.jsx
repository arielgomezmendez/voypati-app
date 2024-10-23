import './App.css'
import { Grid, GridItem } from '@chakra-ui/react'
import Header from './Components/Header/Header'

function App() {
  return (
    <>
      <Grid
        templateAreas={`"header header" "nav main"`}
        gridTemplateRows={'16% 1fr'}
        gridTemplateColumns={'1fr 4fr'}
        h='100vh'
        gap='0'
        color='blackAlpha.700'
      >
        <GridItem pl='2' bg='' area={'header'}>
          <Header/>
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'nav'}>
          Nav
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'}>
          Main
        </GridItem>
      </Grid>
    </>
  )
}

export default App
