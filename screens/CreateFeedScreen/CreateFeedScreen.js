import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';
import Navbar from '../../components/Navbar/Navbar';
import CreateFeed from '../../components/CreateFeed/CreateFeed';

const CreateFeedScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.create_feed_screen_container}>
                <CreateFeed navigation={navigation} />
                <View style={styles.create_feed_screen_navbar}>
                    <Navbar navigation={navigation} />
                </View>
            </View>
        </SafeAreaView>
    )
}
export default CreateFeedScreen;

const styles = StyleSheet.create({
    create_feed_screen_navbar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    create_feed_screen_container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})