import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CourtView, PlayerList, SchoolList } from './screens';
import { NavigatorParamList } from './types';

const Tab = createBottomTabNavigator<NavigatorParamList>();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Schools">
          <Tab.Screen name="Schools" component={SchoolList} />
          <Tab.Screen name="Players" component={PlayerList} />
          <Tab.Screen name="Court" component={CourtView} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
