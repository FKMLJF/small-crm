/**
 * Created by Vincze József
 * Created 2021-08-16
 */
import * as React from 'react';
import { Text, View} from "react-native";
import AppStyleSheet from "../../../AppStyleSheet";
import Home from "./home";


export default function HomeScreen({ navigation }) {

 return (
        <View style={AppStyleSheet.viewTop}>
           <Home/>
        </View>);
}