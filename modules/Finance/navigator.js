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
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("FinanceStack")} style={{ padding: 10 }}>
              <Icon name="chevron-left" family="Entypo" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: 'Reciepts', // Optionally remove the title
          headerStyle: {
            // You can customize the header style here
          },
        }}
      />


      <Stack.Screen
        name="Invoices"
        component={Invoices}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("FinanceStack")} style={{ padding: 10 }}>
              <Icon name="chevron-left" family="Entypo" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: 'Invoices', // Optionally remove the title
          headerStyle: {
            // You can customize the header style here
          },
        }}
      />

      <Stack.Screen
        name="View Invoice"
        component={ViewInvoice}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Invoices")} style={{ padding: 10 }}>
              <Icon name="chevron-left" family="Entypo" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: 'View Invoice', // Optionally remove the title
          headerStyle: {
            // You can customize the header style here
          },
        }}
      />

      <Stack.Screen
        name="View Reciept"
        component={ViewReciept}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Reciepts")} style={{ padding: 10 }}>
              <Icon name="chevron-left" family="Entypo" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: 'View Reciept', // Optionally remove the title
          headerStyle: {
            // You can customize the header style here
          },
        }}
      />

    </Stack.Navigator>
  );
}