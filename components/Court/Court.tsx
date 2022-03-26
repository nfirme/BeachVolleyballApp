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
    height: landscape ? undefined : 16,
    borderWidth: 2,
    bg: 'cyan',
    net: true
  }

  const approachStyleProps = {
    width: landscape ? '70%' : '90%',
    flex: landscape ? 5 : undefined,
    height: landscape ? undefined : 24,
    borderWidth: 2,
    bg: 'yellow'
  };

  const netElements = ['Left', 'Center', 'Right'];
  const appElements = ['Left', 'Right']

  return (
    <Flex px={4} flex={2} height="100%" align="center" justify="center">
      <Controller
        control={control}
        render={({ field }) => <Touchspace viewMode={viewMode} {...field} />}
        name="hitLocation"
      />
      <Controller
        control={control}
        render={({ field }) => <ApproachInput viewMode={viewMode} elements={netElements} {...netStyleProps} {...field} />}
        name="blockLocation"
      />
      <Controller
        control={control}
        render={({ field }) => <ApproachInput viewMode={viewMode} elements={appElements} {...approachStyleProps} {...field} />}
        name="approachLocation"
      />
    </Flex>
  );
}

export default Court;
