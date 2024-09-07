import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../../components";
import SpeedTest from "./screens/SpeedTest"

const Stack = createStackNavigator();

export default function SpeedTestStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: 'screen', cardStyle: { backgroundColor: '#F8F9FE' } }}
        >
            <Stack.Screen
                name="SpeedTestStack"
                component={SpeedTest}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Speed Test" navigation={navigation} scene={scene} />
                    ),
                }}
            />
        </Stack.Navigator>
    );
}