import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';
import Navbar from '../../components/Navbar/Navbar';
import UpdateFeedForm from '../../components/UpdateFeedForm/UpdateFeedForm';

const UpdateFeedFormScreen = () => {
    return (
        <SafeAreaView style={styles.update_feed_form_screen_container}>
            <UpdateFeedForm />
        </SafeAreaView>
    )
}
export default UpdateFeedFormScreen;

const styles = StyleSheet.create({
    update_feed_form_screen_container: {
        width: '100%',
        height: '100%',
        padding: 30,
    },
})