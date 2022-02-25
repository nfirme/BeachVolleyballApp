import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CourtView, PlayerList } from './screens';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Players">
          <Tab.Screen name="Players" component={PlayerList} />
          <Tab.Screen name="Court" component={CourtView} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
