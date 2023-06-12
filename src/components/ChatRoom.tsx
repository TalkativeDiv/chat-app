import React, { useRef } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {
  collection,
  orderBy,
  query,
  limit,
  serverTimestamp,
  addDoc,
} from 'firebase/firestore';
import { Box, Input, Button, Flex, Center } from '@chakra-ui/react';
import Message from './ui/Message';
const ChatRoom = ({ auth, db }: any) => {
  const dummy = useRef<null | HTMLSpanElement>(null);
  const form = useRef<null | HTMLFormElement>(null);
  const msgRef = collection(db, 'messages');

  const [messages] = useCollectionData(
    query(msgRef, orderBy('createdAt'), limit(25))
  );

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(form?.current as any);
    const { uid, photoURL } = auth.currentUser;
    try {
      await addDoc(msgRef, {
        text: formData.get('msg'),
        createdAt: serverTimestamp(),
        uid: uid,
        photoURL: photoURL,
      });
    } catch (err) {
      console.error('writeToDB failed. reason :', err);
    }
    console.log('sent');
    dummy.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Flex flexDirection="column" width="100%" height="100%">
      <Box height="100%" mx={8} my={4}>
        {messages &&
          messages.map((msg, index) => (
            <Message key={index} msg={msg} auth={auth} />
          ))}
      </Box>

      <span ref={dummy}></span>

      <form
        onSubmit={onSubmit}
        ref={form}
        style={{ width: '100%', position: 'absolute', bottom: 0 }}
      >
        <Flex w="100%">
          <Center w="100%">
            <Input
              variant="filled"
              placeholder="Your message here"
              name="msg"
              w="100%"
              size="lg"
            />
            <Button type="submit" as="button" colorScheme="teal">
              Send
            </Button>
          </Center>
        </Flex>
      </form>
    </Flex>
  );
};

export default ChatRoom;
