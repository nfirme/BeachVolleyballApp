import { View, StyleSheet } from 'react-native'
import { CourtGrid, RecordInputs } from '../components';
import { screenStyles } from '../styles/screens';

export default function CourtView() {
  return (
    <View style={screenStyles.screen}>
      <CourtGrid />
      <RecordInputs />
    </View>
  );
}


