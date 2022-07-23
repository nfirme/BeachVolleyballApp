import { forwardRef } from 'react';
import { HStack } from 'native-base';
import PressableCell from './PressableCell';

type ApproachInputProps = {
  value?: string;
  elements: string[];
  onChange?: (element: string) => void;
  bg: string;
};

const ApproachInput = forwardRef((props: ApproachInputProps, ref) => {
  const { value, elements, onChange, bg, ...rest } = props;

  return (
    <HStack {...rest}>
      {elements.map((element: string, index: number) => (
        <PressableCell
          disabled={!(value && onChange)}
          bg={value === element ? `${bg}.300` : `${bg}.200`}
          key={index}
          element={element}
          onPress={onChange ? () => onChange(element) : undefined}
        />
      ))}
    </HStack>
  );
});

export default ApproachInput;
