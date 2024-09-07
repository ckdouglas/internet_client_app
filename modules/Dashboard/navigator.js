import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../../components";
import Dashboard from "./screens/Dashboard";
import Finance from "../Finance/screens/Finance";

const Stack = createStackNavigator();

export default function DashboardStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: 'screen', cardStyle: { backgroundColor: '#F8F9FE' } }}
        >
            <Stack.Screen
                name="DashboardStack"
                component={Dashboard}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Dashboard" navigation={navigation} scene={scene} />
                    ),
                }}
            />

            <Stack.Screen
                name="Finance"
                component={Finance}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Finance" navigation={navigation} back scene={scene} />
                    ),
                }}
            />


        </Stack.Navigator>
    );
}