import { Block, Text } from "galio-framework";
import React, { useState } from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from "react-native";
import { argonTheme } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

const Router_Management = () => {
  const [routerOn, setRouterOn] = useState(true);
 const navigation = useNavigation();

  const onManageWifi = () => {
    navigation.navigate("Manage WI-FI");
  }

  const onViewDevices = () => {
    navigation.navigate("Devices List");
  }

  return (<Block>
    <Block>
      <MaterialCommunityIcons
        name="circle"
        style={{
          backgroundColor: routerOn ? argonTheme.COLORS.SUCCESS : argonTheme.COLORS.WARNING
        }}
        size={24}
      />
      <Text>{routerOn ? "On" : "Off"}</Text>
    </Block>
    <Block>
      <TouchableOpacity onPress={onManageWifi}>
        <MaterialCommunityIcons
          name="wifi-cog"
          size={24}
        />
        <Text>Manage Wifi</Text>
      </TouchableOpacity>
    </Block>
    <Block>
      <TouchableOpacity onPress={onViewDevices}>
        <MaterialCommunityIcons
          name="devices"
          size={24}
        />
        <Text>View Devices</Text>
      </TouchableOpacity>
    </Block>
  </Block>)
}

export default Router_Management;
