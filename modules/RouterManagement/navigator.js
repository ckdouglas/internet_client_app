import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Header, Icon } from "../../components";
import { Devices, Router_Management, ManageWifi } from "./screens";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

function Router_ManagementStack({ navigation }) {
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
        <Stack.Screen
          name="Devices List"
          component={Devices}
          options={{
            header: ({ navigation, scene }) => (
              <Header title="Devices" navigation={navigation} back scene={scene} />
            ),
          }}
        />
        <Stack.Screen
          name="Manage WI-FI"
          component={ManageWifi}
          options={{
            header: ({ navigation, scene }) => (
              <Header title="Manage Wifi" navigation={navigation} back scene={scene} />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }

export default Router_ManagementStack;