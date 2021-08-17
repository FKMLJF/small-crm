import React from 'react';
import DrawerRouter from "./src/components/router/DrawerRouter";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
      <NavigationContainer>
        <DrawerRouter />
      </NavigationContainer>
  );
}