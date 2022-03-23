import { HStack } from 'native-base'
import PressableCell from './PressableCell';

export default function ApproachInput() {

  const handlePress = () => console.log('pressing cell')

  return (
    <HStack flex={1} borderWidth={1} width="full" height="full" bg="purple.300">
      <PressableCell flex={1} borderWidth={1} onPress={handlePress} />
      <PressableCell flex={1} borderWidth={1} onPress={handlePress} />
      <PressableCell flex={1} borderWidth={1} onPress={handlePress} />
    </HStack>
  );
}