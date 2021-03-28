import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Details from './components/Details';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;











// import React from 'react'
// import { Text, View, StyleSheet, Image } from 'react-native'
// import 'react-native-gesture-handler';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text>welcome</Text>
//       <Text>Hello Taishi!</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// });

// export default App
