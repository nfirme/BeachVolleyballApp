import { Box, Button, Text } from 'native-base';
import Player from './Player';
import SidebarButtons from './SidebarButtons';
import { SidebarProps } from '../../types';

const Notes = () => (
  <Box px={8} borderWidth={1}>
    <Text>Some information here</Text>
  </Box>
);

export default function Sidebar(props: SidebarProps) {
  const { viewMode, toggleViewMode, control, handleSubmit } = props;
  return (
    <Box py={8} flex={1}>
      <Player name="Nick Firme" school="Cal Poly SLO" number={5} avatar="" />
      <Button
        colorScheme={viewMode ? 'amber' : 'teal'}
        flexBasis="auto"
        onPress={toggleViewMode}
      >
        {viewMode ? 'Interactive Mode' : 'View Heatmap'}
      </Button>
      {viewMode ? (
        <SidebarButtons
          control={control}
          onSubmit={handleSubmit((data) => console.log(data))}
        />
      ) : (
        <Notes />
      )}
    </Box>
  );
}
