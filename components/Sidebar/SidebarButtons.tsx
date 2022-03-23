import { VStack, Button } from 'native-base';
import { Controller } from 'react-hook-form';
import { SidebarButtonsProps } from '../../types';
import ButtonGroup from './ButtonGroup';

export default function SidebarButtons({ control, onSubmit }: SidebarButtonsProps) {
  const offenseElements = ['Hit', 'Shot'];
  const defenseElements = ['Block', 'Pull'];

  return (
    <VStack alignItems="center" justifyContent="space-evenly">
      <Controller
        control={control}
        render={({ field }) => (
          <ButtonGroup elements={offenseElements} {...field} />
        )}
        name="offenseType"
      />
      <Controller
        control={control}
        render={({ field }) => (
          <ButtonGroup elements={defenseElements} {...field} />
        )}
        name="defenseType"
      />
      <Button onPress={onSubmit}>Submit</Button>
    </VStack>
  );
}
