import { Button, Flex } from 'native-base';
import Player from './Player';
import SidebarButtons from './SidebarButtons';
import { Control, UseFormHandleSubmit } from 'react-hook-form';
import { FormData } from '../../types';
import { CourtViewProps } from '../../types/navigation';

type SidebarProps = {
  control: Control<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData>;
  reset: any;
  navigation: CourtViewProps['navigation'];
};

export default function Sidebar(props: SidebarProps) {
  const { control, handleSubmit, reset, navigation } = props;
  return (
    <Flex py={8} px={8} flex={1}>
      <Player name="Nick Firme" school="Cal Poly SLO" number={5} avatar="" />
      <Button
        onPress={() => navigation.navigate('Data', { playerId: '1' })}
        my={8}
        py={4}
      >
        View Heatmaps
      </Button>
      <SidebarButtons
        control={control}
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset('hitLocation');
        })}
      />
    </Flex>
  );
}
