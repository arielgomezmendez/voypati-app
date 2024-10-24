import React from 'react'
import { Button, Stack } from '@chakra-ui/react'

const FilterStatusArea = () => {
  return (
    <>
      <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='solid'>
          ALL STATUS
        </Button>
        <Button colorScheme='teal' variant='outline'>
          TRANSPORTING
        </Button>
        <Button colorScheme='teal' variant='ghost'>
          PACKIGING
        </Button>
        <Button colorScheme='teal' variant='link'>
          DELIVERED
        </Button>
        <Button colorScheme='teal' variant='link'>
          CANCELED
        </Button>
      </Stack>
    </>
  )
}

export default FilterStatusArea
