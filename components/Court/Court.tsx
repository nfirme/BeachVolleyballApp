import { Flex, Box } from 'native-base';
import { Controller } from 'react-hook-form';
import { useDeviceOrientation } from '@react-native-community/hooks';

import { CourtProps } from '../../types';
import ApproachInput from './ApproachInput';
import Touchspace from './Touchspace';

function Court(props: CourtProps) {
  const { viewMode, control } = props;
  const { landscape } = useDeviceOrientation();

  const netStyleProps = {
    width: landscape ? '80%' : '100%',
    flex: landscape ? 4 : undefined,
    height: landscape ? undefined : 16
  }

  const approachStyleProps = {
    width: landscape ? '70%' : '90%',
    flex: landscape ? 5 : undefined,
    height: landscape ? undefined : 24,
  };

  return (
    <Flex px={4} flex={2} height="100%" align="center" justify="center" >
      <Controller
        control={control}
        render={({ field }) => <Touchspace {...field} />}
        name="hitLocation"
      />
      <Box borderWidth={2} {...netStyleProps} bg="cyan.200" />
      <Box borderWidth={2} {...approachStyleProps} bg="yellow.200" />
    </Flex>
  );
}

export default Court;
