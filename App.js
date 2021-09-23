import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import CreateFeedScreen from './screens/CreateFeedScreen/CreateFeedScreen';
import CreateFeedFormScreen from './screens/CreateFeedFormScreen/CreateFeedFormScreen';
import FeedsScreen from './screens/FeedsScreen/FeedsScreen';
import BookmarksScreen from './screens/BookmarksScreen/BookmarksScreen';
import FeedDescriptionScreen from './screens/FeedDescriptionScreen/FeedDescriptionScreen';
import UpdateFeedFormScreen from './screens/UpdateFeedFormScreen/UpdateFeedFormScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CreateFeedScreen" component={CreateFeedScreen} />
        <Stack.Screen name="CreateFeedFormScreen" component={CreateFeedFormScreen} />
        <Stack.Screen name="FeedsScreen" component={FeedsScreen} />
        <Stack.Screen name="BookmarksScreen" component={BookmarksScreen} />
        <Stack.Screen name="FeedDescriptionScreen" component={FeedDescriptionScreen} />
        <Stack.Screen name="UpdateFeedFormScreen" component={UpdateFeedFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView>
    //   <View style={styles.body_container}>
    //     {/* <LoginScreen /> */}
    //     {/* <CreateFeedScreen /> */}
    //     {/* <CreateFeedFormScreen /> */}
    //     <FeedsScreen />
    //     {/* <BookmarksScreen /> */}
    //     {/* <FeedDescriptionScreen /> */}
    //     {/* <UpdateFeedFormScreen />  */}
    //   </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
