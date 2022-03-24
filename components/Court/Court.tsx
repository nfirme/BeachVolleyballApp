import { AspectRatio, Flex, Box } from 'native-base';
import { Controller } from 'react-hook-form';
import { CourtProps } from '../../types';
import ApproachInput from './ApproachInput';
import Touchspace from './Touchspace';

function Court(props: CourtProps) {
  const { viewMode, control } = props;

  return (
    <Flex flex={2} height="100%" align="center" >
      <Controller
        control={control}
        render={({ field }) => <Touchspace {...field} />}
        name="hitLocation"
      />
      <Box borderWidth={1} width="80%" flex={1} bg="cyan.200" />
      <Box borderWidth={1} width="70%" flex={1} bg="yellow.200" />
    </Flex>
  );
}

export default Court;
