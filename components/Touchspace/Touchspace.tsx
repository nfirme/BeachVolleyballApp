import { Pressable, Box } from 'native-base';
import { GestureResponderEvent } from 'react-native';
import Point from './Point';

export type Coordinates = {
  x: number;
  y: number;
};

type TouchspaceProps = {
  interactive?: boolean;
  value: Coordinates;
  onChange: (value: any) => void;
};

export default function Touchspace({
  value,
  onChange,
  interactive,
}: TouchspaceProps) {
  const handlePress = (event: GestureResponderEvent) => {
    const coords: Coordinates = {
      x: event.nativeEvent.locationX,
      y: event.nativeEvent.locationY,
    };
    onChange(coords);
  };

  return (
    
      <Pressable isDisabled={!interactive} onPress={handlePress}>
        <Box>
          <Point x={value.x} y={value.y} />
        </Box>
      </Pressable>
  );
}
