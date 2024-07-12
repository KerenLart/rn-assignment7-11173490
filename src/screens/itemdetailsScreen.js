import * as React from 'react';
import {View,Text, Image,StyleSheet} from 'react-native'
import HomeHeader from '../components/homeheader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

export default function ItemDetailsScreen ({route}){
        const { item } = route.params;
        console.log(item.image)
    return(
        <SafeAreaView style={{flex:1}}>
            <HomeHeader />
            <ScrollView>
            
             <View>
             <Image source={{ uri: item.image}} style={styles.image} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.price}><Text>$</Text>{item.price}</Text>
             </View>
             </View>
             <View style={styles.materialcontainer}>
                <Text>MATERIALS</Text>
                <Text>
                    We work with monitoring programmes to
                    ensure compliance with safety, health and
                    quality standards for our products. 
                </Text>
                <View>
                <View style={styles.washingContainer}> 
                    <Image source={require('../assets/Do Not Bleach.png')}/>
                    <Text style={styles.washtext}>
                        Do not use bleach
                    </Text>
                </View>
                <View style={styles.washingContainer}> 
                    <Image source={require('../assets/Do Not Tumble Dry.png')}/>
                    <Text style={styles.washtext}>
                        Do not tumble dry
                    </Text>
                </View>
                <View style={styles.washingContainer}> 
                    <Image source={require('../assets/Do Not Wash.png')}/>
                    <Text style={styles.washtext} >
                        Dry clean with tetrachloroethylene
                    </Text>
                </View>
                <View style={styles.washingContainer}> 
                    <Image source={require('../assets/Iron Low Temperature.png')}/>
                    <Text style={styles.washtext}>
                    Iron at a maximum of 110oC/230oF
                    </Text>
                </View>
                </View>
                <View style={styles.border}></View>
                <View style={styles.shippingcoont}>
                    <Image source={require('../assets/Door to Door Delivery.png')}/>
                    <View style={styles.shippingtext}> 
                        <Text>Free Flat Rate Shipping </Text>
                        <Text>Estimated to be delivered on </Text>
                        <Text> 09/11/2021 - 12/11/2021. </Text>
                    </View>
                </View>
             </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.addbasket}>
                <Image style={styles.footerimg} source={require('../assets/Plus.png')}/>
                <Text style={styles.footertext}>
                    ADD TO BASKET
                </Text>     
                </View>
                <View style={styles.heart}>
                    <Image
                    source={require('../assets/Heart.png')} style={{tintColor:'#fff'}}/>
                </View>
            </View>
        </SafeAreaView>
          
       
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      detailsContainer: {
        padding: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      description: {
        fontSize: 16,
        marginBottom: 10,
      },
      price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e67e22',
      },
      washingContainer:{
        flexDirection:'row',
        marginTop:20,
        
        
      },
      materialcontainer:{
       padding:20 
      },

      washtext:{
        marginLeft:20,
        color:'grey'
      }, 
      shippingcoont:{
        flexDirection:'row'
      },

      border:{
        marginTop:30,
        marginBottom:30,
        borderBottomWidth:1,
        borderColor:'gray'
      },

      shippingtext:{
        marginLeft:15
      },
      footer:{
        flexDirection:'row',
        padding:20,
        alignItems: 'center',
        height: 50,
        backgroundColor:'#000',
    },
    footerimg:{
        tintColor:'#fff',
        marginRight:20,
    },
    footertext:{
        color:'#fff',
        fontSize:15,
    },
    addbasket:{
        flexDirection:'row',
        width: '100%',
    },
    heart:{
        position: 'absolute',
        right: 20,
    }
})