import React from 'react'
import { Avatar, IconButton } from '@chakra-ui/react'
import { CheckIcon, SettingsIcon } from '@chakra-ui/icons'
import "./style.css"
import Settings from '../../../assets/Settings'
import Language from '../../../assets/Language'


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
        icon={<Language />}
      />
      <IconButton
        className='headerButton'
        isRound={true}
        variant='solid'
        aria-label='Done'
        fontSize='16px'
        size="sm"
        icon={<Settings />}
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
