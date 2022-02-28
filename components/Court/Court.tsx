import { AspectRatio, Flex, Box, useMediaQuery } from 'native-base';
import { Controller } from 'react-hook-form';
import { Touchspace } from '../Touchspace';

type CourtProps = {
  control: any
}

export default function Court({ control }: CourtProps) {
  const [isLandScape, isPortrait] = useMediaQuery([
    {
      orientation: 'landscape',
    },
    {
      orientation: 'portrait',
    },
  ]);

  const InteractiveCourt = () => (
    <Flex height="full" borderWidth={1}>
      <Controller
        control={control}
        render={({ field }) => (
          <Touchspace {...field} />
        )}
        name="hitLocation"
      />
      <Box borderWidth={1} flex={1} />
      <Box borderWidth={1} flex={3} />
    </Flex>
  );

  return isLandScape ? (
    <AspectRatio borderWidth={1} height="100%" ratio={0.8}>
      <InteractiveCourt />
    </AspectRatio>
  ) : (
    <AspectRatio width="100%" ratio={0.8}>
      <InteractiveCourt />
    </AspectRatio>
  );
}
