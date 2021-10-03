import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Button, Pressable, TextInput } from 'react-native';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';

const SingleFeed = ({ id, title, source, navigation }) => {

    // const title = "hello";
    // const keyword = "Adsorption";

    return (
        <SafeAreaView>
            <Pressable onPress={() => navigation.navigate('FeedDescriptionScreen')} style={styles.single_feed_container}>
                {/* <Text style={styles.single_feed_title}>{id}</Text> */}
                <Text style={styles.single_feed_title}>{title}</Text>
                <Text style={styles.single_feed_keyword}>Source: {source}</Text>
            </Pressable>
        </SafeAreaView>
    )
}
export default SingleFeed;

const styles = StyleSheet.create({
    single_feed_container: {
        marginTop: 10,
        borderBottomWidth: 1.5,
        paddingBottom: 15,
        borderColor: '#d3d3d3',
        margin: 10,
    },
    single_feed_title: {
        color: '#012169',
        fontWeight: '700',
        fontSize: 15,
    },
    single_feed_keyword: {
        marginTop: 20,
    },
})
