import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import CreateFeedScreen from './screens/CreateFeedScreen/CreateFeedScreen';
import CreateFeedFormScreen from './screens/CreateFeedFormScreen/CreateFeedFormScreen';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        {/* <LoginScreen /> */}
        {/* <CreateFeedScreen /> */}
        <CreateFeedFormScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
