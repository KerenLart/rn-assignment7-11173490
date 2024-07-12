import React, {useContext,useEffect,useMemo} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList,TouchableOpacity } from "react-native-gesture-handler";
import CheckoutHeader from "../components/checkoutheader";
import { CheckoutContext } from '../utils/Checkoutcontext'; 
import CardCollection from "../components/cardcollection";
import Footer from "../components/footer";

function Checkout({navigation}){
    const { cart, handleRemoveFromCart } = useContext(CheckoutContext);
  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);
  const handleItemPress = (item) => {
    navigation.navigate('ItemDetails', { item });
  };

  const totalAmount = useMemo(() => {
    return cart.reduce((total, item) => {
      const price = typeof item.price === 'string' 
        ? parseFloat(item.price.replace(/[^0-9.-]+/g, ''))
        : item.price || 0;
      return total + price;
    }, 0).toFixed(2);
  }, [cart]);
    return(
        <SafeAreaView style={{flex:1}}>
        <CheckoutHeader/>
        <FlatList
          style={{ padding: 20 }}
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <CardCollection
                dress={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                icon={require('../assets/remove.png')}
                onPress={() =>  handleRemoveFromCart(item)}
              />
            </TouchableOpacity>
          )}
        />
        <Footer totalAmount={totalAmount} />
    </SafeAreaView>
    )
   
}

export default Checkout;