import * as React from 'react';
import { StyleSheet,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../components/homeheader';
import Title from '../components/title';
import HomeList from '../components/homelist';
import { CheckoutContext } from '../utils/Checkoutcontext';
import { useContext } from 'react';


function Home({navigation}){ 
    const { handleAddToCart, products } = useContext(CheckoutContext);
    return(
        <SafeAreaView style={styles.container}>
        <HomeHeader />
        <Title />
        <HomeList products={products} handleAddToCart={handleAddToCart} />
        </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
});

export default Home;