import Collection from "./collection";
import React from "react";
import { FlatList,StyleSheet,TouchableOpacity } from "react-native";
import {CheckoutContext} from '../utils/Checkoutcontext'
import {useNavigation} from '@react-navigation/native' ;
import { useContext } from "react";


const HomeList=({ handleAddToCart}) =>{
    const navigation = useNavigation();

    const handleItemPress = (item) => {
        navigation.navigate('ItemDetails', { item });
      };
      const {  products } = useContext(CheckoutContext);

      return (
        <FlatList
          style={{ padding: 20 }}
          numColumns={2}
          
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <Collection
                dress={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                icon={require('../assets/add_circle.png')}
                onPress={() => handleAddToCart(item)}
              />
            </TouchableOpacity>
          )}
        />
      );
}

const styles = StyleSheet.create({

})
export default HomeList