import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './router';
import Home from './Home';
//import Settings from './Settings';
import Details from './Details';
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            headerRight: () => {
              return <Button title="Buy" onPress={() => {}} disabled={route.params.stock === 0} />;
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
