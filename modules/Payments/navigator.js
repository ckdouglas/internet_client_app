import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Payment from "./screens/Payment";
import Pay from "./screens/Pay";
import { TouchableOpacity } from "react-native";
import { Header, Icon, Text } from "../../components";

const Stack = createStackNavigator();

function PaymentStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: 'screen', cardStyle: { backgroundColor: '#FFFFFF' } }}
    >
      <Stack.Screen
        name="PaymentStack"
        component={Payment}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Payment" navigation={navigation}   scene={scene} />
          ),
        }}
      />

      <Stack.Screen
        name="Pay"
        component={Pay}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Pay" navigation={navigation} back scene={scene} />
          ),
        }}
      />
    </Stack.Navigator>


  );
}

export default PaymentStack;