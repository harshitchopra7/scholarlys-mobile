import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';
import Navbar from '../../components/Navbar/Navbar';
import CreateFeedForm from '../../components/CreateFeedForm/CreateFeedForm';

const CreateFeedFormScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.create_feed_form_screen_container}>
            <CreateFeedForm navigation={navigation} />
        </SafeAreaView>
    )
}
export default CreateFeedFormScreen;

const styles = StyleSheet.create({
    create_feed_screen_navbar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    create_feed_form_screen_container: {
        width: '100%',
        height: '100%',
        padding: 30,
    },
})