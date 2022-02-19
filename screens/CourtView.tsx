import { View } from 'react-native'
import { CourtGrid } from '../components';
import { screenStyles } from '../styles';

export default function CourtView() {
  return (
    <View style={screenStyles.screen}>
      <CourtGrid />
    </View>
  );
}


