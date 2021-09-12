import React from 'react';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';
import { StyleSheet, View, Text, SafeAreaView, Image, Button, Pressable } from 'react-native';

const CreateFeed = () => {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={styles.create_feed_container}>
                <View style={styles.create_feed_text}>
                    <Text style={styles.create_feed_text_text}>Click below to get started</Text>
                </View>
                <View style={styles.create_feed_button_container}>
                    <Pressable style={styles.create_feed_button}>
                        <Text style={styles.create_feed_button_text}>
                            + Create Feed
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default CreateFeed;

const styles = StyleSheet.create({
    create_feed_container: {
        // backgroundColor: 'yellow',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    create_feed_text: {
        flex: 0.5,
        // backgroundColor: 'red',
        justifyContent: 'flex-end'
    },
    create_feed_text_text: {
        fontSize: 18,
        marginBottom: 30,
        fontWeight: '600',
    },
    create_feed_button_container: {
        flex: 0.5,
        // backgroundColor: 'yellow',
    },
    create_feed_button: {
        backgroundColor: '#4285f4',
        alignItems: 'center',
        justifyContent: 'center',
        width: 140,
        height: 55,
        borderRadius: 10,
    },
    create_feed_button_text: {
        color: 'white',
        fontSize: 16,
    }
})