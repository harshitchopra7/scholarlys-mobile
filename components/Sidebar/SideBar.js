import React from 'react';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';
import { View, SafeAreaView, Text, Image, StyleSheet, Pressable } from 'react-native';

const SideBar = () => {

    const openSideBar = () => {

    }

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={styles.side_bar}>
                <Text>djnisd</Text>
                <Text>djnisd</Text>
                <Text>djnisd</Text>
            </View>
        </SafeAreaView>
    )
}
export default SideBar;

const styles = StyleSheet.create({
    side_bar: {
        // display: 'none',
        flex: 1,
        position: 'absolute',
        height: '100%',
        backgroundColor: 'red',
    },
})