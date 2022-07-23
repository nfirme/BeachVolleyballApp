import { forwardRef, useEffect } from 'react';
import { GestureResponderEvent, Pressable, StyleSheet } from 'react-native';
import { Box, AspectRatio } from 'native-base';
import { useDeviceOrientation } from '@react-native-community/hooks';

import { useComponentSize } from '../../utils';
import { Coordinates } from '../../types';
import Point from './Point';

type TouchspaceProps = {
  value: Coordinates;
  onChange: (value: any) => void;
  onLayout?: () => {};
  size?: any;
};

const Touchspace = forwardRef((props: TouchspaceProps, ref) => {
  const { value, onChange, size, onLayout } = props;
  const { landscape } = useDeviceOrientation();
  // const [size, onLayout] = useComponentSize();

  const handlePress = (event: GestureResponderEvent) => {
    const coords: Coordinates = {
      x: Math.floor((event.nativeEvent.locationX / size.width) * 100),
      y: Math.floor((event.nativeEvent.locationY / size.height) * 100),
    };
    onChange(coords);
  };

  return (
    <AspectRatio
      width="full"
      ratio={1}
      ref={ref}
      onLayout={onLayout}
      bg="cyan.300"
    >
      {size && (
        <Pressable onPress={handlePress}>
          <Box>
            <Point
              x={(value.x * size.width) / 100}
              y={(value.y * size.height) / 100}
            />
          </Box>
        </Pressable>
      )}
    </AspectRatio>
  );
});

export default Touchspace;
