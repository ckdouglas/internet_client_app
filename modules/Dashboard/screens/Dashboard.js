import React from "react";
import { Block } from "galio-framework";
import { ProfileInfo, Stats } from "../components";
import ActivePackage from "../components/ActivePackage";
import QuickMenu from "../components/QuickMenu";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const stats = {download: 70, upload: 60};
  const navigation = useNavigation();

  const quickMenuItems = [
    {
      label: 'Router',
      icon: 'router',
      onPress: () => {
        navigation.navigate("RouterManagementStack");
      }
    },
    {
      label: 'Pay',
      icon: 'attach-money',
      onPress: () => {
        console.log("Navigate to Pay");
      }
    },
    {
      label: 'Financials',
      icon: 'payment',
      onPress: () => {
        navigation.navigate("FinanceStack");
      }
    },
    {
      label: 'Stats',
      icon: 'trending-up',
      onPress: () => {
        navigation.navigate("StatisticsStack");
      }
    },
  ]

  return (
    <Block safe>
      <ProfileInfo user={user} />
      <ActivePackage package={null} />
      <QuickMenu menuItems={quickMenuItems} />
      <Stats stats={stats} />
    </Block>
  )
}

export default Dashboard;
