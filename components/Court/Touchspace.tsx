import { Box, Pressable, AspectRatio } from 'native-base';
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
    <AspectRatio bg="yellow.200" borderWidth={2} ratio={1} width="70%" ref={ref}>
      <Pressable onPress={handlePress}>
        <Box>
          <Point x={value.x} y={value.y} />
        </Box>
      </Pressable>
    </AspectRatio>
  );
});

export default Touchspace;
