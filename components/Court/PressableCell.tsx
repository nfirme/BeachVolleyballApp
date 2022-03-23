import { Box, Pressable } from 'native-base'

export default function PressableCell({ onPress, element, ...rest }: any) {
  return (
    <Box {...rest}>
      <Pressable onPress={onPress}>
        <Box>{element}</Box>
      </Pressable>
    </Box>
  );
}