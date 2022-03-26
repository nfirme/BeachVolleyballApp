import { Circle } from 'native-base'

type PointProps = {
  x: number;
  y: number;
};

export default function Point({ x, y }: PointProps) {
  return (
    <Circle
      left={x}
      top={y}
      size={8}
      bg="red.500"
      opacity={0.7}
      borderWidth={1}
      style={{ position: 'absolute' }}
    />
  );
}
