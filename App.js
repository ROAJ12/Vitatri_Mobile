import { StatusBar } from 'expo-status-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import LandPage from './src/pages/LandPage';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import HomePage from './src/pages/HomePage';
import Questionary from './src/pages/Questionary';
import Test from './src/pages/Test';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandPage">
        <Stack.Screen 
          name="LandPage" 
          component={LandPage} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Questionary"
          component={Questionary}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}
