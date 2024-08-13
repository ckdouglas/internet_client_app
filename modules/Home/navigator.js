import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './components/CustomDrawerContent';
import DashboardStack from '../Dashboard/navigator';
import FinanceStack from '../Finance/navigator';
import PaymentStack from '../Payments/navigator';
import StatisticsStack from '../Statistics/navigator';
import Router_ManagementStack from '../RouterManagement/navigator';

const { width } = Dimensions.get('screen');

const Drawer = createDrawerNavigator();

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
