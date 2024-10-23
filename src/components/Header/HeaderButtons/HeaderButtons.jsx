import React from 'react'
import { Avatar, IconButton } from '@chakra-ui/react'
import { CheckIcon, SettingsIcon } from '@chakra-ui/icons'
import "./style.css"


const HeaderButtons = () => {
  return (
    <div className='headerButtons'>
      <IconButton
        className='headerButton'
        isRound={true}
        variant='solid'
        aria-label='Done'
        fontSize='16px'
        size="sm"
        icon={<CheckIcon />}
      />
      <IconButton
        className='headerButton'
        isRound={true}
        variant='solid'
        aria-label='Done'
        fontSize='16px'
        size="sm"
        icon={<SettingsIcon />}
      />
      <IconButton
        className='headerButton'
        isRound={true}
        variant='solid'
        aria-label='Done'
        size="sm"
        icon={<Avatar size='xs' />}
      />

    </div>
  )
}

export default HeaderButtons
