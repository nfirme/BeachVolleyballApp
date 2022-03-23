import { Box, Pressable } from 'native-base';
import { GestureResponderEvent } from 'react-native';
import { forwardRef } from 'react';
import { TouchspaceProps, Coordinates } from '../../types'
import Point from './Point';

const Touchspace = forwardRef((props: TouchspaceProps, ref) => {
  const { viewMode, value, onChange } = props;
  const handlePress = (event: GestureResponderEvent) => {
    const coords: Coordinates = {
      x: event.nativeEvent.locationX,
      y: event.nativeEvent.locationY,
    };
    console.log(coords);
    onChange(coords);
  };

  return (
    <Box ref={ref} flex={6}>
      <Pressable onPress={handlePress}>
        <Box height="full">
          <Point x={100} y={100} />
        </Box>
      </Pressable>
    </Box>
  );
});

export default Touchspace;
