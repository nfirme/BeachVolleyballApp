import { Box, Pressable, Center } from 'native-base';

export default function PressableCell({
  onPress,
  element,
  disabled,
  ...rest
}: any) {
  return (
    <Box flex={1} borderWidth={1} {...rest}>
      <Pressable onPress={onPress} disabled={disabled}>
        <Center height="full">{element}</Center>
      </Pressable>
    </Box>
  );
}
