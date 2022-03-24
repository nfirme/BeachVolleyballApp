import { Box, Button, Text, Flex } from 'native-base';
import Player from './Player';
import SidebarButtons from './SidebarButtons';
import { SidebarProps } from '../../types';

export default function Sidebar(props: SidebarProps) {
  const { viewMode, toggleViewMode, control, handleSubmit } = props;
  return (
    <Flex py={8} px={8} flex={1}>
      <Player name="Nick Firme" school="Cal Poly SLO" number={5} avatar="" />
      <Button
        colorScheme={viewMode ? 'amber' : 'primary'}
        onPress={toggleViewMode}
        my={8}
        py={4}
      >
        {viewMode ? 'Interactive Mode' : 'View Heatmap'}
      </Button>
      {viewMode ? (
        <SidebarButtons
          control={control}
          onSubmit={handleSubmit((data) => console.log(data))}
        />
      ) : (
        <Box height={64} px={8} borderWidth={1} />
      )}
    </Flex>
  );
}
