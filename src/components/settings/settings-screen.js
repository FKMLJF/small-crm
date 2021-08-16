/**
 * Created by Vincze József
 * Created 2021-08-16
 */
import * as React from 'react';
import { Text, View} from "react-native";
import AppStyleSheet from "../../../AppStyleSheet";


export default function SettingsScreen({ navigation }) {

    return (
        <View style={AppStyleSheet.view}>
            <Text>A beállítások tartalma</Text>
        </View>);
}