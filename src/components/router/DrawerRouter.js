import * as React from 'react';
import {
    createDrawerNavigator,
} from '@react-navigation/drawer';
import CustomerScreen from "../customers/customers-screen";
import HomeScreen from "../home/home-screen";
import VisitScreen from "../visit/visit-screen";
import OrdersScreen from "../orders/orders-screen";
import SettingsScreen from "../settings/settings-screen";
import {Button, Text} from "react-native";


const Drawer = createDrawerNavigator();

export default function DrawerRouter(){
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Főoldal" component={HomeScreen} />
            <Drawer.Screen name="Ügyfelek" component={CustomerScreen} />
            <Drawer.Screen name="Látogatások" component={VisitScreen} />
            <Drawer.Screen name="Rendelések" component={OrdersScreen} />
            <Drawer.Screen name="Beállítások" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}