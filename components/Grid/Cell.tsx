import { Pressable } from 'native-base';

type CellProps = {
  gridIndex: number;
  ratio?: number;
  interactive?: boolean;
  isSelected?: boolean;
  handler: any
};

function Cell({ gridIndex, ratio = 1, interactive = true, isSelected, handler }: CellProps) {
  return (
    <Pressable
      borderWidth={1}
      bg={isSelected ? 'red.500' : `yellow.500:alpha.${ratio}`}
      size={16}
      isDisabled={!interactive}
      flex={1}
      onPress={() => handler(gridIndex)}
    />
  );
}

export default Cell;
