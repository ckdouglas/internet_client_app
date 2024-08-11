import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawerContent from './Menu';
import Dashboard from '../screens/Dashboard';
import Finance from '../screens/Finance';
import Payment from '../screens/Payment';
import Statistics from '../screens/Statistics';
import Router_Management from '../screens/Router_Management';
import Header from '../components/Header';

const { width } = Dimensions.get('screen');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function FinanceStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: 'screen', cardStyle: { backgroundColor: '#F8F9FE' } }}
    >
      <Stack.Screen
        name="FinanceStack"
        component={Finance}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Finance" navigation={navigation} scene={scene} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function PaymentStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: 'screen', cardStyle: { backgroundColor: '#F8F9FE' } }}
    >
      <Stack.Screen
        name="PaymentStack"
        component={Payment}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Payment" search options navigation={navigation} scene={scene} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

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
            <Header title="Statistics" search options navigation={navigation} scene={scene} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

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
            <Header title="Router Management" search options navigation={navigation} scene={scene} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function DashboardStack() {
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

export default function AppDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{ backgroundColor: 'white', width: width * 0.8 }}
      drawerContentOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#000',
        activeBackgroundColor: 'transparent',
        itemStyle: {
          width: width * 0.75,
          backgroundColor: 'transparent',
          paddingVertical: 16,
          paddingHorizontal: 12,
          justifyContent: 'center',
          alignItems: 'center',
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: 'normal',
        },
      }}
      initialRouteName="Dashboard"
    >
      <Drawer.Screen name="Dashboard" options={{ headerShown: false }} component={DashboardStack} />
      <Drawer.Screen name="Finance" options={{ headerShown: false }} component={FinanceStack} />
      <Drawer.Screen name="Payment" options={{ headerShown: false }} component={PaymentStack} />
      <Drawer.Screen name="Statistics" options={{ headerShown: false }} component={StatisticsStack} />
      <Drawer.Screen name="Router Management" options={{ headerShown: false }} component={Router_ManagementStack} />
    </Drawer.Navigator>
  );
}
