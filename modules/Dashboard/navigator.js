import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../../components";
import Dashboard from "./screens/Dashboard";

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
        </Stack.Navigator>
    );
}