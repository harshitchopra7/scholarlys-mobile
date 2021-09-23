import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Feeds from '../../components/Feeds/Feeds';
import Navbar from '../../components/Navbar/Navbar';

const FeedsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.feeds_screen_container}>
            <Feeds navigation={navigation} />
            <View style={styles.create_feed_screen_navbar}>
                <Navbar navigation={navigation} />
            </View>
        </SafeAreaView>
    );
}
export default FeedsScreen;

const styles = StyleSheet.create({
    create_feed_screen_navbar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'red',
    },
    feeds_screen_container: {
        width: '100%',
        height: '100%',
    },
});