// In App.js in a new project

import * as React from 'react';
import { Button,View, Text, StyleSheet, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const homeScreen = ({navigation}) => {
  return (
    <View>
     <Text style={styles.title}>This is page one and should show when the application loads</Text>
     <Button 
      title="Page Two"
      onPress={() => {navigation.navigate('pageTwo')}} />
      <Text> </Text>
      <Button 
      title="Page Three"
      onPress={() => {navigation.navigate('pageThree')}} />
      <Button 
      title="Page Four"
      onPress={() => {navigation.navigate('pageFour')}} />
      
    </View>
   
  );
}


const twoScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.title}>This is the second Screen and this should show you press any page two button</Text>
      <Button 
        title="Page One"
        onPress={() => {navigation.navigate('pageOne')}} />

     <Text> </Text>
     <Button 
        title="Page Three"
        onPress={() => {navigation.navigate('pageThree')}} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const threeScreen = ({navigation}) => {
  return (
    <View >
      <Text style={styles.title}>This is page three and should show when you press the page three button</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('pageOne')} />
      
       <Text> </Text>
       <Button 
        title="Page Two"
        onPress={() => {navigation.navigate('pageTwo')}} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const fourScreen = ({navigation}) => {
  return(
    <View>
      <Text style={styles.title}> Four Screen </Text>
      <Button style={styles.button}
      title="go to Details again"
      onPress={() => navigation.navigate('Details')} />

      <Button style={styles.button} title="Go to Home" onPress={() => navigation.navigate('pageOne')} />
      <Button style={styles.button} title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="pageOne" component={homeScreen} />
        <Stack.Screen name="pageTwo" component={twoScreen} />
        <Stack.Screen name="pageThree" component={threeScreen} />
        <Stack.Screen name="pageFour" component={fourScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

     
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    marginBottom: 20,
    padding: 30
  },
})