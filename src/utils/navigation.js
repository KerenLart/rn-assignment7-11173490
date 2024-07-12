import * as React from 'react';
import { createDrawerNavigator} from "@react-navigation/drawer"
import Home from '../screens/home';
import Checkout from '../screens/checkout';
import ItemDetailsScreen from '../screens/itemdetailsScreen';
import {DrawerContent} from './drawercontent';

const Drawer = createDrawerNavigator(); 

export default function Navigation() {
    return(
        <Drawer.Navigator 
        drawerContent={props=> 
        <DrawerContent{...props}/>}>
             <Drawer.Screen name="Our Story" component={Home} options={{ headerShown: false }} />
             <Drawer.Screen name ="ItemDetails" component={ItemDetailsScreen} options={{headerShown:false}} />
             <Drawer.Screen name="CheckOut" component={Checkout} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )}
