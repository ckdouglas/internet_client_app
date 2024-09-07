import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Header, Icon, Text } from "../../components";
import Finance from "./screens/Finance";
import Reciepts from "./screens/Reciepts";
import Invoices from "./screens/Invoices";
import ViewReciept from "./screens/ViewReciept";
import ViewInvoice from "./screens/ViewInvoice";

const Stack = createStackNavigator();

export default FinanceStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: 'screen', cardStyle: { backgroundColor: '#FFFFFF' } }}
    >
      <Stack.Screen
        name="FinanceStack"
        component={Finance}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Finance" navigation={navigation} scene={scene} />
          ),
        }}
      />

      <Stack.Screen
        name="Reciepts"
        component={Reciepts}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Reciepts" navigation={navigation} back scene={scene} />
          ),
        }}
      />


      <Stack.Screen
        name="Invoices"
        component={Invoices}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Invoices" navigation={navigation} back scene={scene} />
          ),
        }}
      />

      <Stack.Screen
        name="View Invoice"
        component={ViewInvoice}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Invoice" navigation={navigation} back scene={scene} />
          ),
        }}
      />

      <Stack.Screen
        name="View Reciept"
        component={ViewReciept}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Reciept" navigation={navigation} back scene={scene} />
          ),
        }}
      />

    </Stack.Navigator>
  );
}