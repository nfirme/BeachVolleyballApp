import { HStack } from 'native-base'
import PressableCell from './PressableCell';

export default function ApproachInput(props: any) {
  const { net, value, elements, onChange, bg, viewMode,  ...rest } = props;

  return (
    <HStack {...rest}>
      {elements.map((element: string, index: number) => (
        <PressableCell
          flex={1}
          borderWidth={1}
          bg={!viewMode && value === element ? `${bg}.300` : `${bg}.200`}
          disabled={viewMode}
          key={index}
          element={element}
          onPress={() => onChange(element)}
        >
        </PressableCell>
      ))}
    </HStack>
  );
}