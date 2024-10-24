import React from 'react'
import { Button, Stack } from '@chakra-ui/react'

const FilterStatusArea = () => {
  return (
    <>
      <Stack direction='row' spacing={4} align='center'>
        <Button
          colorScheme='#FFFF'
          variant='solid'
          size={'xs'}
          height={'16px'}
          borderRadius={"2px"}
          background={"#718096"}>
          ALL STATUS
        </Button>
        <Button
          color={"#2B6CB0"}
          border={"2px solid  #3182CE"}
          size={'xs'}
          height={'16px'}
          borderRadius={"2px"}
          variant='outline'>
          TRANSPORTING
        </Button>
        <Button
          colorScheme='teal'
          size={'xs'}
          height={'16px'}
          borderRadius={"2px"}
          variant='outline'>
          PACKIGING
        </Button>
        <Button
          colorScheme='teal'
          variant='outline'
          size={'xs'}
          height={'16px'}
          borderRadius={"2px"}>
          DELIVERED
        </Button>
        <Button
          colorScheme='teal'
          size={'xs'}
          height={'16px'}
          borderRadius={"2px"}
          variant='outline'>
          CANCELED
        </Button>
      </Stack>
    </>
  )
}

export default FilterStatusArea
