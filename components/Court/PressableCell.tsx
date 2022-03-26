import { Box, Pressable, Flex } from 'native-base'

export default function PressableCell({ onPress, element, disabled, ...rest }: any) {
  return (
    <Box {...rest}>
      <Pressable onPress={onPress} disabled={disabled}>
        <Flex height="full" justify="center" align="center">{element}</Flex>
      </Pressable>
    </Box>
  );
}