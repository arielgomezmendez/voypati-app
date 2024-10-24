import React from 'react'
import { IconButton, Stack, } from '@chakra-ui/react'
import { BsList } from 'react-icons/bs'
import { GrLocationPin } from 'react-icons/gr'

const FilterViewArea = () => {
  return (
    <>
      <Stack spacing={"none"} direction='row' align="center">
        <IconButton
          icon={<BsList />}
          height={"40px"}
          borderLeftRadius={"16px"}
          borderRightRadius={"none"}
        />
        <IconButton
          height={"40px"}
          icon={<GrLocationPin />}
          borderLeftRadius={"none"}
          borderRightRadius={"16px"}
        />
      </Stack>
    </>
  )
}

export default FilterViewArea
