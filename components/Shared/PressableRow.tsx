import { Pressable, Box } from 'native-base';

type PressableRowProps = {
  onPress: () => void;
  bg: string;
  children: JSX.Element | JSX.Element[];
  rest: any;
};

export default function PressableRow(props: any) {
  const { onPress, bg, children, ...rest } = props;
  return (
    <Pressable onPress={onPress}>
      {({ isPressed }) => <Box bg={isPressed ? `${bg}.200` : `${bg}.100`} {...rest}>{children}</Box>}
    </Pressable>
  );
}
