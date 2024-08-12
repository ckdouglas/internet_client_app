import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../../components";
import Router_Management from "./screens/Router_Management";

const Stack = createStackNavigator();

function Router_ManagementStack() {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: 'screen' }}
      >
        <Stack.Screen
          name="RouterManagementStack"
          component={Router_Management}
          options={{
            header: ({ navigation, scene }) => (
              <Header title="Router Management" navigation={navigation} scene={scene} />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }

export default Router_ManagementStack;