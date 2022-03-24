import { Button, Box } from 'native-base';
import { forwardRef } from 'react';
import { ButtonGroupProps } from '../../types';

const ButtonGroup = forwardRef((props: ButtonGroupProps, ref) => {
  const { value, elements, colorScheme, onChange } = props;
  return (
    <Box ref={ref}>
      <Button.Group isAttached colorScheme={colorScheme}>
        {elements.map((element, index) => (
          <Button
            py={4}
            px={4}
            variant={value === element ? 'solid' : 'outline'}
            key={index}
            onPress={() => onChange(element)}
          >
            {element}
          </Button>
        ))}
      </Button.Group>
    </Box>
  );
});

export default ButtonGroup;
