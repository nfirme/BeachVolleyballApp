import { useEffect, useState } from 'react';
import { Box, Flex } from 'native-base';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { DataViewProps } from '../types/navigation';
import { generatePoints } from '../utils';
import CourtLayout from '../components/Court/CourtLayout';
import { Scatterplot } from '../components/Graph';
import ApproachInput from '../components/Court/ApproachInput';

export default function DataView({ route, navigation }: DataViewProps) {
  const { landscape } = useDeviceOrientation();
  const [player, setPlayer] = useState(null);

  const netElements = ['', '', ''];
  const approachElements = ['', ''];
  const data1 = generatePoints();
  const data2 = generatePoints();
  const data3 = generatePoints();
  const data4 = generatePoints();

  const netStyleProps = {
    width: landscape ? '80%' : '100%',
    flex: 4,
    height: landscape ? undefined : 16,
    borderWidth: 1,
    bg: 'orange',
  };

  const approachStyleProps = {
    width: landscape ? '70%' : '90%',
    flex: 5,
    height: landscape ? undefined : 24,
    borderWidth: 1,
    bg: 'cyan',
  };

  // const Graph = <Scatterplot data={data} />;
  const Net = <ApproachInput elements={netElements} {...netStyleProps} />;
  const Approach = (
    <ApproachInput elements={approachElements} {...approachStyleProps} />
  );

  useEffect(() => {
    const { playerId } = route.params || '1';
    // Fetch the player data
    // Update the state with player information
  }, []);

  return (
    <Box height="full" width="full">
      <Flex direction="row" wrap="wrap" height="full" width="full">
        <Box height="50%" flexGrow={0} flexBasis="50%">
          <CourtLayout
            square={<Scatterplot data={data1} />}
            net={Net}
            approach={Approach}
          />
        </Box>
        <Box height="50%" flexGrow={0} flexBasis="50%">
          <CourtLayout
            square={<Scatterplot data={data2} />}
            net={Net}
            approach={Approach}
          />
        </Box>
        <Box height="50%" flexGrow={0} flexBasis="50%">
          <CourtLayout
            square={<Scatterplot data={data3} />}
            net={Net}
            approach={Approach}
          />
        </Box>
        <Box height="50%" flexGrow={0} flexBasis="50%">
          <CourtLayout
            square={<Scatterplot data={data4} />}
            net={Net}
            approach={Approach}
          />
        </Box>
      </Flex>
    </Box>
  );
}
