import { VStack, Avatar, Text } from 'native-base';
import { PlayerProps } from '../../types';
import { FALLBACK_IMG_URL } from '../../utils';

export default function Player(props: PlayerProps) {
  const { name, school, avatar } = props;
  return (
    <VStack alignItems="center">
      <Avatar
        size="xl"
        source={{
          uri: avatar || FALLBACK_IMG_URL,
        }}
      />
      <Text fontSize="2xl">{name}</Text>
      <Text fontWeight="light">{school}</Text>
    </VStack>
  );
}
