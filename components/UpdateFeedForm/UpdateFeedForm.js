import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Button, Pressable, TextInput } from 'react-native';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';

const UpdateFeedForm = () => {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={styles.update_feed_form_container}>
                <View>
                    <Text style={styles.update_feed_form_container_title}>Update Feed</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Feed name"
                    />
                </View>
                <View style={styles.add_research_keywords}>
                    <View style={styles.add_research_keywords_input}>
                        <TextInput
                            style={styles.input}
                            placeholder="Add research keywords"
                        />
                    </View>
                    <View style={styles.add_research_keywords_add_button}>
                        <Text>Add</Text>
                    </View>
                </View>
                <View>
                    <Text>(Write a keyword and press enter or add button)</Text>
                </View>
                <View style={styles.update_feed_form_buttons}>
                    <Pressable style={styles.update_feed_form_button_element}>
                        <Text style={styles.update_feed_form_text}>Update</Text>
                    </Pressable>
                    <Pressable style={styles.update_feed_form_button_element}>
                        <Text style={styles.update_feed_form_text}>Delete</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default UpdateFeedForm;

const styles = StyleSheet.create({
    update_feed_form_container: {
        height: '100%',
        marginTop: '10%',
    },
    update_feed_form_container_title: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: '10%',
        marginBottom: 20,
    },
    input: {
        height: 55,
        width: 250,
        borderRadius: 8,
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
        fontSize: 16
    },
    add_research_keywords: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    add_research_keywords_add_button: {
        marginLeft: 20,
    },
    update_feed_form_buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
    },
    update_feed_form_button_element: {
        backgroundColor: '#4285f4',
        margin: 10,
        padding: 15,
        borderRadius: 10,
        paddingLeft: 35,
        paddingRight: 35,
    },
    update_feed_form_text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
    },
})
