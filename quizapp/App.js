import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Home from './screens/home'
import Quiz from './screens/quiz'
import Result from './screens/result'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ title: 'My World', headerShown:false }}/>
        <Stack.Screen name="quiz" component={Quiz} />
        <Stack.Screen name="result" component={Result} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container :{
    paddingTop:40,
    paddingHorizontal:16
  }

})
export default App