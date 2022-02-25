import { Button } from 'native-base';

type ButtonGroupProps = {
  elements: string[],
  colorScheme?: string,
  handleClick: any,
  value: number
};

export default function MyButtonGroup({ value, elements, colorScheme, handleClick }: ButtonGroupProps) {
  return (
    <Button.Group isAttached colorScheme={colorScheme}>
      {elements.map((element, index) => (
        <Button
          variant={index === value ? 'solid' : 'outline'}
          onPress={() => handleClick(index)}
          key={index}
        >
          {element}
        </Button>
      ))}
    </Button.Group>
  );
}
