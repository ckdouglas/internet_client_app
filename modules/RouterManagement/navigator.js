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
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate("RouterManagementStack")} style={{ padding: 10 }}>
                <Icon name="chevron-left" family="Entypo" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: 'Devices List',
          }}
        />
        <Stack.Screen
          name="Manage WI-FI"
          component={ManageWifi}
          options={{
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate("RouterManagementStack")} style={{ padding: 10 }}>
                <Icon name="chevron-left" family="Entypo" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: 'Manage WI-FI',
          }}
        />
      </Stack.Navigator>
    );
  }

export default Router_ManagementStack;