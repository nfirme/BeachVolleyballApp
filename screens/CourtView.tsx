import { Flex, Box, Center } from 'native-base';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDeviceOrientation } from '@react-native-community/hooks';

import { FormData } from '../types';
import { CourtViewProps } from '../types/navigation';

import { Sidebar } from '../components/Sidebar';
import Teammates from '../components/Court/Teammates';
import ApproachInput from '../components/Court/ApproachInput';
import Touchspace from '../components/Court/Touchspace';
import CourtLayout from '../components/Court/CourtLayout';
import { Controller } from 'react-hook-form';

export default function CourtView({ route, navigation }: CourtViewProps) {
  const { landscape } = useDeviceOrientation();

  const [player, setPlayer] = useState(null);
  const { handleSubmit, control, resetField } = useForm<FormData>({
    defaultValues: {
      offenseType: 'Hit',
      defenseType: 'Block',
      blockLocation: 'Left',
      approachLocation: 'Left',
      hitLocation: { x: 0, y: 0 },
    },
  });

  useEffect(() => {
    const { playerId } = route.params || '1';
  }, []);

  const styleProps = {
    height: landscape ? '87%' : '70%',
  };

  const netElements = ['Left', 'Center', 'Right'];
  const appElements = ['Left', 'Right'];

  const netStyleProps = {
    width: landscape ? '80%' : '100%',
    flex: landscape ? 4 : undefined,
    height: landscape ? undefined : 16,
    borderWidth: 2,
    bg: 'cyan',
    net: true,
  };

  const approachStyleProps = {
    width: landscape ? '70%' : '90%',
    flex: landscape ? 5 : undefined,
    height: landscape ? undefined : 24,
    borderWidth: 2,
    bg: 'yellow',
  };

  const Square = (
    <Controller
      control={control}
      render={({ field }) => <Touchspace {...field} />}
      name="hitLocation"
    />
  );

  const Net = (
    <Controller
      control={control}
      render={({ field }) => (
        <ApproachInput elements={netElements} {...netStyleProps} {...field} />
      )}
      name="blockLocation"
    />
  );

  const Approach = (
    <Controller
      control={control}
      render={({ field }) => (
        <ApproachInput
          elements={appElements}
          {...approachStyleProps}
          {...field}
        />
      )}
      name="approachLocation"
    />
  );

  return (
    <Flex width="100%" height="100%" justifyContent="space-between">
      <Flex height={styleProps.height} flexDirection="row" align="center">
        <Box flex={2} bg="green.100">
          <CourtLayout square={Square} net={Net} approach={Approach} />
        </Box>
        <Sidebar
          handleSubmit={handleSubmit}
          reset={resetField}
          control={control}
          navigation={navigation}
        />
      </Flex>
      <Box height="13%" width="100%" bg="pink.100">
        <Teammates />
      </Box>
    </Flex>
  );
}

const courtStyles = {
  flex: 2,
};
