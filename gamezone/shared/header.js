import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        height: '135%',
        marginTop: -15,
        marginLeft: -15,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        marginTop: 15,
        letterSpacing: 1,
        height: '100%',
        alignItems: "center",
    },
    icon: {
        position: 'absolute',
        left:5,
        top: 15,
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
        marginTop: 15,
    },
    headerTitle: {
        flexDirection: 'row'
    }
})