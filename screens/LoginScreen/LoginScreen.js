import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import Login from '../../components/Login/Login';

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.loginContainer}>
                <Login navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}
export default LoginScreen;

const styles = StyleSheet.create({
    loginContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})