import React from 'react'
import { Button, Stack } from '@chakra-ui/react'

const FilterStatusArea = () => {
  return (
    <>
      <Stack direction='row' spacing={2} align='center' marginRight={"20px"}>
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
          color={"#C05621"}
          border={"2px solid  #DD6B20"}
          size={'xs'}
          height={'16px'}
          borderRadius={"2px"}
          variant='outline'>
          PACKIGING
        </Button>
        <Button
          border={"2px solid  #38A169"}
          color={"#25855A"}
          variant='outline'
          size={'xs'}
          height={'16px'}
          borderRadius={"2px"}>
          DELIVERED
        </Button>
        <Button
          color={"#C53030"}
          border={"2px solid #E53E3E"}
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
