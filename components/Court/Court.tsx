import { AspectRatio, Flex, Box } from 'native-base';
import { Controller } from 'react-hook-form';
import { CourtProps } from '../../types';
import ApproachInput from './ApproachInput';
import Touchspace from './Touchspace';

function Court(props: CourtProps) {
  const { viewMode, control } = props;

  const InteractiveCourt = () => (
    <Flex height="full" borderWidth={1}>
      <Controller
        control={control}
        render={({ field }) => <Touchspace {...field} />}
        name="hitLocation"
      />
      <ApproachInput />
      <Box borderWidth={1} flex={3} />
    </Flex>
  );

  return (
    <AspectRatio borderWidth={1} height="full" ratio={0.8}>
      <InteractiveCourt />
    </AspectRatio>
  );
}

export default Court;
