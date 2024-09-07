import React from "react";
import { StyleSheet, View } from "react-native";
import { Block } from "galio-framework";
import { ProfileInfo, Stats } from "../components";
import ActivePackage from "../components/ActivePackage";
import QuickMenu from "../components/QuickMenu";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const stats = { download: 70, upload: 60 };
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
    <View style={styles.container}>
      <Block safe >
        <ProfileInfo user={user} />
        <ActivePackage package={null} />
        <QuickMenu menuItems={quickMenuItems} />
        <Stats stats={stats} />
      </Block>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
})

export default Dashboard;
