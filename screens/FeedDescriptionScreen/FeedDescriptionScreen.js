import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import FeedDescription from '../../components/FeedDescription/FeedDescription';
import Navbar from '../../components/Navbar/Navbar';

const FeedDescriptionScreen = () => {
    return (
        <SafeAreaView style={styles.feed_description_screen_container}>
            <FeedDescription />
        </SafeAreaView>
    );
}
export default FeedDescriptionScreen;

const styles = StyleSheet.create({
    feed_description_screen_container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});