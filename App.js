import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, SafeAreaView, TextInput } from 'react-native';
//import * as rn from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// function FormLogin({navigation}){
//     const [value, setValue] = useState({ username: '', password: '' })
    
//     const onPress = () => {
//         Alert.alert(JSON.stringify(value))
//         setValue({ username: '', password: '' })
//       }
  
//     return (
//       <View style={styles.container}>
//         <Text>Form Login </Text>
//         <View style={styles.form}>
//           <TextInput
//             style={styles.input}
//             placeholder='enter username'
//             placeholderTextColor='lightgrey'
//             onChangeText={(text) => setValue({ ...value, username: text })}
//             value={value.username}
//             autoCompleteType='off'
//           />
//           <TextInput
//             style={styles.input}
//             placeholder='enter password'
//             placeholderTextColor='lightgrey'
//             onChangeText={(text) => setValue({ ...value, password: text })}
//             value={value.password}
//             autoCompleteType='off'
//             secureTextEntry
//           />
//           <View style={styles.button}>
//             <Button title='login' color='green' onPress={onPress} />
//           </View>
//         </View>
//       </View>
//     );
//   }
  
//const vs function, const must be created before calling it. With const I need to be more careful where things go here

const Separator = () => (
    //create a Separator, css in styles
    <View style={styles.separator} />
  );

function HomeScreen({ navigation }) {
    //remember to add new route buttons here and to app function!!
  return (
    <View style={styles.container}>
     

      <Button style={styles.button}
        title="Details and passing params"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details',  { itemId: 86, otherParam: 'anything you want here' } );
        }}
      />
      <Separator/>
      <Button style={styles.button} title="About" onPress={() => navigation.navigate('About')} />
      <Separator/>
      <Button title="Another" onPress={() => navigation.navigate('Another')} />
      <Separator/>
      <Text>Anything else goes here</Text>
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={styles.container}>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Separator/>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Separator/>
      <Button style={styles.button} title="About" onPress={() => navigation.navigate('About')} />
      <Separator/>
      <Button title="Another" onPress={() => navigation.navigate('Another')} />
      <Separator/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Separator/>
      <Text>Passes params below</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
    </View>
  );
}

function AnotherScreen({navigation}){
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
     
     <Separator/>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Separator/>
      <Button style={styles.button}
        title="Details and passing params"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details',  { itemId: 86, otherParam: text } ); //sending text frominput to details page!!
        }}
      />

      <Separator/>
      <Button style={styles.button} title="About" onPress={() => navigation.navigate('About')} />
      <Separator/>
      <Button title="Another" onPress={() => navigation.navigate('Another')} />
      <Separator/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Separator/>
      <Text>Click below here to input data that will be passed to the details page</Text>
      <Separator/>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to input!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
  );
}


function AboutScreen({ route, navigation }) {
    /* 2. Get the param */

    return (
      <View style={styles.container}>
        <Button 
          style={styles.button}
          title="About again"
          onPress={() => navigation.push('About', {})}
        />
         <Separator />
        <Button style={styles.button} title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Separator />
        <Button style={styles.button} title="Go back" onPress={() => navigation.goBack()} />
        <Separator />
        <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
        <Separator />
        <Text>Any text goes here</Text>
      
      </View>
    );
  }

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Another" component={AnotherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'top',
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
      /* borderBottomWidth: StyleSheet.hairlineWidth, a nice line! */
    },
    button: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
      
    },
    titleLogin: {
        fontSize: 22,
        textAlign: 'center',
        color: 'black',
        fontWeight: '600'
      },
      form: {
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 5
      },
      input: {
        width: 350,
        height: 40,
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid',
        borderRadius: 3
      },
  })

