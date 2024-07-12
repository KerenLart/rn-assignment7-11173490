import React from "react";
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native'

import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import { SafeAreaView } from "react-native-safe-area-context";

export function DrawerContent(props){
    return(
        <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                    <Image source={require('../assets/Close.png')}/>
                </TouchableOpacity>
                <View style={styles.nameview}>
                  <Text style={styles.nametext}>ERIC ATSU</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.text}>
                        Store
                    </Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.text}>
                        Locations
                    </Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.text}>
                        Blog
                    </Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.text}>
                        Jewelery
                    </Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.text}>
                        Electronics
                    </Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.text}>
                        Clothing
                    </Text>
                </View>
        </SafeAreaView>
    );
    
}

const styles = StyleSheet.create ({
    container:{
        padding:10
    },

    nameview:{
        marginTop:15,
        borderBottomWidth: 1,
        width:150,
        borderBottomColor: 'red'
    },

    nametext:{
        fontSize:20
    },

    list:{
        marginTop:30
    },
    text:{
        fontSize:15
    }
})