// import React, { useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// // import * as Font from "expo-font";

// import Home from "./Screens/Home";
// import LoginScreen from "./Screens/LoginScreen";
// import RegistrationScreen from "./Screens/RegistrationScreen";

// // const loadFonts = async () => {
// //   await Font.loadAsync({
// //     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
// //     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
// //     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
// //   });
// // };

// const MainStack = createStackNavigator();

// export default function App() {
//   // useEffect(() => {
//   //   loadFonts();
//   // }, []);

//   return (
//     <NavigationContainer>
//       <MainStack.Navigator
//         initialRouteName="LoginScreen"
//         screenOptions={{ headerShown: false }}
//       >
//         <MainStack.Screen
//           name="RegistrationScreen"
//           component={RegistrationScreen}
//         />
//         <MainStack.Screen name="LoginScreen" component={LoginScreen} />
//         <MainStack.Screen name="Home" component={Home} />
//       </MainStack.Navigator>
//     </NavigationContainer>
//   );
// }

import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import LoginScreen from "./Screens/AuthPages/LoginScreen";
import RegistrationScreen from "./Screens/AuthPages/RegistrationScreen";
import Home from "./Screens/Home";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <MainStack.Screen
            name="Regestration"
            component={RegistrationScreen}
          />
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
