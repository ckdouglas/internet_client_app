import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Block } from "galio-framework";
import { ProfileInfo, Stats } from "../components";
import ActivePackage from "../components/ActivePackage";
import QuickMenu from "../components/QuickMenu";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getMyInfo } from "../api";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const stats = { download: 70, upload: 60 };
  const navigation = useNavigation();
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  const quickMenuItems = [
    {
      label: 'Router',
      icon: 'router',
      onPress: () => {
        navigation.navigate("Router Management");
      }
    },
    {
      label: 'Pay',
      icon: 'attach-money',
      onPress: () => {
        navigation.navigate("Payment");
        console.log("Navigate to Pay");
      }
    },
    {
      label: 'Financials',
      icon: 'payment',
      onPress: () => {
        navigation.navigate("Finance");
      }
    },
    {
      label: 'Stats',
      icon: 'trending-up',
      onPress: () => {
        navigation.navigate("Statistics");
      }
    },
  ]

  useEffect(() => {
    fetchMyInfo()
  }, []);

  const fetchMyInfo = async () => {
    getMyInfo()
      .then(({ name, phone, additional_attributes }) => {
        setCustomer({ name, phone, activePackage: additional_attributes.plan_title, activationTime: additional_attributes.activation_time });
      })
      .catch((e) => console.log("e----", e))
      .finally(() => setLoading(false))
  }

  return (
    <View style={styles.container}>
      <Block safe >
        {loading ? <ActivityIndicator /> : <ProfileInfo customer={customer} />}
        {loading ? <ActivityIndicator /> : <ActivePackage activePackage={customer.activePackage} activationTime={customer.activationTime} />}
        <QuickMenu menuItems={quickMenuItems} />
        <Stats stats={stats} />
      </Block>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})

export default Dashboard;
