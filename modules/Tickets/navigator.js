import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../../components";
import Tickets from "./screen/Tickets";

const Stack = createStackNavigator();

export default function TicketsStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: 'screen', cardStyle: { backgroundColor: '#F8F9FE' } }}
        >
            <Stack.Screen
                name="TicketsStack"
                component={Tickets}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Tickets" navigation={navigation} scene={scene} />
                    ),
                }}
            />
        </Stack.Navigator>
    );
}