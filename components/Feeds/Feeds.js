import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Button, Pressable, TextInput, ScrollView } from 'react-native';
import TEXTS from '../../constants/constants';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';
import SingleFeed from '../SingleFeed/SingleFeed';

const Feeds = ({ navigation }) => {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={styles.feeds_container}>

                {/* Publications and News/blogs buttons */}
                <View style={styles.feeds_container_categories}>
                    <View style={styles.feeds_container_categories_one}>
                        <Text style={styles.feeds_container_categories_one_text}>{TEXTS.PUBLICATIONS}</Text>
                    </View>
                    <View style={styles.feeds_container_categories_two}>
                        <Text style={styles.feeds_container_categories_two_text}>{TEXTS.NEWS_BLOGS}</Text>
                    </View>
                </View>

                {/* Today's Feeds */}
                <View style={styles.feeds_today_container}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        <Text style={styles.feeds_today_container_text}>{TEXTS.TODAY}</Text>
                        <SingleFeed navigation={navigation} />
                        <SingleFeed navigation={navigation} />
                        <SingleFeed navigation={navigation} />
                        <SingleFeed navigation={navigation} />
                        <SingleFeed navigation={navigation} />
                        <SingleFeed navigation={navigation} />
                        <SingleFeed navigation={navigation} />
                        <SingleFeed navigation={navigation} />
                    </ScrollView>
                </View>

            </View>
        </SafeAreaView>
    )
}
export default Feeds;

const styles = StyleSheet.create({
    feeds_container: {
        margin: 20,
    },
    feeds_container_categories: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    feeds_container_categories_one: {
        flex: 0.5,
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: 'center',
        marginRight: 20,
    },
    feeds_container_categories_two: {
        flex: 0.5,
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: 'center',
        marginLeft: 20,
    },
    feeds_container_categories_one_text: {
        fontSize: 16,
        marginBottom: 10,
    },
    feeds_container_categories_two_text: {
        fontSize: 16,
        marginBottom: 10,
    },
    feeds_today_container: {
        marginTop: 30,
        flexGrow: 1,
    },
    feeds_today_container_text: {
        fontWeight: '700',
        fontSize: 18,
    },
})
