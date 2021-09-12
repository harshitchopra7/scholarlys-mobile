import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Bookmarks from '../../components/Bookmarks/Bookmarks';
import Navbar from '../../components/Navbar/Navbar';

const FeedsScreen = () => {
    return (
        <SafeAreaView style={styles.feeds_screen_container}>
            <Bookmarks />
            <View style={styles.create_feed_screen_navbar}>
                <Navbar />
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
    },
    feeds_screen_container: {
        width: '100%',
        height: '100%',
    },
});