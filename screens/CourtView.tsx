import { Flex, Box } from 'native-base';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDeviceOrientation } from '@react-native-community/hooks';

import { FormData } from '../types';
import { Court } from '../components/Court';
import { Sidebar } from '../components/Sidebar';
import Teammates from '../components/Court/Teammates';

export default function CourtView({ route, navigation }: any) {
  const { landscape } = useDeviceOrientation();

  const [player, setPlayer] = useState(null);
  const [viewMode, setViewMode] = useState(false);
  const toggleViewMode = () => setViewMode(!viewMode);
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      offenseType: 'Hit',
      defenseType: 'Block',
      blockLocation: 'Left',
      approachLocation: 'Left',
      hitLocation: { x: 0, y: 0 },
    },
  });

  useEffect(() => {
    const { playerId } = route.params || 1;
  }, []);

  return (
    <Flex width="100%" height="100%">
      <Flex height="87%" flexDirection="row" borderWidth={2}>
        <Court viewMode={viewMode} control={control} />
        <Sidebar
          viewMode={viewMode}
          toggleViewMode={toggleViewMode}
          handleSubmit={handleSubmit}
          control={control}
        />
      </Flex>
      <Box height="13%" width="100%"><Teammates /></Box>
    </Flex>
  );
}
