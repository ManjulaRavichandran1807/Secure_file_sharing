import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SigninScreen from './components/SigninScreen';
import SignupScreen from './components/SignupScreen';


const Stack = createStackNavigator();

function StackRnRoutes() {
  return (
     <Stack.Navigator
        initialRouteName="SignupScreen"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="SignupScreen" 
        component={SignupScreen} 
        options={{ title: 'Signup' }}
      />
      <Stack.Screen 
       name="SigninScreen" 
       component={SigninScreen} 
       options={{ title: 'Signin' }}
      />
    </Stack.Navigator>     
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackRnRoutes />
    </NavigationContainer>
  );
}