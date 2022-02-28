import { Button } from 'native-base';

type ButtonGroupProps = {
  value: string;
  onChange: (value: any) => void;
  colorScheme?: string;
  elements: string[];
};

export default function ButtonGroup({
  value,
  onChange,
  elements,
  colorScheme,
}: ButtonGroupProps) {
  return (
    <Button.Group isAttached colorScheme={colorScheme}>
      {elements.map((element, index) => (
        <Button
          variant={value === element ? 'solid' : 'outline'}
          key={index}
          onPress={() => onChange(element)}
        >
          {element}
        </Button>
      ))}
    </Button.Group>
  );
}
