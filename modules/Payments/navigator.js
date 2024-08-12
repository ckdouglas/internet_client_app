import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../../components";
import Payment from "./screens/Payment";

const Stack = createStackNavigator();

function PaymentStack() {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: 'screen', cardStyle: { backgroundColor: '#F8F9FE' } }}
      >
        <Stack.Screen
          name="PaymentStack"
          component={Payment}
          options={{
            header: ({ navigation, scene }) => (
              <Header title="Payment"  navigation={navigation} scene={scene} />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }

export default PaymentStack;