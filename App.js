import { createContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/scenes/Home';
import Details from './src/scenes/Details';

const bgImage = {uri: 'https://png.pngtree.com/background/20210709/original/pngtree-food-western-food-steak-tomato-picture-image_941801.jpg'}

const Stack = createNativeStackNavigator();

export const SingleRestContext = createContext(null); // we usually use null for a default context


export default function App() {
  const [currentRest, setCurrentRest] = useState();

  return (
    <SingleRestContext.Provider value={{ currentRest, setCurrentRest }}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={Home} options={{title: 'Local Restaurants'}}/>
            <Stack.Screen name='Details' component={Details} options={{title: 'Restaurant Details'}}/>
          </Stack.Navigator>
          <StatusBar style="auto" />
      </NavigationContainer>
    </SingleRestContext.Provider>
  );
}
