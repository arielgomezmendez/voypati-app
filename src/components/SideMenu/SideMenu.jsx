import React from 'react'
import './style.css'
import { Button, Container, ListItem, Menu, MenuButton, MenuItem, MenuList, Stack, UnorderedList } from '@chakra-ui/react'
import { RxDashboard } from "react-icons/rx";
import { FaRegFileLines } from 'react-icons/fa6';
import { FiGift, FiImage } from 'react-icons/fi';
import { IoGameControllerOutline } from 'react-icons/io5';
import { TbBook } from 'react-icons/tb';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsCardList } from 'react-icons/bs';
import { RiTruckLine } from 'react-icons/ri';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const SideMenu = () => {
  return (
    <div className='sideMenu'>
      <Stack direction='column' spacing={2} justifyContent={"start"} ml={"20px"} mb={"20px"}>
        <Button
          display={"flex"}
          justifyContent={"start"}
          leftIcon={<RxDashboard size={"24px"} />}
          borderRadius={"14px"}
          variant='ghost'
          color={" #A0AEC0"}
          width={"80%"}
          iconSpacing={"4"}
          _hover={{ bg: ' #FFF9EC', color: ' #FF7500' }}
          _active={{ bg: ' #FFF9EC', color: ' #FF7500' }}>
          Dashboard
        </Button>
        <Button
          display={"flex"}
          justifyContent={"start"}
          leftIcon={<FaRegFileLines size={"24px"} />}
          borderRadius={"14px"}
          colorScheme='teal'
          variant='ghost'
          color={" #A0AEC0"}
          width={"80%"}
          iconSpacing={"4"}
          _hover={{ bg: ' #FFF9EC', color: ' #FF7500' }}
          _active={{ bg: ' #FFF9EC', color: ' #FF7500' }}>
          Orders
        </Button>
        <Button
          display={"flex"}
          justifyContent={"start"}
          leftIcon={<FiImage size={"24px"} />}
          borderRadius={"14px"}
          colorScheme='teal'
          variant='ghost'
          color={" #A0AEC0"}
          width={"80%"}
          iconSpacing={"4"}
          _hover={{ bg: ' #FFF9EC', color: ' #FF7500' }}
          _active={{ bg: ' #FFF9EC', color: ' #FF7500' }}>
          Banners
        </Button>
        <Button
          display={"flex"}
          justifyContent={"start"}
          leftIcon={<TbBook size={"24px"} />}
          borderRadius={"14px"}
          colorScheme='teal'
          variant='ghost'
          color={" #A0AEC0"}
          width={"80%"}
          iconSpacing={"4"}
          _hover={{ bg: ' #FFF9EC', color: ' #FF7500' }}
          _active={{ bg: ' #FFF9EC', color: ' #FF7500' }}>
          Public Info
        </Button>
        <Button
          display={"flex"}
          justifyContent={"start"}
          leftIcon={<IoMdNotificationsOutline size={"24px"} />}
          borderRadius={"14px"}
          colorScheme='teal'
          variant='ghost'
          color={" #A0AEC0"}
          width={"80%"}
          iconSpacing={"4"}
          _hover={{ bg: ' #FFF9EC', color: ' #FF7500' }}
          _active={{ bg: ' #FFF9EC', color: ' #FF7500' }}>
          Notifications
        </Button>
        <Button
          display={"flex"}
          justifyContent={"start"}
          leftIcon={<IoGameControllerOutline size={"24px"} />}
          borderRadius={"14px"}
          colorScheme='teal'
          variant='ghost'
          color={" #A0AEC0"}
          width={"80%"}
          iconSpacing={"4"}
          _hover={{ bg: ' #FFF9EC', color: ' #FF7500' }}
          _active={{ bg: ' #FFF9EC', color: ' #FF7500' }}>
          Roulette Game
        </Button>
        <Button
          display={"flex"}
          justifyContent={"start"}
          leftIcon={<BsCardList size={"24px"} />}
          borderRadius={"14px"}
          colorScheme='teal'
          variant='ghost'
          color={" #A0AEC0"}
          width={"80%"}
          iconSpacing={"4"}
          _hover={{ bg: ' #FFF9EC', color: ' #FF7500' }}
          _active={{ bg: ' #FFF9EC', color: ' #FF7500' }}>
          Inventaries
        </Button>
        <Button
          display={"flex"}
          justifyContent={"start"}
          leftIcon={<FiGift size={"24px"} />}
          borderRadius={"14px"}
          colorScheme='teal'
          variant='ghost'
          color={" #A0AEC0"}
          width={"80%"}
          iconSpacing={"4"}
          _hover={{ bg: ' #FFF9EC', color: ' #FF7500' }}
          _active={{ bg: ' #FFF9EC', color: ' #FF7500' }}>
          Coupons
        </Button>
        <Button
          display={"flex"}
          justifyContent={"start"}
          leftIcon={<RiTruckLine size={"24px"} />}
          borderRadius={"14px"}
          colorScheme='teal'
          variant='ghost'
          color={" #A0AEC0"}
          width={"80%"}
          iconSpacing={"4"}
          _hover={{ bg: ' #FFF9EC', color: ' #FF7500' }}
          _active={{ bg: ' #FFF9EC', color: ' #FF7500' }}>
          Shippings
        </Button>
      </Stack>

      <div className='nomenclatorsMenues'>
        <span className='nomenclatorsTitle'>Nomenclators</span>
        <Menu >
          <MenuButton
            as={Button}
            width={"80%"}
            paddingRight={16}
            leftIcon={<ChevronRightIcon />}
            _hover={{ bg: ' #FFF9EC', color: ' #FF7500' }}
            _active={{ bg: ' #FFF9EC', color: ' #FF7500' }}
            variant={'ghost'}
            color="#A0AEC0">
            Clients
          </MenuButton>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            width={"80%"}
            paddingRight={16}
            leftIcon={<ChevronRightIcon />}
            _hover={{ bg: ' #FFF9EC', color: ' #FF7500' }}
            _active={{ bg: ' #FFF9EC', color: ' #FF7500' }}
            variant={'ghost'}
            color="#A0AEC0">
            Users
          </MenuButton>
        </Menu>
        <Menu >
          <MenuButton
            width={"80%"}
            paddingRight={10}
            as={Button}
            leftIcon={<ChevronRightIcon />}
            _hover={{ bg: ' #FFF9EC', color: ' #FF7500' }}
            _active={{ bg: ' #FFF9EC', color: ' #FF7500' }}
            variant={'ghost'}
            color="#A0AEC0">
            Categories
          </MenuButton>
        </Menu>
      </div>

    </div>
  )
}

export default SideMenu


