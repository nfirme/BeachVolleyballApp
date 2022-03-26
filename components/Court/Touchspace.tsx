import { Box, Pressable, AspectRatio, Text } from 'native-base';
import { GestureResponderEvent } from 'react-native';
import { forwardRef, useEffect, useState, useCallback } from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';

import { TouchspaceProps, Coordinates } from '../../types';
import Point from './Point';
import Scatterplot from '../Graph/Scatterplot';

const useComponentSize = () => {
  const [size, setSize] = useState<any>(null);

  const onLayout = useCallback((event) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
    console.log('onLayout called');
  }, []);

  return [size, onLayout];
};

const generatePoints = () => {
  let data = [];

  for (let i = 0; i < 50; i++) {
    data[i] = {
      timestamp: '03:00',
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
    };
  }

  return data;
};

const Touchspace = forwardRef((props: TouchspaceProps, ref) => {
  const { viewMode, value, onChange } = props;
  const { landscape } = useDeviceOrientation();
  const [size, onLayout] = useComponentSize();
  const [data, setData] = useState<any>([]);

  const handlePress = (event: GestureResponderEvent) => {
    const coords: Coordinates = {
      x: Math.floor((event.nativeEvent.locationX / size.width) * 100),
      y: Math.floor((event.nativeEvent.locationY / size.height) * 100),
    };
    console.log(coords);
    onChange(coords);
  };

  const touchspaceStyleProps = {
    width: landscape ? '70%' : '90%',
  };

  useEffect(() => {
    console.log(size);
  }, [size]);

  useEffect(() => {
    const points = generatePoints();
    setData(points);
  }, []);

  return (
    <AspectRatio
      bg="yellow.200"
      borderWidth={2}
      ratio={1}
      {...touchspaceStyleProps}
      ref={ref}
      onLayout={onLayout}
    >
      {viewMode ? (
        <Box>
          <Scatterplot size={size} data={data} />
        </Box>
      ) : (
        size && (
          <Pressable disabled={viewMode} onPress={handlePress}>
            <Box>
              <Point
                x={(value.x * size.width) / 100}
                y={(value.y * size.height) / 100}
              />
            </Box>
          </Pressable>
        )
      )}
    </AspectRatio>
  );
});

export default Touchspace;
