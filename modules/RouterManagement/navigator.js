import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../../components";
import { Devices, Router_Management, ManageWifi } from "./screens";

const Stack = createStackNavigator();

function Router_ManagementStack({ navigation }) {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: 'screen' }}
      >
        <Stack.Screen
          name="RouterManagement"
          component={Router_Management}
          options={{
            header: ({ navigation, scene }) => (
              <Header title="Router Management" navigation={navigation} scene={scene} />
            ),
          }}
        />
        <Stack.Screen
          name="Devices List"
          component={Devices}
          options={{
            header: ({ navigation, scene }) => (
              <Header title="Devices List" navigation={navigation} scene={scene} />
            ),
          }}
        />
        <Stack.Screen
          name="Manage WI-FI"
          component={ManageWifi}
          options={{
            header: ({ navigation, scene }) => (
              <Header title="Manage WI-FI" navigation={navigation} scene={scene} />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }

export default Router_ManagementStack;