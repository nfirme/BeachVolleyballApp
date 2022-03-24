import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CourtView, PlayerList, SchoolList } from './screens';
import { NavigatorParamList } from './types';
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
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
