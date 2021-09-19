import React, { useState } from 'react';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';
import { View, SafeAreaView, Text, Image, StyleSheet, Pressable } from 'react-native';
import SideBar from '../Sidebar/SideBar';

const Navbar = () => {

    const [sideBarClicked, setSideBarClicked] = useState(false);

    const openSideBar = () => {
        if (!sideBarClicked) {
            setSideBarClicked(true)
        }
        else {
            setSideBarClicked(false)
        }
    }

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            {sideBarClicked && <SideBar />}
            <View style={styles.navbar_container}>
                <View style={styles.navbar_item_main_container}>
                    <View style={styles.navbar_item_container}>
                        <View>
                            <Image source={{ uri: "https://toppng.com/uploads/preview/menu-icon-png-3-lines-11552739283bazga05wbc.png" }} style={{ width: 40, height: 40 }} />
                            <Pressable onPress={openSideBar}><Text>Press</Text></Pressable>
                        </View>
                        <View>
                            <Image source={{ uri: "https://icons-for-free.com/iconfiles/png/512/HOME-131994911289288683.png" }} style={{ width: 40, height: 40 }} />
                        </View>
                        <View>
                            <Image source={{ uri: "https://e7.pngegg.com/pngimages/625/387/png-clipart-bookmark-computer-icons-symbol-symbol-miscellaneous-angle-thumbnail.png" }} style={{ width: 30, height: 30 }} />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Navbar;

const styles = StyleSheet.create({
    navbar_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    navbar_item_main_container: {
        flexDirection: 'row',
    },
    navbar_item_container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        justifyContent: 'space-between',
        paddingRight: 20,
        paddingLeft: 20,
    },
})