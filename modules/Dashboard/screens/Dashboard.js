import React from "react";
import { Block } from "galio-framework";
import { ProfileInfo, Stats } from "../components";
import ActivePackage from "../components/ActivePackage";
import QuickMenu from "../components/QuickMenu";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
 const stats = {download: 70, upload: 60};

  const quickMenuItems = [
    {
      label: 'Router',
      icon: 'router',
      onPress: () => {
        console.log("Navigate to Router");
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
        console.log("Navigate to Financials");
      }
    },
    {
      label: 'Stats',
      icon: 'trending-up',
      onPress: () => {
        console.log("Navigate to Stats");
      }
    },
  ]

  return (
    <Block>
      <ProfileInfo user={user} />
      <ActivePackage package={null} />
      <QuickMenu menuItems={quickMenuItems} />
      <Stats stats={stats} />
    </Block>
  )
}

export default Dashboard;
