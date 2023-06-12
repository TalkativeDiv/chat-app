import React from 'react';
import auth from './lib/firebase/auth';
import db from './lib/firebase/db';
import app from './lib/firebase/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import ChatRoom from './components/ChatRoom';
import Header from './components/ui/Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Flex, Center, Button, Box } from '@chakra-ui/react';

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <Flex flexDirection="column" h="100vh">
      <Box >
        <Header user={user} auth={auth} />
        <Center justifyContent="center" alignItems="center">
          {user ? (
            <ChatRoom auth={auth} db={db} />
          ) : (
            <Button
              colorScheme="teal"
              onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
            >
              Sign in with Google
            </Button>
          )}
        </Center>
      </Box>
    </Flex>
  );
};

export default App;
