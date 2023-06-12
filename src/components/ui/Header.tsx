import React from 'react';
import { Flex, Spacer, Box, Button } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { SunIcon, MoonIcon, Icon } from '@chakra-ui/icons';
import { AiFillGithub } from 'react-icons/ai';
interface Props {
  user: any;
  auth: any;
}
const Header = ({ user, auth }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      w="100%"
      py={4}
      px={6}
      borderBottom="1px"
      borderColor={`gray.${colorMode == 'light' ? '300' : '700'}`}
    >
      <Flex justifyContent="center" alignItems="center" fontWeight="semibold">
        Chat App
      </Flex>
      <Spacer />
      <Flex gap={4}>
        <IconButton
          aria-label="Github"
          ml={8}
          icon={<Icon as={AiFillGithub} />}
          onClick={() =>
            window.open('https://github.com/TalkativeDiv/chat-app')
          }
        ></IconButton>
        <IconButton
          aria-label="Toggle Theme"
          ml={8}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        ></IconButton>

        {user && (
          <Button colorScheme="teal" onClick={() => auth.signOut()}>
            Sign Out
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
