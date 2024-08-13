import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../../components";
import Statistics from "./screens/Statistics";

const Stack = createStackNavigator();

function StatisticsStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: 'screen', cardStyle: { backgroundColor: '#F8F9FE' } }}
    >
      <Stack.Screen
        name="StatisticsStack"
        component={Statistics}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Statistics" navigation={navigation} scene={scene} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default StatisticsStack;