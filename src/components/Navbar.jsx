import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcKey, FcSearch, FcMoneyTransfer } from 'react-icons/fc';


const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Students Rent</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Главная</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<FcSearch />}>Поиск</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcMoneyTransfer />}>Купить недвижимость</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FcKey />}>Арендовать недвижимость</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;