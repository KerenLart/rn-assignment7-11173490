import React from "react";
import { View, Image, TouchableOpacity,StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {
    const navigation = useNavigation();
    return(
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Image
                    source={require('../assets/Menu.png')}
                    />
                    
                </TouchableOpacity>
                <View>
                    <Image source={require('../assets/Logo.png')} style={styles.headerLogo}
                    onError={(e) => console.log('Error loading image:', e.nativeEvent.error)}/>
                </View>
                <View style={styles.searchBag}>
                    <View>
                        <Image source={require('../assets/Search.png')} style={styles.search}/>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('CheckOut')} >
                        <Image source={require('../assets/shoppingBag.png')} style={styles.bag}   />
                        </TouchableOpacity>
                        
                    </View>
                </View>
                </View>
    )
};


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
    },
    searchBag:{
        flexDirection:'row',
    
    },

    search:{
        marginRight:10,
        
    },
});
export default HomeHeader;