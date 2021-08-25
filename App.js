// In App.js in a new project

import * as React from 'react';
import { Button,View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const homeScreen = ({navigation}) => {
  return (
    <View>
     <Text>This is page one and should show when the application loads</Text>
     <Button 
      title="Page Two"
      onPress={() => {navigation.navigate('pageTwo')}}
      ></Button>
      <Text> </Text>
           <Button 
      title="Page Three"
      onPress={() => {navigation.navigate('pageThree')}}
      ></Button>
    </View>
   
  );
}


const twoScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is the second Screen and this should show you press any page two button</Text>
      <Button 
      title="Page One"
      onPress={() => {navigation.navigate('pageOne')}}
      ></Button>
 <Text> </Text>
<Button 
      title="Page Three"
      onPress={() => {navigation.navigate('pageThree')}}
      ></Button>
    </View>
  );
}

const threeScreen = ({navigation}) => {
  return (
    <View >
      <Text>This is page three and should show when you press the page three button</Text>
      <Button 
      title="Page One"
      onPress={() => {navigation.navigate('pageOne')}}
      ></Button>
       <Text> </Text>
       <Button 
      title="Page Two"
      onPress={() => {navigation.navigate('pageTwo')}}
      ></Button>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="pageOne" component={homeScreen} />
        <Stack.Screen name="pageTwo" component={twoScreen} />
        <Stack.Screen name="pageThree" component={threeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;