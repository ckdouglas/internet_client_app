import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../../components";
import Finance from "./screens/Finance";

const Stack = createStackNavigator();

function FinanceStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: 'screen', cardStyle: { backgroundColor: '#F8F9FE' } }}
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
    </Stack.Navigator>
  );
}

export default FinanceStack;