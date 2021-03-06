import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Button, Pressable } from 'react-native';
import TEXTS from '../../constants/constants';

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.login_main}>
            <View style={styles.login_top}>
                <Text style={styles.title}>{TEXTS.SCHOLARLYS}</Text>
                <Text style={styles.sub_title1}>{TEXTS.SUBTITLE1}</Text>
                <Text style={styles.sub_title2}>
                    {TEXTS.SUBTITLE2}
                </Text>
            </View>
            <View style={styles.login_bottom}>
                <Pressable onPress={() => navigation.navigate('CreateFeedScreen')} style={styles.login_button}>
                    <Image
                        source={{
                            uri: "https://banner2.cleanpng.com/20180612/llj/kisspng-google-logo-google-search-google-doodle-circular-economy-5b2082fe438318.3928951115288573422766.jpg"
                        }}
                        style={styles.login_button_img}
                    />
                    <Text style={styles.login_text}>{TEXTS.LOGIN_WITH_GOOGLE}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
export default Login;

const styles = StyleSheet.create({
    login_main: {
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    login_top: {
        flex: 0.6,
        justifyContent: 'flex-end',
        marginBottom: 50,
    },
    login_bottom: {
        flex: 0.5,
        marginTop: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 20,
    },
    sub_title1: {
        fontSize: 23,
        fontWeight: '700',
        marginBottom: 15,
    },
    sub_title2: {
        fontSize: 15,
        marginBottom: 10,
        lineHeight: 25,
    },
    login_button: {
        height: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        elevation: 4,
    },
    login_text: {
        fontSize: 19,
        fontWeight: '700',
    },
    login_img: {
        height: 40,
        width: 30,
    }
})
