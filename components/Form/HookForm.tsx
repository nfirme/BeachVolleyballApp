import { useState } from 'react';
import { Box, Button, Text, Flex } from 'native-base';
import { useForm } from 'react-hook-form';
import { Coordinates } from '../Touchspace/Touchspace';
import InputButtons from './InputButtons'
import { Court } from '../Court';
import Player from '../Player';
import CourtGrid from '../Grid/CourtGrid'

type FormData = {
  offenseType: 'Hit' | 'Shot';
  defenseType: 'Block' | 'Pull';
  blockLocation: 'Left' | 'Center' | 'Right';
  approachLocation: 'Left' | 'Center' | 'Right';
  hitLocation: Coordinates;
};

  const Notes = () => (
    <Box px={8} py={24} borderWidth={1}>
      <Text>Some information here</Text>
    </Box>
  )

export default function HookForm() {
  const [interactive, setInteractive] = useState(true);
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
    <Box display="flex" flexDirection="row" height="80%" borderWidth={2}>
      <Flex alignItems="center" justifyContent="center" flex={2} px={1}>
        <Court control={control} />
      </Flex>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        flex={1}
      >
        <Player />
        <Button
          variant="outline"
          colorScheme={interactive ? 'teal' : 'amber'}
          onPress={() => setInteractive(!interactive)}
        >
          {interactive ? 'View Heatmap' : 'Interactive Mode'}
        </Button>
        {interactive ? <InputButtons control={control} onSubmit={handleSubmit((data) => console.log(data))} /> : <Notes />}
      </Box>
    </Box>
  );
}
