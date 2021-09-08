import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';
import Navbar from '../../components/Navbar/Navbar';
import CreateFeedForm from '../../components/CreateFeedForm/CreateFeedForm';

const CreateFeedFormScreen = () => {
    return (
        <SafeAreaView style={styles.create_feed_form_screen_container}>
            <CreateFeedForm />
        </SafeAreaView>
    )
}
export default CreateFeedFormScreen;

const styles = StyleSheet.create({
    create_feed_form_screen_container: {
        width: '100%',
        height: '100%',
        padding: 30,
    },
})