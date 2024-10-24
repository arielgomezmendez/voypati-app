import './App.css'
import { Grid, GridItem } from '@chakra-ui/react'
import Header from './Components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu'
import Main from './components/Main/Main'

function App() {
  return (
    <>
      <Grid
        templateAreas={`"header header" "nav main"`}
        gridTemplateRows={'16% 1fr'}
        gridTemplateColumns={'1fr 5fr'}
        h='100vh'
        gap='0'
      >
        <GridItem pl='1' bg='' area={'header'}>
          <Header/>
        </GridItem>
        <GridItem pl='1' area={'nav'} >
          <SideMenu/>
        </GridItem>
        <GridItem pl='1' bg=' #F9FAFB' area={'main'} borderTopLeftRadius={"50px"}>
          <Main/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
