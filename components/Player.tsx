import { VStack, Avatar, Text } from "native-base";

export default function Player() {
  return (
    <VStack alignItems="center">
      <Avatar
        size="xl"
        source={{
          uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
      />
      <Text fontSize="2xl">Aafreen Khan</Text>
      <Text fontWeight="light">CAL POLY SLO</Text>
    </VStack>
  );
}