import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import CreateFeedScreen from './screens/CreateFeedScreen/CreateFeedScreen';
import CreateFeedFormScreen from './screens/CreateFeedFormScreen/CreateFeedFormScreen';
import FeedsScreen from './screens/FeedsScreen/FeedsScreen';
import BookmarksScreen from './screens/BookmarksScreen/BookmarksScreen';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.body_container}>
        {/* <LoginScreen /> */}
        {/* <CreateFeedScreen /> */}
        {/* <CreateFeedFormScreen /> */}
        <FeedsScreen />
        {/* <BookmarksScreen /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
