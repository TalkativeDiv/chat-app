import { Image, Flex } from '@chakra-ui/react';

const Message = ({ msg, auth }: any) => {
  const { text, uid } = msg;
  const flexDir = uid === auth.currentUser.uid ? 'row-reverse' : 'row';
  const bg = uid === auth.currentUser.uid ? 'teal' : 'gray.500';
  return (
    <Flex flexDirection={flexDir}>
      <Image
        borderRadius="full"
        boxSize="50px"
        src={`https://api.dicebear.com/6.x/big-smile/svg?seed=${uid}&flip=${
          uid === auth.currentUser.uid
        }`}
        alt="Avatar"
      />
      <Flex
        bg={bg}
        alignItems="center"
        justifyContent="center"
        px={8}
        h="56px"
        rounded={10}
      >
        {text}
      </Flex>
    </Flex>
  );
};
export default Message