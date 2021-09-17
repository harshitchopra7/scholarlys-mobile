import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Button, Pressable, TextInput, ScrollView } from 'react-native';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';
import SingleFeed from '../SingleFeed/SingleFeed';
import TEXTS from '../../constants/constants';

const Feeds = () => {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={styles.bookmarks_container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    <Text style={styles.bookmarks_title}>{TEXTS.READING_LIST}</Text>
                    <SingleFeed />
                    <SingleFeed />
                    <SingleFeed />
                    <SingleFeed />
                    <SingleFeed />
                    <SingleFeed />
                    <SingleFeed />
                    <SingleFeed />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default Feeds;

const styles = StyleSheet.create({
    bookmarks_container: {
        margin: 20,
    },
    bookmarks_title: {
        fontWeight: '700',
        fontSize: 18,
        marginTop: 10,
    }
})
