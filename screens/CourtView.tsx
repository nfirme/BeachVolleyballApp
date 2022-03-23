import { Flex } from 'native-base';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormData } from '../types';
import { Court } from '../components/Court';
import Sidebar from '../components/Sidebar/Sidebar';

export default function CourtView() {
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

  return (
    <Flex flexDirection="row" height="80%" borderWidth={2}>
      <Flex align="center" flex={2} px={1}>
        <Court viewMode={viewMode} control={control} />
      </Flex>
      <Sidebar
        viewMode={viewMode}
        toggleViewMode={toggleViewMode}
        handleSubmit={handleSubmit}
        control={control}
      />
    </Flex>
  );
}
