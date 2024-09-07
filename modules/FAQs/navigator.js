import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FAQs from "./screens/FAQs";
import { Header } from "../../components";
const Stack = createStackNavigator();

export default function FAQStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: 'screen', cardStyle: { backgroundColor: '#F8F9FE' } }}
        >
            <Stack.Screen
                name="FAQStack"
                component={FAQs}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="FAQs" navigation={navigation} scene={scene} />
                    ),
                }}
            />
        </Stack.Navigator>
    );
}