import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { CourtView, PlayerList, SchoolList, DataView } from './screens';
import { NavigatorParamList } from './types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<NavigatorParamList>();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Schools">
          <Stack.Screen name="Schools" component={SchoolList} />
          <Stack.Screen name="Players" component={PlayerList} />
          <Stack.Screen name="Court" component={CourtView} />
          <Stack.Screen name="Data" component={DataView} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
