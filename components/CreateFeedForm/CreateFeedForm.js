import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Button, Pressable, TextInput } from 'react-native';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';
import TEXTS from '../../constants/constants';

const CreateFeedForm = () => {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={styles.create_feed_form_container}>
                <View>
                    <Text style={styles.create_feed_form_container_title}>{TEXTS.CREATE_FEED}</Text>
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
                        <Text>{TEXTS.ADD}</Text>
                    </View>
                </View>
                <View>
                    <Text>{TEXTS.ADD_KEYWORD_INSTRUCTION}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CreateFeedForm;

const styles = StyleSheet.create({
    create_feed_form_container: {
        height: '100%',
        marginTop: '10%',
    },
    create_feed_form_container_title: {
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
    }
})
