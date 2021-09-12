import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Button, Pressable, TextInput } from 'react-native';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';

const SingleFeed = () => {

    const title = "Assessing factors associated with social connectedness in adults with mobility disabilities";
    const keyword = "Adsorption";

    return (
        <SafeAreaView>
            <View style={styles.single_feed_container}>
                <Text style={styles.single_feed_title}>{title}</Text>
                <Text style={styles.single_feed_keyword}>{keyword}</Text>
            </View>
        </SafeAreaView>
    )
}
export default SingleFeed;

const styles = StyleSheet.create({
    single_feed_container: {
        marginTop: 25,
        borderBottomWidth: 1.5,
        paddingBottom: 15,
        borderColor: '#d3d3d3',
        margin: 10,
    },
    single_feed_title: {
        color: '#012169',
        fontWeight: '600',
        fontSize: 15,
    },
    single_feed_keyword: {
        marginTop: 20,
    },
})
